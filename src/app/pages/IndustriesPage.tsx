import { ShoppingCart, Factory, Truck, Zap } from "lucide-react";

export function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#217ED9] bg-clip-text text-transparent">
              Industries We Serve
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Any enterprise that operates physical assets at scale faces the same challenge — operational data exists, but action doesn't follow.
            </p>
          </div>
        </div>
      </section>

      {/* Retail & Grocery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-12 reveal">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-8 h-8 text-[#217ED9]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Retail & Grocery</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-4">Use Cases</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Refrigeration and HVAC failures</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Missed inventory due to asset downtime</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Associate inefficiency during order fulfillment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Preventable service dispatches</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#10b981] mb-2">Outcome</h3>
                  <p className="text-slate-300">Reduced spoilage, higher order accuracy, improved store operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-20 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-12 reveal">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Factory className="w-8 h-8 text-[#217ED9]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Manufacturing</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-4">Use Cases</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Equipment reliability</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Predictive maintenance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Quality deviations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Workforce coordination</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#10b981] mb-2">Outcome</h3>
                  <p className="text-slate-300">Higher uptime, lower scrap, improved throughput.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Transportation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-12 reveal">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="w-8 h-8 text-[#217ED9]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Logistics & Transportation</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-4">Use Cases</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Fleet performance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Cold chain integrity</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Dock and yard operations</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#10b981] mb-2">Outcome</h3>
                  <p className="text-slate-300">Fewer delays, reduced loss, better SLA performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy & Utilities */}
      <section className="py-20 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-12 reveal">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-[#217ED9]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Energy & Utilities</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-4">Use Cases</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Remote asset monitoring</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Regulatory compliance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#217ED9] mt-1">•</span>
                      <span className="text-slate-300">Incident response</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#10b981] mb-2">Outcome</h3>
                  <p className="text-slate-300">Safer operations, faster response, reduced outages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}