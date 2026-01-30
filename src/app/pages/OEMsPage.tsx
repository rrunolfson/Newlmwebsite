import { TrendingUp, AlertTriangle, Shield, CheckCircle2, XCircle } from "lucide-react";

export function OEMsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#217ED9] bg-clip-text text-transparent">
              A Better Relationship Between <br />
              OEMs and Their Customers
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              OEMs build the world's most critical equipment — but rarely see how it performs in the real world.
            </p>
          </div>

          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="text-2xl text-slate-300">
              Last Mile changes that — safely, ethically, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* OEM Value */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-12">OEM Value</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Objective Product Performance Data</h3>
                <p className="text-slate-400">
                  See how your equipment performs across customer environments—without intrusive site visits or manual reporting.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Early Quality and Reliability Signals</h3>
                <p className="text-slate-400">
                  Detect design or manufacturing issues before they become widespread failures or warranty claims.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reduced Warranty Disputes</h3>
                <p className="text-slate-400">
                  Objective data eliminates "he said, she said" warranty claims—protecting both parties with facts.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Improved Product Design Feedback Loops</h3>
                <p className="text-slate-400">
                  Real-world usage data informs R&D, helping you build better products faster.
                </p>
              </div>

              <div className="glass-panel p-8">
                <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-[#217ED9]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Stronger Customer Trust</h3>
                <p className="text-slate-400">
                  Transparency builds credibility. When customers see you care about how equipment performs, loyalty follows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Protect */}
      <section className="py-20 bg-[#0b1120] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-12">What OEMs Don't Have to Worry About</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">No Customer Lock-In</h3>
                    <p className="text-slate-400 text-lg">
                      Last Mile doesn't create dependencies that prevent customers from choosing alternatives. We enable visibility without control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">No Competitive Data Misuse</h3>
                    <p className="text-slate-400 text-lg">
                      OEM performance data stays within agreed boundaries. We don't sell insights to competitors or aggregate data inappropriately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">No Operational Ownership Conflicts</h3>
                    <p className="text-slate-400 text-lg">
                      You build equipment. Customers operate it. Last Mile connects the two without creating ownership confusion or liability issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-800/40 border-l-4 border-[#217ED9] rounded max-w-4xl mx-auto">
              <p className="text-xl text-white">
                OEMs gain insight. Customers maintain control. Everyone wins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}