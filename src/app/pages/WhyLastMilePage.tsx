import { Target, Shield, TrendingUp, Layers, ArrowRight, Radio } from "lucide-react";
import { Link } from "react-router";

export function WhyLastMilePage() {
  return (
    <div className="pt-20 relative min-h-screen">
      <div className="absolute inset-0 data-grid-bg opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white from-50% to-[#217ED9] bg-clip-text text-transparent">
                Why Last Mile Exists
              </h1>
              <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Operational data has been stuck in silos for decades — not because the data isn't useful, but because it's never been connected cleanly to where action happens. Last Mile unlocks that connection.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-12 text-center">Differentiators</h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="glass-panel p-8">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center mb-6">
                    <Layers className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ecosystem-first by design</h3>
                  <p className="text-lg text-slate-400">
                    Built to work with partners, OEMs, and customers — not to replace them
                  </p>
                </div>

                <div className="glass-panel p-8">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center mb-6">
                    <Radio className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Productized "last mile" integrations</h3>
                  <p className="text-lg text-slate-400">
                    Pre-built, repeatable connections — not custom integration projects
                  </p>
                </div>

                <div className="glass-panel p-8">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Engineered for enterprise scale</h3>
                  <p className="text-lg text-slate-400">
                    Thousands of assets, global operations, enterprise-grade reliability
                  </p>
                </div>

                <div className="glass-panel p-8">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Built by operators, not marketers</h3>
                  <p className="text-lg text-slate-400">
                    Deep ServiceNow and operations experience solving real problems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagram Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal glass-panel p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Signal → Decision → Outcome</h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center mb-4">
                    <Radio className="w-16 h-16 text-slate-400" />
                  </div>
                  <div className="text-lg font-semibold text-white">Signal</div>
                  <div className="text-sm text-slate-400 mt-2">Operational Data</div>
                </div>

                <ArrowRight className="w-12 h-12 text-[#217ED9] transform md:rotate-0 rotate-90" />

                <div className="text-center">
                  <div className="w-32 h-32 bg-[#217ED9]/20 border-2 border-[#217ED9] rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-16 h-16 text-[#217ED9]" />
                  </div>
                  <div className="text-lg font-semibold text-white">Decision</div>
                  <div className="text-sm text-slate-400 mt-2">Workflow Execution</div>
                </div>

                <ArrowRight className="w-12 h-12 text-[#217ED9] transform md:rotate-0 rotate-90" />

                <div className="text-center">
                  <div className="w-32 h-32 bg-[#10b981]/20 border-2 border-[#10b981] rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-16 h-16 text-[#10b981]" />
                  </div>
                  <div className="text-lg font-semibold text-white">Outcome</div>
                  <div className="text-sm text-slate-400 mt-2">Business Results</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Alignment Note */}
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center reveal">
            <div className="glass-panel p-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                Last Mile aligns with the broader ServiceNow ecosystem direction, including AI-enhanced operational intelligence — bringing operational data into the platform where modern decision-making happens.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center reveal">
            <h2 className="text-3xl font-bold mb-6">Ready to See the Difference?</h2>
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