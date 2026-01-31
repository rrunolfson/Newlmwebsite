import { Link } from "react-router";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded p-1">
                <img 
                  src="/logo.png" 
                  alt="Last Mile Logo" 
                  className="h-6 w-auto"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white uppercase">
                Last <span className="text-[#217ED9]">Mile</span>
              </span>
            </div>
            <div className="flex space-x-4 text-slate-600 justify-start">
              <a href="#" className="hover:text-[#217ED9] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#217ED9] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">
              Industries
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/industries" className="hover:text-[#217ED9] transition-colors">
                  Retail & Grocery
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#217ED9] transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#217ED9] transition-colors">
                  Logistics & Transportation
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#217ED9] transition-colors">
                  Energy & Utilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/why-last-mile" className="hover:text-[#217ED9] transition-colors">
                  Why Last Mile
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#217ED9] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#217ED9] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 Last Mile Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}