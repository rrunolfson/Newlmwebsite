import { Link } from "react-router";
import { ArrowRight, Database, Workflow, Users, Settings, GitBranch, Zap, AlertCircle, UserX, FileQuestion, XCircle } from "lucide-react";

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
                Operational Data Belongs in <br />
                <span className="hero-title-gradient">Operational Workflows</span>
              </h1>

              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                Last Mile brings operational technology (OT) and asset performance data into ServiceNow — so enterprises can run operations, service, workforce, and vendors from a single system of execution.
              </p>
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
                      <div className="text-xs text-slate-500">Stores</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mx-auto mb-2">
                        <Settings className="w-8 h-8 text-slate-400" />
                      </div>
                      <div className="text-xs text-slate-500">Factories</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mx-auto mb-2">
                        <Settings className="w-8 h-8 text-slate-400" />
                      </div>
                      <div className="text-xs text-slate-500">Equipment</div>
                    </div>
                  </div>

                  {/* Data Streams */}
                  <div className="flex justify-center mb-6">
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-px bg-gradient-to-b from-slate-600 to-[#217ED9]"></div>
                      <Database className="w-10 h-10 text-[#217ED9] my-2" />
                      <div className="text-sm text-[#217ED9] font-mono">OT Data Streams</div>
                    </div>
                  </div>

                  {/* Last Mile */}
                  <div className="bg-gradient-to-br from-[#217ED9]/20 to-[#217ED9]/10 border-2 border-[#217ED9] rounded-lg p-8 mb-6 shadow-xl shadow-[#217ED9]/40">
                    <div className="flex items-center justify-center gap-4">
                      <div className="bg-white rounded p-1 shadow-2xl shadow-[#217ED9]/50">
                        <img 
                          src="/logo.png" 
                          alt="Last Mile Logo" 
                          className="w-16 h-auto"
                        />
                      </div>
                      <div className="text-4xl font-bold text-white tracking-wide">LAST <span className="text-[#217ED9]">MILE</span></div>
                    </div>
                  </div>

                  {/* ServiceNow - wraps around workflows */}
                  <div className="bg-slate-800/50 border border-slate-600 rounded p-4">
                    <div className="text-center text-sm font-semibold text-white mb-2">ServiceNow</div>
                    <div className="h-8 w-px bg-slate-600 mx-auto mb-4"></div>
                    
                    {/* Workflows inside ServiceNow */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Workflows</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Automated Fixes</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Service</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Field Ops</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Settings className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Asset Mgmt</div>
                      </div>
                      <div className="bg-slate-800/30 border border-slate-700 rounded p-3 flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#10b981]" />
                        <div className="text-xs text-slate-300">Procurement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Statement Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto reveal text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The World Runs on OT. Enterprises Run Blind.
            </h2>
            
            <p className="text-xl text-slate-300 mb-8">
              For decades, enterprises have invested billions in operational technology — sensors, controllers, equipment, and machines that power their physical world.
            </p>

            <p className="text-xl text-slate-300 mb-12">
              But that data rarely reaches the systems where decisions are made.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-panel p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-slate-300">OT data lives in silos</p>
              </div>
              <div className="glass-panel p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-slate-300">Operations react instead of prevent</p>
              </div>
              <div className="glass-panel p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <UserX className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-slate-300">Field teams lack context</p>
              </div>
              <div className="glass-panel p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <FileQuestion className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-slate-300">Asset performance is invisible to procurement</p>
              </div>
            </div>

            <p className="text-xl text-slate-300">
              The result is inefficiency, downtime, missed revenue, and avoidable operational risk.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Last Mile Connects the Physical World to Enterprise Execution
            </h2>
            
            <p className="text-xl text-slate-300 mb-8">
              Last Mile delivers pre-built, productized OT integrations that bring real-world operational data directly into ServiceNow.
            </p>

            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-8 mb-8">
              <p className="text-xl text-white mb-4">
                Not dashboards.<br />
                Not custom integrations.<br />
                Operational workflows.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-slate-400 mb-4">With Last Mile:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-[#10b981] mt-1">•</span>
                  <span>Assets become visible and accountable</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-[#10b981] mt-1">•</span>
                  <span>Issues trigger action automatically</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-[#10b981] mt-1">•</span>
                  <span>Field teams work with real-time context</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-[#10b981] mt-1">•</span>
                  <span>Procurement decisions are backed by performance data</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-[#10b981] mt-1">•</span>
                  <span>OEMs gain insight without owning customer operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Credibility Section */}
      <section className="py-24 bg-gradient-to-br from-[#217ED9]/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Built by People Who've Done This Before
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
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
                <span className="text-lg text-slate-300">Designed with partners, OEMs, and customers in mind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            This Is the Next Phase of Enterprise Operations
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#217ED9] hover:bg-[#1a6bb8] text-white font-semibold text-lg transition-all shadow-lg hover:shadow-[#217ED9]/25"
          >
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}