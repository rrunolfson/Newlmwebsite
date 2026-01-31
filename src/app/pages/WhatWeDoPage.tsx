import { Database, Workflow, TrendingUp, ArrowRight, Download, FileCheck, BarChart3 } from "lucide-react";
import { Link } from "react-router";

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
              <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Operational data is not useful until it drives work. Last Mile productizes the connections between OT, assets, work execution, and enterprise outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Three Core Sections */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Operational Data Ingestion */}
              <div className="reveal glass-panel p-8">
                <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center mb-6">
                  <Download className="w-8 h-8 text-[#217ED9]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Operational Data Ingestion</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  We take every relevant data signal — machine, sensor, controller, fleet, or device — and make it usable.
                </p>
              </div>

              {/* Enterprise Workflow Activation */}
              <div className="reveal glass-panel p-8">
                <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center mb-6">
                  <Workflow className="w-8 h-8 text-[#217ED9]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Workflow Activation</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Data becomes action inside ServiceNow: incidents, work orders, dispatch, alerts, and compliance tracking.
                </p>
              </div>

              {/* Asset Truth Layer */}
              <div className="reveal glass-panel p-8">
                <div className="w-16 h-16 bg-[#217ED9]/20 border border-[#217ED9] rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-[#217ED9]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Asset Truth Layer</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Longitudinal performance data tied to asset records gives procurement and leadership objective insight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Flow */}
        <section className="py-20 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal glass-panel p-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center mb-3">
                    <Database className="w-12 h-12 text-slate-400" />
                  </div>
                  <div className="text-lg font-semibold text-white">Data Ingestion</div>
                </div>

                <ArrowRight className="w-10 h-10 text-[#217ED9] transform md:rotate-0 rotate-90" />

                <div className="text-center">
                  <div className="w-24 h-24 bg-[#217ED9]/20 border-2 border-[#217ED9] rounded-lg flex items-center justify-center mb-3">
                    <Workflow className="w-12 h-12 text-[#217ED9]" />
                  </div>
                  <div className="text-lg font-semibold text-white">Workflow Activation</div>
                </div>

                <ArrowRight className="w-10 h-10 text-[#217ED9] transform md:rotate-0 rotate-90" />

                <div className="text-center">
                  <div className="w-24 h-24 bg-[#10b981]/20 border-2 border-[#10b981] rounded-lg flex items-center justify-center mb-3">
                    <TrendingUp className="w-12 h-12 text-[#10b981]" />
                  </div>
                  <div className="text-lg font-semibold text-white">Asset Truth</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center reveal">
            <h2 className="text-3xl font-bold mb-6">Ready to See What's Possible?</h2>
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