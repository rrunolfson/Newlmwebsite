import { Ship, Cpu, Users, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Ship,
    title: "Ownership",
    description:
      "We empower our team to take full ownership of their work. We value initiative, accountability, and the drive to see projects through to completion.",
  },
  {
    icon: Cpu,
    title: "Technical Excellence",
    description:
      "We are solving some of the hardest problems in OT/IT integration. We hold ourselves to the highest standards of engineering and design.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "We believe that the best ideas come from diverse perspectives. We foster an environment of open communication and mutual respect.",
  },
];

export function CareersPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#217ED9]/10 border border-[#217ED9]/20 text-[#217ED9] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Careers at Last Mile Inc.
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight hero-title-gradient">
              Help build the future of AI for the physical world
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Be part of the revolution. Last Mile is at the forefront of the Fourth Industrial
              Revolution. We are an AI‑first company redefining how industries operate and how
              societies thrive.
            </p>
            <p className="text-xl text-slate-400 leading-relaxed">
              At Last Mile, you'll join a team that leads by example, proving every day that AI can
              transform economies, empower communities, and unlock human potential. If you dream in
              algorithms, if you see solutions where others see chaos, if you want to build the
              intelligence that defines the next era... you belong at Last Mile.
            </p>
          </div>
        </div>
      </header>

      {/* Values */}
      <section className="py-20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl glass-panel border border-white/5 reveal"
              >
                <div className="w-10 h-10 rounded-lg bg-[#217ED9]/10 flex items-center justify-center mb-6">
                  <value.icon className="text-[#217ED9] w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20 border-t border-white/5 relative data-grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Open Opportunities</h2>

          {/* AngelList Embed Placeholder */}
          <div className="glass-panel p-12 rounded-3xl border border-white/5 text-center reveal mb-12">
            <p className="text-slate-400 mb-4">Job listings from AngelList will appear here.</p>
            <div className="text-xs text-slate-600 font-mono">
              Script ID: LastMileInc | Source: wellfound.com
            </div>
          </div>

          {/* General Application */}
          <div className="glass-panel p-12 rounded-3xl border border-white/5 text-center reveal">
            <h3 className="text-2xl font-bold text-white mb-4">Don't see the right role?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              We are always looking for exceptional talent in engineering, data science, and
              industrial automation. Send us your resume and tell us how you can help.
            </p>
            <a
              href="mailto:careers@lastmileinc.ai"
              className="inline-flex items-center gap-2 text-[#217ED9] font-bold uppercase tracking-[0.2em] text-sm hover:gap-4 transition-all"
            >
              Send General Application <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
