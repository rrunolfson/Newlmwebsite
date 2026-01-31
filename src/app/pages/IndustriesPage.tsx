import { Link } from "react-router";
import { ArrowRight, Factory, ShoppingCart, Zap, HeartPulse, Package, Building2, Warehouse } from "lucide-react";

// Industry images
const retailImage = "https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5ODIzNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const manufacturingImage = "https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY5ODIzNDY3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const energyImage = "https://images.unsplash.com/photo-1659290541783-3241bc39f7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBwb3dlciUyMHBsYW50fGVufDF8fHx8MTc2OTgyMzQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const healthcareImage = "https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjBmYWNpbGl0eXxlbnwxfHx8fDE3Njk4MjM0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const logisticsImage = "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzdXBwbHklMjBjaGFpbnxlbnwxfHx8fDE3Njk3NTM5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const buildingImage = "https://images.unsplash.com/photo-1692685820395-2263d9e4aa20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3Njk4MjM0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const warehouseImage = "https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBkaXN0cmlidXRpb24lMjBjZW50ZXJ8ZW58MXx8fHwxNzY5ODIzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function IndustriesPage() {
  return (
    <div className="pt-20 relative min-h-screen">
      <div className="absolute inset-0 data-grid-bg opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 reveal">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white from-50% to-[#217ED9] bg-clip-text text-transparent">
                Industries with Real Operational Stakes
              </h1>
              <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Any enterprise with physical assets, workforce execution, and SLAs needs operational visibility that turns into predictable outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Retail & Grocery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h2 className="text-4xl font-bold">Retail & Grocery</h2>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-3">Operational Example</h3>
                  <p className="text-lg text-slate-300">
                    Refrigeration failures → orders missed → SLA impact
                  </p>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#10b981] mb-3">Outcome</h3>
                  <p className="text-lg text-slate-300">
                    Less waste, better service, reduced labor friction
                  </p>
                </div>
              </div>

              <div className="reveal">
                <img
                  src={retailImage}
                  alt="Retail grocery store refrigeration"
                  className="w-full h-96 object-cover rounded-lg border border-slate-700 grayscale"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing */}
        <section className="py-20 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div className="order-2 lg:order-1">
                <img
                  src={manufacturingImage}
                  alt="Manufacturing production line"
                  className="w-full h-96 object-cover rounded-lg border border-slate-700 grayscale"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center">
                    <Factory className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h2 className="text-4xl font-bold">Manufacturing</h2>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-3">Operational Example</h3>
                  <p className="text-lg text-slate-300">
                    Equipment failure signals trigger maintenance before downtime
                  </p>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#10b981] mb-3">Outcome</h3>
                  <p className="text-lg text-slate-300">
                    Uptime, quality, throughput
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Energy & Utilities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center">
                    <Zap className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h2 className="text-4xl font-bold">Energy & Utilities</h2>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-3">Operational Example</h3>
                  <p className="text-lg text-slate-300">
                    Field asset health signals prompt urgent work orders
                  </p>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#10b981] mb-3">Outcome</h3>
                  <p className="text-lg text-slate-300">
                    Safety, compliance, continuity
                  </p>
                </div>
              </div>

              <div className="reveal">
                <img
                  src={energyImage}
                  alt="Energy utility infrastructure"
                  className="w-full h-96 object-cover rounded-lg border border-slate-700 grayscale"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare & Labs */}
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div className="order-2 lg:order-1">
                <img
                  src={healthcareImage}
                  alt="Healthcare medical equipment"
                  className="w-full h-96 object-cover rounded-lg border border-slate-700 grayscale"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center">
                    <HeartPulse className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h2 className="text-4xl font-bold">Healthcare & Labs</h2>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-3">Operational Example</h3>
                  <p className="text-lg text-slate-300">
                    Clinical asset alarms trigger compliance workflows
                  </p>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#10b981] mb-3">Outcome</h3>
                  <p className="text-lg text-slate-300">
                    Less downtime, audit readiness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="py-20 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center">
                    <Factory className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h2 className="text-4xl font-bold">Logistics & Transport</h2>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-3">Operational Example</h3>
                  <p className="text-lg text-slate-300">
                    Fleet equipment alerts trigger service before delivery delays
                  </p>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#10b981] mb-3">Outcome</h3>
                  <p className="text-lg text-slate-300">
                    On-time delivery, lower logistics costs, SLA reliability
                  </p>
                </div>
              </div>

              <div className="reveal">
                <img
                  src={logisticsImage}
                  alt="Logistics asset tracking"
                  className="w-full h-96 object-cover rounded-lg border border-slate-700 grayscale"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Building Management */}
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div className="order-2 lg:order-1">
                <img
                  src={buildingImage}
                  alt="Building management systems"
                  className="w-full h-96 object-cover rounded-lg border border-slate-700 grayscale"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h2 className="text-4xl font-bold">Building Management</h2>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-3">Operational Example</h3>
                  <p className="text-lg text-slate-300">
                    HVAC performance data drives preventive maintenance scheduling
                  </p>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#10b981] mb-3">Outcome</h3>
                  <p className="text-lg text-slate-300">
                    Energy efficiency, tenant satisfaction, asset longevity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse Management */}
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center">
                    <Package className="w-8 h-8 text-[#217ED9]" />
                  </div>
                  <h2 className="text-4xl font-bold">Warehouse Management</h2>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#217ED9] mb-3">Operational Example</h3>
                  <p className="text-lg text-slate-300">
                    Inventory tracking signals prompt restocking orders
                  </p>
                </div>

                <div className="bg-[#10b981]/10 border border-[#10b981] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#10b981] mb-3">Outcome</h3>
                  <p className="text-lg text-slate-300">
                    Reduced stockouts, improved inventory accuracy, cost savings
                  </p>
                </div>
              </div>

              <div className="reveal">
                <img
                  src={warehouseImage}
                  alt="Warehouse management systems"
                  className="w-full h-96 object-cover rounded-lg border border-slate-700 grayscale"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center reveal">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry Operations?</h2>
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