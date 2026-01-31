import { Users, Target, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function CompanyPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      <div className="absolute inset-0 data-grid-bg opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white from-50% to-[#217ED9] bg-clip-text text-transparent">
                About Last Mile Inc.
              </h1>
              <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Last Mile was founded to solve a simple problem: how to make operational data drive outcomes. Our team has deep experience in ServiceNow, enterprise systems, and real operational workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 border-y border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY5NzM3MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional business team"
                className="w-full h-96 object-cover rounded-lg border border-slate-700"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </section>

        {/* Value Statements */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Believe</h2>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Substance, not hype</h3>
                  <p className="text-lg text-slate-400">
                    We focus on solving real operational problems, not chasing trends
                  </p>
                </div>

                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Execution over experimentation</h3>
                  <p className="text-lg text-slate-400">
                    Built for production deployments, not proof-of-concept pilots
                  </p>
                </div>

                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ecosystem alignment</h3>
                  <p className="text-lg text-slate-400">
                    Designed to work with partners, OEMs, and customers together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Background */}
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center reveal">
            <div className="glass-panel p-12">
              <h2 className="text-3xl font-bold mb-8">Experience That Matters</h2>
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-[#217ED9] mt-1">•</span>
                  <span className="text-lg text-slate-300">Former ServiceNow leaders, architects, and operators</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#217ED9] mt-1">•</span>
                  <span className="text-lg text-slate-300">Deep experience in global enterprise deployments</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#217ED9] mt-1">•</span>
                  <span className="text-lg text-slate-300">Built inside the ServiceNow ecosystem — not adjacent to it</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#217ED9] mt-1">•</span>
                  <span className="text-lg text-slate-300">Practical problem solvers focused on real operational outcomes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center reveal">
            <h2 className="text-3xl font-bold mb-6">Want to Learn More?</h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#0a1929]/80 border-2 border-[#217ED9] hover:bg-[#0a1929] text-white font-semibold text-lg transition-all"
            >
              Talk to Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}