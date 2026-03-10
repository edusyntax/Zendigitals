import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTransition from "@/components/SectionTransition";
import TiltCard from "@/components/TiltCard";
import SEOHead from "@/components/SEOHead";
import { format } from "date-fns";

const BlogPage = () => {
  const navigate = useNavigate();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["public-blog-posts"],
    queryFn: async () => {
      const { data } = await supabase
        .from("posts")
        .select("id, title, slug, excerpt, status, published_at, reading_time_minutes, cover_image, category_id, author_id, categories(name), profiles!posts_author_id_fkey(display_name)")
        .eq("status", "published")
        .order("published_at", { ascending: false });
      return data ?? [];
    },
  });

  const featured = posts?.[0];
  const rest = posts?.slice(1) ?? [];

  return (
    <PageLayout>
      <SEOHead
        title="Blog — Digital Marketing Insights"
        description="Actionable strategies, industry analysis, and expert perspectives on digital marketing, SEO, AI, and growth from the Zendigitalz team."
      />
      <PageHero overline="Blog" title="Insights for" titleAccent="growth-driven brands" description="Actionable strategies, industry analysis, and expert perspectives on digital marketing, SEO, AI, and growth." />

      {isLoading && (
        <section className="py-12 site-container text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto" />
        </section>
      )}

      {!isLoading && posts?.length === 0 && (
        <section className="py-12 site-container text-center">
          <p className="text-muted-foreground">No articles published yet. Check back soon!</p>
        </section>
      )}

      {featured && (
        <SectionTransition>
          <section className="py-12 site-container">
            <ScrollReveal>
              <div className="glass rounded-2xl p-8 md:p-12 border border-foreground/[0.12] relative overflow-hidden cursor-pointer group" onClick={() => navigate(`/blog/${featured.slug}`)}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent pointer-events-none rounded-2xl" />
                {featured.cover_image && (
                  <div className="absolute inset-0 pointer-events-none">
                    <img src={featured.cover_image} alt="" className="w-full h-full object-cover opacity-10" />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="glass text-xs text-accent px-3 py-1 rounded-full border border-accent/20">Featured</span>
                    <span className="text-muted-foreground text-xs">{(featured as any).categories?.name ?? "Uncategorized"}</span>
                    <span className="text-muted-foreground/50 text-xs">·</span>
                    <span className="text-muted-foreground text-xs">{featured.reading_time_minutes} min read</span>
                  </div>
                  <h2 className="text-foreground text-2xl md:text-4xl font-grotesk font-bold mb-4 group-hover:text-accent transition-colors duration-300 max-w-3xl">{featured.title}</h2>
                  <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"><span className="text-accent font-grotesk text-xs font-bold">Z</span></div>
                    <div>
                      <p className="text-foreground text-sm font-medium">{(featured as any).profiles?.display_name ?? "Zendigitalz"}</p>
                      <p className="text-muted-foreground text-xs">{featured.published_at ? format(new Date(featured.published_at), "MMMM d, yyyy") : ""}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </SectionTransition>
      )}

      {rest.length > 0 && (
        <SectionTransition>
          <section className="py-16 site-container">
            <ScrollReveal>
              <p className="text-accent font-grotesk text-xs uppercase tracking-[0.3em] mb-4">Latest Articles</p>
              <h2 className="editorial-heading text-[clamp(1.8rem,4vw,3rem)] text-foreground mb-12">All <span className="font-serif italic text-gradient-accent">articles</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 0.08}>
                  <TiltCard className="h-full">
                    <div className="glass rounded-2xl p-6 h-full flex flex-col group border border-foreground/[0.12] relative overflow-hidden cursor-pointer" onClick={() => navigate(`/blog/${post.slug}`)}>
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent pointer-events-none rounded-2xl" />
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent/0 group-hover:bg-accent/30 blur-lg transition-all duration-500 pointer-events-none" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-accent text-xs font-grotesk uppercase tracking-wider">{(post as any).categories?.name ?? "Uncategorized"}</span>
                          <span className="text-muted-foreground/50 text-xs">·</span>
                          <span className="text-muted-foreground text-xs">{post.reading_time_minutes} min read</span>
                        </div>
                        <h3 className="text-foreground text-lg font-grotesk font-bold mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-muted-foreground/60 text-xs">{post.published_at ? format(new Date(post.published_at), "MMMM d, yyyy") : ""}</p>
                          <span className="text-accent text-xs font-grotesk uppercase tracking-wider group-hover:tracking-[0.2em] transition-all duration-300">Read →</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </SectionTransition>
      )}
    </PageLayout>
  );
};

export default BlogPage;
