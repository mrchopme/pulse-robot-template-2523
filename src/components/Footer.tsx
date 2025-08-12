
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            Seamless — Technology that finally speaks human
          </p>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <a href="#how-it-works" className="hover:text-pulse-600">How it Works</a>
            <a href="#features" className="hover:text-pulse-600">Integrations</a>
            <a href="#features" className="hover:text-pulse-600">Security</a>
            <a href="#" className="hover:text-pulse-600">Pricing</a>
            <a href="#" className="hover:text-pulse-600">Blog</a>
            <a href="#get-access" className="hover:text-pulse-600">Support</a>
          </nav>
        </div>
        <div className="mt-4 text-center sm:text-left text-xs text-gray-500">
          © 2024 Seamless. Making technology human since day one.
        </div>
      </div>
    </footer>;
};
export default Footer;
