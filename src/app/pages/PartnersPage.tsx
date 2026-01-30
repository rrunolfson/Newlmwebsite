import { TrendingUp, Users, Briefcase, Settings, CheckCircle2 } from "lucide-react";

export function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#217ED9] bg-clip-text text-transparent">
              Built for the Partner Ecosystem
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Last Mile is designed to expand — not replace — partner opportunity.
            </p>
          </div>

          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="text-2xl text-slate-300 mb-4">We create the foundation.</p>
            <p className="text-2xl text-slate-300">Partners deliver the value.</p>
          </div>
        </div>
      </section>

      {/* Why Partners Win */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Partners Win</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">New OT-Driven Use Cases</h3>
                <p className="text-slate-400">
                  Open entirely new revenue streams by bringing operational technology into ServiceNow deployments.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expanded Module Adoption</h3>
                <p className="text-slate-400">
                  Drive ServiceNow ITSM, ITOM, FSM, and Asset Management adoption with operational data.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Net New NNACV</h3>
                <p className="text-slate-400">
                  Create new Annual Contract Value opportunities that wouldn't exist without OT integration.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">High-Margin Work</h3>
                <p className="text-slate-400">
                  Configuration and transformation services command premium rates and high margins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-20 bg-[#0b1120] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-12 text-center">A Clear Team Delivery Model</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Last Mile</h3>
                    <p className="text-slate-400 text-lg">Productized integrations, platform foundation</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>Pre-built OT connectors and data normalization</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>ServiceNow application framework</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>Platform updates and support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Partner</h3>
                    <p className="text-slate-400 text-lg">Configuration, rollout, change management</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>Business process analysis and workflow design</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>System configuration and deployment</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>User training and adoption services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Customer</h3>
                    <p className="text-slate-400 text-lg">Ownership of outcomes</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>Improved operational efficiency and uptime</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>Data-driven decision making</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>Reduced operational risk</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}