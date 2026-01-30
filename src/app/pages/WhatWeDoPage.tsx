import { Database, Workflow, TrendingUp, ArrowRight, AlertCircle, BarChart3, Settings, RefreshCw } from "lucide-react";

export function WhatWeDoPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      <div className="absolute inset-0 data-grid-bg opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 reveal">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white from-50% to-[#217ED9] bg-clip-text text-transparent">
                What Last Mile Does
              </h1>
            </div>
          </div>
        </section>

        {/* Section 1: Clear Definition */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <p className="text-2xl text-slate-300 leading-relaxed mb-8 text-center">
                Last Mile enables enterprises to use operational data the way it was always meant to be used — inside execution systems.
              </p>

              <p className="text-xl text-slate-400 mb-8 text-center">
                We productize the connection between:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Database className="w-6 h-6 text-[#217ED9]" />
                    <span className="text-lg font-semibold text-white">Operational Technology (OT)</span>
                  </div>
                </div>
                <div className="glass-panel p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-[#217ED9]" />
                    <span className="text-lg font-semibold text-white">Enterprise Assets</span>
                  </div>
                </div>
                <div className="glass-panel p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Workflow className="w-6 h-6 text-[#217ED9]" />
                    <span className="text-lg font-semibold text-white">Workforce Operations</span>
                  </div>
                </div>
                <div className="glass-panel p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <ArrowRight className="w-6 h-6 text-[#217ED9]" />
                    <span className="text-lg font-semibold text-white">ServiceNow Workflows</span>
                  </div>
                </div>
              </div>

              <p className="text-xl text-slate-300 text-center">
                So physical operations can be managed with the same rigor as digital systems.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What We Are Not */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Are Not</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="glass-panel p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-lg text-slate-300">Not a sensor company</p>
                </div>

                <div className="glass-panel p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-lg text-slate-300">Not an analytics dashboard</p>
                </div>

                <div className="glass-panel p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-lg text-slate-300">Not a custom integration shop</p>
                </div>

                <div className="glass-panel p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                    <RefreshCw className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-lg text-slate-300">Not a rip-and-replace solution</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-slate-800/40 border-l-4 border-[#217ED9] rounded">
                <p className="text-2xl text-white text-center">
                  We sit at the <span className="text-[#217ED9] font-bold">last mile</span> between physical reality and enterprise action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Core Capabilities */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-12">Core Capabilities</h2>

              <div className="space-y-6 mb-16">
                <div className="glass-panel p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">OT Data Ingestion and Normalization</h3>
                    <p className="text-slate-400">Connect any operational device or system and transform raw data into actionable insights.</p>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Asset-Level Performance Visibility</h3>
                    <p className="text-slate-400">Track every asset's health, utilization, and business impact in real time.</p>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Workflow Activation Inside ServiceNow</h3>
                    <p className="text-slate-400">Automatically trigger service requests, work orders, and field operations based on operational data.</p>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Partner-Delivered Configuration and Rollout</h3>
                    <p className="text-slate-400">Work with certified partners who understand your industry and business needs.</p>
                  </div>
                </div>

                <div className="glass-panel p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">OEM-Safe Data Boundaries</h3>
                    <p className="text-slate-400">Protect proprietary information while enabling performance insights and collaboration.</p>
                  </div>
                </div>
              </div>

              {/* Visual: Swim-lane Diagram */}
              <div className="glass-panel p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">How It Works</h3>
                <div className="flex items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mb-3">
                      <Database className="w-10 h-10 text-slate-400" />
                    </div>
                    <div className="text-sm font-semibold text-white">OT</div>
                  </div>

                  <ArrowRight className="w-8 h-8 text-[#217ED9]" />

                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#217ED9]/10 border border-[#217ED9]/30 rounded flex items-center justify-center mb-3">
                      <Workflow className="w-10 h-10 text-[#217ED9]" />
                    </div>
                    <div className="text-sm font-semibold text-white">Last Mile</div>
                  </div>

                  <ArrowRight className="w-8 h-8 text-[#217ED9]" />

                  <div className="text-center">
                    <div className="w-24 h-24 bg-slate-800 border border-slate-600 rounded flex items-center justify-center mb-3">
                      <TrendingUp className="w-10 h-10 text-slate-400" />
                    </div>
                    <div className="text-sm font-semibold text-white">ServiceNow</div>
                  </div>

                  <ArrowRight className="w-8 h-8 text-[#217ED9]" />

                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#10b981]/10 border border-[#10b981]/30 rounded flex items-center justify-center mb-3">
                      <ArrowRight className="w-10 h-10 text-[#10b981]" />
                    </div>
                    <div className="text-sm font-semibold text-white">Outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}