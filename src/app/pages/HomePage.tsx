import { Link } from "react-router";
import { ArrowRight, Database, Workflow, Users, Settings, GitBranch, Zap, Activity, TrendingUp, Wrench, CheckCircle } from "lucide-react";

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 data-grid-bg opacity-20"></div>
      </div>

      {/* Hero Section */}
      <header className="relative pt-32 pb-8 lg:pt-48 lg:pb-10 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-left reveal">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Operational Data Built for <br />
                <span className="hero-title-gradient">Real Enterprise Action</span>
              </h1>

              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                Turn OT and asset performance signals into proactive workflows inside ServiceNow — from operations and service to procurement and reliability.
              </p>

              <div className="flex gap-4 justify-center reveal mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#0a1929]/80 border-2 border-[#217ED9] hover:bg-[#0a1929] text-white font-semibold text-lg transition-all"
                >
                  Talk to Us <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#0a1929]/80 border-2 border-[#217ED9] hover:bg-[#0a1929] text-white font-semibold text-lg transition-all"
                >
                  See Use Cases
                </Link>
              </div>
            </div>

            {/* Hero Visual - Architecture Diagram */}
            <div className="reveal">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-[#217ED9]/20 blur-2xl rounded-lg"></div>

                <div className="relative bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden p-8">
                  {/* Physical Assets */}
                  <div className="flex justify-around mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mx-auto mb-2">
                        <Settings className="w-8 h-8 text-slate-400" />
                      </div>
                      <div className="text-xs text-slate-500">Physical Assets</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mx-auto mb-2">
                        <Activity className="w-8 h-8 text-slate-400" />
                      </div>
                      <div className="text-xs text-slate-500">Sensors</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mx-auto mb-2">
                        <Settings className="w-8 h-8 text-slate-400" />
                      </div>
                      <div className="text-xs text-slate-500">Equipment</div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center mb-6">
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-px bg-gradient-to-b from-slate-600 to-[#217ED9]"></div>
                      <Database className="w-10 h-10 text-[#217ED9] my-2" />
                      <div className="text-sm text-[#217ED9] font-mono">OT Data</div>
                    </div>
                  </div>

                  {/* Last Mile */}
                  <div className="bg-gradient-to-br from-[#217ED9]/20 to-[#217ED9]/10 border-2 border-[#217ED9] rounded-lg p-6 mb-6 shadow-xl shadow-[#217ED9]/40">
                    <div className="flex items-center justify-center gap-4">
                      <div className="bg-[#217ED9] rounded px-3 py-2 shadow-2xl shadow-[#217ED9]/50">
                        <span className="font-bold text-white text-2xl">LM</span>
                      </div>
                      <div className="text-2xl font-bold text-white tracking-wide">LAST <span className="text-[#217ED9]">MILE</span></div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center mb-6">
                    <div className="h-8 w-px bg-gradient-to-b from-[#217ED9] to-[#10b981]"></div>
                  </div>

                  {/* ServiceNow */}
                  <div className="bg-slate-800/50 border border-slate-600 rounded p-4 mb-6">
                    <div className="text-center text-sm font-semibold text-white mb-4">ServiceNow</div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Work Orders</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Incidents</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Workflows</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Service</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Field Services</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Automated Fixes</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center mb-4">
                    <div className="h-8 w-px bg-gradient-to-b from-[#10b981] to-slate-600"></div>
                  </div>

                  {/* Enterprise Outcomes */}
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-[#10b981] mx-auto mb-2" />
                    <div className="text-sm text-slate-300">Enterprise Outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Snapshot Section */}
      <section className="py-16 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto reveal text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Operational Blind Spots Cost Real Value
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Operational systems generate signals — machines speak constantly. But those signals don't reach where decisions are made. The result? Reactive operations, frustrated teams, preventable loss, and strategic decisions made without evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Snapshot Section */}
      <section className="py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto reveal text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              We Transform Operational Truth Into Actionable Insight
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Last Mile delivers productized, enterprise-grade OT integrations that bring operational data straight into ServiceNow workflows — so work is orchestrated where it actually gets done.
            </p>
          </div>
        </div>
      </section>

      {/* Proof of Credibility Section */}
      <section className="py-24 bg-gradient-to-br from-[#217ED9]/10 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Built by Experienced Enterprise Operators
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 text-center">
                <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#217ED9]" />
                </div>
                <p className="text-lg text-slate-300">Deep Enterprise Platform, systems, and operations experience</p>
              </div>

              <div className="glass-panel p-8 text-center">
                <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#217ED9]" />
                </div>
                <p className="text-lg text-slate-300">Practical problem solving, not technology buzz</p>
              </div>

              <div className="glass-panel p-8 text-center">
                <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#217ED9]" />
                </div>
                <p className="text-lg text-slate-300">Designed to scale and be adopted with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <p className="text-2xl text-slate-400 italic mb-8">
            "Turning operational reality into accountable execution."
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#0a1929]/80 border-2 border-[#217ED9] hover:bg-[#0a1929] text-white font-semibold text-lg transition-all"
          >
            Talk to Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}