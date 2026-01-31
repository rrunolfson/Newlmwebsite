import { TrendingUp, Shield, CheckCircle2, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function OEMsPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      <div className="absolute inset-0 data-grid-bg opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white from-50% to-[#217ED9] bg-clip-text text-transparent">
                OEM Partnerships — Improve Products with Field Truth
              </h1>
              <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Manufacturers often lack consistent insight into real-world product performance. Last Mile delivers OEM-safe performance visibility without disrupting customer relationships.
              </p>
            </div>
          </div>
        </section>

        {/* OEM Value Points */}
        <section className="py-20 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-12 text-center">OEM Value</h2>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Product reliability insight</h3>
                  <p className="text-slate-400">
                    See how equipment performs across real customer environments
                  </p>
                </div>

                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Evidence for procurement discussions</h3>
                  <p className="text-slate-400">
                    Objective performance data supports sales and customer retention
                  </p>
                </div>

                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Better design decisions</h3>
                  <p className="text-slate-400">
                    Real-world usage patterns inform product development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Safe Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What's Safe</h2>

              <div className="glass-panel p-12 mb-8">
                <div className="flex items-center justify-center gap-8 mb-8">
                  <Scale className="w-16 h-16 text-[#217ED9]" />
                </div>
                
                <div className="space-y-6 text-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">No IP leakage</h3>
                    <p className="text-lg text-slate-400">
                      Performance data stays within agreed boundaries
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">No replacement of systems</h3>
                    <p className="text-lg text-slate-400">
                      Last Mile connects what exists, doesn't replace it
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">No channel conflict</h3>
                    <p className="text-lg text-slate-400">
                      Customers maintain control over their operations
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#217ED9]/10 border border-[#217ED9] rounded-lg text-center">
                <p className="text-2xl text-white">
                  OEMs gain insight without owning customer operations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 border-y border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1768054948628-82319724f0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2OTc3OTYzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial equipment machinery"
                className="w-full h-96 object-cover rounded-lg border border-slate-700"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center reveal">
            <h2 className="text-3xl font-bold mb-6">Ready to Collaborate with Last Mile?</h2>
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