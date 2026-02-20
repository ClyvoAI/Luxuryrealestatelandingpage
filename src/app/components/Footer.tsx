import { useState } from "react";
import { Modal } from "./ui/Modal";

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif text-white tracking-wide">Squaretron<span className="text-yellow-500">.</span></h3>
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0 text-slate-500">
            Elevating the standard of luxury real estate. Find your sanctuary with us.
          </p>
        </div>
        
        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Contact Us</h4>
          <address className="not-italic text-sm text-slate-400 space-y-2">
            <p>13-6-431/6A, LANGER HOUSE,</p>
            <p>NEAR PILLAR NO 99, Netaji Nagar,</p>
            <p>Hyderabad, Telangana - 500008</p>
          </address>
          <div className="text-sm space-y-1">
            <p><a href="tel:+919177837007" className="text-yellow-500 hover:text-yellow-400 transition-colors">+91 9177837007</a></p>
            <p><a href="mailto:sqrtron.ai@gmail.com" className="text-yellow-500 hover:text-yellow-400 transition-colors">sqrtron.ai@gmail.com</a></p>
          </div>
          <p className="text-xs text-slate-600 font-mono">GSTIN: 36ABPCS8056D1ZY</p>
        </div>

        {/* Legal */}
        <div className="space-y-4">
           <h4 className="text-white font-semibold uppercase tracking-widest text-xs">Legal</h4>
           <div className="flex flex-col gap-3 items-center md:items-start">
             <button onClick={() => setPrivacyOpen(true)} className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Privacy Policy</button>
             <button onClick={() => setTermsOpen(true)} className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Terms of Service</button>
           </div>
        </div>
      </div>

      <div className="border-t border-slate-900 mt-16 pt-8 text-center">
        <p className="text-xs text-slate-700">
          &copy; {new Date().getFullYear()} Squaretron Realtors Private Limited. All rights reserved.
        </p>
      </div>

      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
           <p><strong>1. Introduction</strong><br/>Welcome to Squaretron Realtors ("we", "our", "us"). We respect your privacy and are committed to protecting your personal data.</p>
           <p><strong>2. Data We Collect</strong><br/>We may collect personal information such as your name, email address, phone number, and property preferences when you use our services or contact us.</p>
           <p><strong>3. How We Use Your Data</strong><br/>We use your data to provide real estate services, respond to inquiries, and improve our offerings. We do not sell your data to third parties.</p>
           <p><strong>4. Security</strong><br/>We implement appropriate security measures to protect your personal information.</p>
           <p><strong>5. Contact</strong><br/>For privacy concerns, contact us at sqrtron.ai@gmail.com.</p>
        </div>
      </Modal>

      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
           <p><strong>1. Acceptance of Terms</strong><br/>By accessing this website, you agree to be bound by these Terms of Service.</p>
           <p><strong>2. Use of Service</strong><br/>You agree to use our website for lawful purposes only and not to engage in any conduct that restricts or inhibits others' use or enjoyment of the site.</p>
           <p><strong>3. Property Information</strong><br/>All property information provided is for general information purposes only and subject to change without notice. We do not guarantee the accuracy of property details.</p>
           <p><strong>4. Intellectual Property</strong><br/>Content on this site is the property of Squaretron Realtors and protected by copyright laws.</p>
           <p><strong>5. Limitation of Liability</strong><br/>Squaretron Realtors shall not be liable for any indirect, incidental, or consequential damages arising from the use of this site.</p>
        </div>
      </Modal>
    </footer>
  );
}
