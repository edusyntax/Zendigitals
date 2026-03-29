import { ProcessData } from "@/types/services";

export function ProcessSection({ data }: { data: ProcessData }) {
  return (
    <section className="py-8 bg-background-primary text-foreground relative overflow-hidden">

      {/* AMBIENT */}
      <div className="absolute inset-0 bg-background-ambient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {data.title}
          </h2>

          {/* CTA */}
         {data.cta && (
            <div className="flex gap-3">

              {data.cta.primary && (
                <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm hover:scale-105 transition">
                  {data.cta.primary}
                </button>
              )}

              {data.cta.secondary && (
                <button className="border border-border px-5 py-2.5 rounded-full text-sm hover:bg-background-elevated transition">
                  {data.cta.secondary}
                </button>
              )}

            </div>
          )}

        </div>

        {/* PROCESS FLOW */}
        <div className="overflow-x-auto">

          <div className="flex md:grid md:grid-cols-4 gap-8 md:gap-10 min-w-[700px] md:min-w-0">

            {data.steps.map((step, i) => (
              <div key={i} className="relative group min-w-[220px] md:min-w-0">

                {/* CONNECTOR */}
                {i !== data.steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-[-20px] w-10 h-px bg-border" />
                )}

                {/* CARD */}
                <div className="p-6 rounded-xl bg-background-elevated border border-border transition hover:bg-background-glass hover:shadow-lg">

                  {/* NUMBER */}
                  <p className="text-muted-foreground mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold group-hover:text-primary transition">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}