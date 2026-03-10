import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { milestones, ThemeConfig, SPHERE_RADIUS, SPIRAL_TURNS } from './types';

/* ── Spherical Spiral Curve ── */
class SphericalSpiral extends THREE.Curve<THREE.Vector3> {
  radius: number;
  turns: number;
  constructor(radius: number, turns: number) {
    super();
    this.radius = radius;
    this.turns = turns;
  }
  getPoint(t: number): THREE.Vector3 {
    const phi = Math.PI * 0.12 + t * Math.PI * 0.76;
    const theta = t * this.turns * Math.PI * 2;
    return new THREE.Vector3(
      this.radius * Math.sin(phi) * Math.cos(theta),
      this.radius * Math.cos(phi),
      this.radius * Math.sin(phi) * Math.sin(theta),
    );
  }
}

/* ── Globe ── */
const Globe = React.memo(({ theme }: { theme: ThemeConfig }) => (
  <group>
    <mesh>
      <sphereGeometry args={[SPHERE_RADIUS, 64, 64]} />
      <meshPhysicalMaterial
        color="#12121e"
        metalness={0.8}
        roughness={0.25}
        clearcoat={0.5}
        clearcoatRoughness={0.15}
        envMapIntensity={0.4}
      />
    </mesh>
    {/* grid overlay */}
    <mesh>
      <sphereGeometry args={[SPHERE_RADIUS * 1.003, 28, 28]} />
      <meshBasicMaterial color={theme.primary} wireframe transparent opacity={0.045} />
    </mesh>
    {/* rim glow shell */}
    <mesh>
      <sphereGeometry args={[SPHERE_RADIUS * 1.06, 32, 32]} />
      <meshBasicMaterial color={theme.glow} transparent opacity={0.03} side={THREE.BackSide} />
    </mesh>
  </group>
));
Globe.displayName = 'Globe';

/* ── Spiral Path ── */
const SpiralPath = React.memo(({ progress, theme }: { progress: number; theme: ThemeConfig }) => {
  const tubeRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const curve = new SphericalSpiral(SPHERE_RADIUS * 1.012, SPIRAL_TURNS);
    return new THREE.TubeGeometry(curve, 300, 0.018, 8, false);
  }, []);

  useFrame(() => {
    if (!tubeRef.current) return;
    const count = geometry.index ? geometry.index.count : geometry.attributes.position.count;
    geometry.setDrawRange(0, Math.floor(count * Math.max(0, Math.min(1, progress))));
  });

  return (
    <mesh ref={tubeRef} geometry={geometry}>
      <meshBasicMaterial color={theme.glow} transparent opacity={0.85} depthTest />
    </mesh>
  );
});
SpiralPath.displayName = 'SpiralPath';

/* ── Milestone Node ── */
const MilestoneNode = ({ position, isActive, theme }: { position: THREE.Vector3; isActive: boolean; theme: ThemeConfig }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const s = isActive ? 1 + Math.sin(state.clock.elapsedTime * 2) * 0.12 : 0.55;
      meshRef.current.scale.setScalar(s);
    }
    if (glowRef.current) {
      glowRef.current.visible = isActive;
      if (isActive) glowRef.current.scale.setScalar(1.8 + Math.sin(state.clock.elapsedTime * 1.5) * 0.4);
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.25} floatingRange={[-0.04, 0.04]}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.09, 1]} />
          <meshPhysicalMaterial
            color={isActive ? theme.primary : '#555'}
            transmission={0.5}
            thickness={0.4}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.15}
            roughness={0}
            ior={2.2}
            transparent
            opacity={isActive ? 1 : 0.4}
          />
        </mesh>
      </Float>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial color={theme.glow} transparent opacity={0.18} />
      </mesh>
    </group>
  );
};

/* ── Particles ── */
const Particles = React.memo(({ theme }: { theme: ThemeConfig }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={theme.accent} size={0.012} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
});
Particles.displayName = 'Particles';

/* ── Main Scene ── */
interface GlobeSceneProps {
  progress: number;
  activeIndex: number;
  theme: ThemeConfig;
}

const GlobeScene: React.FC<GlobeSceneProps> = ({ progress, activeIndex, theme }) => {
  const groupRef = useRef<THREE.Group>(null);

  const curve = useMemo(() => new SphericalSpiral(SPHERE_RADIUS * 1.012, SPIRAL_TURNS), []);

  const milestonePositions = useMemo(() => {
    return milestones.map((m) => {
      const pt = curve.getPoint(m.t);
      const n = pt.clone().normalize();
      return pt.clone().add(n.multiplyScalar(0.06));
    });
  }, [curve]);

  useFrame(() => {
    if (!groupRef.current) return;
    const target = progress * Math.PI * 2;
    groupRef.current.rotation.y += (target - groupRef.current.rotation.y) * 0.06;
  });

  return (
    <>
      <ambientLight intensity={0.12} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-3, -2, 4]} intensity={0.25} color={theme.primary} />
      <pointLight position={[0, 0, 0]} intensity={0.4} color={theme.glow} distance={5} />
      <spotLight position={[0, 6, 0]} intensity={0.35} angle={0.5} penumbra={1} color={theme.accent} />
      <fog attach="fog" args={['#050510', 8, 22]} />

      <group ref={groupRef} rotation={[THREE.MathUtils.degToRad(25), 0, 0]}>
        <Globe theme={theme} />
        <SpiralPath progress={progress} theme={theme} />
        {milestonePositions.map((pos, i) => (
          <MilestoneNode key={i} position={pos} isActive={i === activeIndex} theme={theme} />
        ))}
      </group>

      <Particles theme={theme} />
    </>
  );
};

export default GlobeScene;
