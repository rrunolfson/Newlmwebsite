import { Target, TrendingUp, Users } from "lucide-react";

export function CompanyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white from-50% to-[#217ED9] bg-clip-text text-transparent">
              About Last Mile
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <div className="glass-panel p-12 mb-16">
              <p className="text-2xl text-slate-300 leading-relaxed mb-6">
                Last Mile was founded by operators who have lived this problem — inside the world's largest enterprises, platforms, and delivery organizations.
              </p>
              <p className="text-2xl text-slate-300 leading-relaxed">
                We are building the missing infrastructure between the physical and digital enterprise.
              </p>
            </div>

            <div className="glass-panel p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Background</h2>
              <div className="space-y-6 text-lg text-slate-400">
                <p>
                  Our team has spent years deploying ServiceNow at enterprise scale. We've seen firsthand how operational data gets trapped in silos—and how much value is lost when that data doesn't reach execution systems.
                </p>
                <p>
                  We've worked with manufacturers struggling to prevent equipment failures. With retailers losing revenue to refrigeration downtime. With logistics operators managing fleets without real-time asset visibility.
                </p>
                <p>
                  The problem wasn't unique to any one industry. It was structural—operational technology and enterprise IT have never been properly connected.
                </p>
                <p>
                  So we built Last Mile to solve it.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-panel p-8">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Substance Over Hype</h3>
                  <p className="text-slate-400">
                    We don't do buzzwords. We build real infrastructure that solves real problems at enterprise scale.
                  </p>
                </div>

                <div className="glass-panel p-8">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Execution Over Experimentation</h3>
                  <p className="text-slate-400">
                    We're operators, not researchers. Our focus is deployment, adoption, and measurable outcomes.
                  </p>
                </div>

                <div className="glass-panel p-8">
                  <div className="w-12 h-12 bg-[#217ED9]/20 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-[#217ED9]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ecosystem Over Isolation</h3>
                  <p className="text-slate-400">
                    We succeed when our partners, OEMs, and customers succeed. We're building for the ecosystem, not against it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-[#217ED9]/20 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-2xl text-slate-300 leading-relaxed">
            To make operational data actionable—so enterprises can operate with the speed, precision, and accountability the physical world demands.
          </p>
        </div>
      </section>
    </div>
  );
}