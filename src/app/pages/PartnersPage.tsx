import { TrendingUp, Users, Briefcase, Settings, CheckCircle2, ArrowRight, DollarSign } from "lucide-react";
import { Link } from "react-router";

export function PartnersPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      <div className="absolute inset-0 data-grid-bg opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white from-50% to-[#217ED9] bg-clip-text text-transparent">
                Built for the Partner Ecosystem
              </h1>
              <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Last Mile was designed to work with partners, not against them — creating new classes of services work tied to operational data.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Value Bullets */}
        <section className="py-20 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-12 text-center">Partner Value</h2>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Multiply ways to generate NNACV</h3>
                  <p className="text-slate-400">
                    New revenue streams from operational technology integration and ongoing services
                  </p>
                </div>

                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Extend ServiceNow adoption</h3>
                  <p className="text-slate-400">
                    Drive deeper utilization across ITSM, FSM, Asset Management, and beyond
                  </p>
                </div>

                <div className="glass-panel p-8 text-center">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Clear delivery playbook</h3>
                  <p className="text-slate-400">
                    Proven methodologies for configuration, deployment, and change management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Model */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-12 text-center">Delivery Model</h2>

              <div className="max-w-4xl mx-auto space-y-6">
                <div className="glass-panel p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-[#217ED9]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Last Mile</h3>
                      <p className="text-slate-400 text-lg mb-4">Integration foundation</p>
                      <div className="text-slate-300">
                        Pre-built OT connectors, data normalization, ServiceNow application framework, platform updates
                      </div>
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
                      <p className="text-slate-400 text-lg mb-4">Workflow configuration & change management</p>
                      <div className="text-slate-300">
                        Business process design, system configuration, deployment, user training, adoption services
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#10b981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-[#10b981]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Customer</h3>
                      <p className="text-slate-400 text-lg mb-4">Operations outcomes</p>
                      <div className="text-slate-300">
                        Improved efficiency, proactive execution, reduced risk, data-driven decision making
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1673515336414-0db19994707f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwY29sbGFib3JhdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzY5Nzg2NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partner ecosystem collaboration"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with Last Mile?</h2>
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