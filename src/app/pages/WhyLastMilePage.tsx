import { Target, Shield, TrendingUp, Layers } from "lucide-react";

export function WhyLastMilePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white from-50% to-[#217ED9] bg-clip-text text-transparent">
              Why Last Mile Exists
            </h1>
          </div>

          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-2xl text-slate-300">
              This problem has existed for decades — not because it's small, but because it sits between silos.
            </p>
            <p className="text-2xl text-slate-300 mt-6">
              Last Mile exists to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-12 text-center">What Makes Last Mile Different</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Built Inside ServiceNow, Not Bolted On</h3>
                <p className="text-slate-400">
                  We're not an integration sitting outside your systems. Last Mile is native to ServiceNow, delivering seamless workflows.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Designed for Enterprise Scale</h3>
                <p className="text-slate-400">
                  Built to handle thousands of assets across global operations—not proof-of-concept pilots that never scale.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Productized, Repeatable, Supportable</h3>
                <p className="text-slate-400">
                  No custom code. No science projects. A platform that can be deployed, maintained, and upgraded like any enterprise solution.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Ecosystem-First by Design</h3>
                <p className="text-slate-400">
                  Partners deliver the solution. OEMs contribute insights. Customers own outcomes. Everyone has a role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap We Close */}
      <section className="py-20 bg-[#0b1120] border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-8">The Gap We Close</h2>
            
            <div className="space-y-8">
              <div className="glass-panel p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Between OT and IT</h3>
                <p className="text-slate-400 text-lg">
                  Operational technology teams speak a different language than IT. Last Mile translates operational data into enterprise-consumable workflows.
                </p>
              </div>

              <div className="glass-panel p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Between Data and Action</h3>
                <p className="text-slate-400 text-lg">
                  Data without action is waste. Last Mile ensures that every meaningful operational signal triggers the right workflow at the right time.
                </p>
              </div>

              <div className="glass-panel p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Between OEMs and Customers</h3>
                <p className="text-slate-400 text-lg">
                  OEMs want to know how their equipment performs. Customers don't want to surrender control. Last Mile creates transparency without conflict.
                </p>
              </div>

              <div className="glass-panel p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Between Promise and Reality</h3>
                <p className="text-slate-400 text-lg">
                  Most "digital transformation" initiatives fail because they're too broad, too custom, or too theoretical. Last Mile is specific, productized, and proven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}