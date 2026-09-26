"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>;
const YoutubeIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" /></svg>;
const InstagramIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const LinkedinIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>;
const WhatsappIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827zM11.994 2C6.471 2 2 6.471 2 11.994c0 1.926.545 3.733 1.515 5.253L2 22l4.908-1.467C8.423 21.464 10.158 22 11.994 22 17.517 22 22 17.517 22 11.994S17.517 2 11.994 2z" /></svg>;

export default function Footer() {
  const [status, setStatus] = useState("idle");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: "N/A",
      message: `Contact Form: ${formData.get("message")}`,
      course: "General Enquiry",
      Name: formData.get("name"),
      Email: formData.get("email"),
      Phone: "N/A",
      Message: `Contact Form: ${formData.get("message")}`,
      Course: "General Enquiry"
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxwI5gOZKeYod2G-zEM54Rm6AUBLXzCFP4xlvfZvjx7kAqmLWGSZWiUMkEmj-24PwsMAg/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.status === "success") {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer className="bg-navy-dark pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-green flex items-center justify-center font-bold text-white text-xl">
                LC
              </div>
              <span className="font-montserrat font-bold text-xl tracking-wider text-white">
                LABS CADD
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Learn. Practice. Build Your Future. Industry-focused virtual training in BIM, Interior Design & Visualization.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-green hover:border-green transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-green hover:border-green transition-colors">
                <YoutubeIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-green hover:border-green transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-green hover:border-green transition-colors">
                <LinkedinIcon />
              </a>
              <a href="https://wa.me/918072819348" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-green hover:border-green transition-colors" aria-label="Chat on WhatsApp">
                <WhatsappIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#about" className="text-gray-400 hover:text-green transition-colors">About Us</Link></li>
              <li><Link href="#courses" className="text-gray-400 hover:text-green transition-colors">Our Courses</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-green transition-colors">Student Portfolio</Link></li>
              <li><Link href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openEnroll')); }} className="text-gray-400 hover:text-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green shrink-0 mt-1" />
                <span className="text-gray-400">Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green shrink-0" />
                <a href="tel:+918072819348" className="text-gray-400 hover:text-green transition-colors">
                  +91-8072819348
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green shrink-0" />
                <a href="mailto:contactlabscadd@gmail.com" className="text-gray-400 hover:text-green transition-colors">
                  contactlabscadd@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-white">Quick Contact</h3>
            <form className="flex flex-col gap-3" onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green transition-colors text-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green transition-colors text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="2"
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green transition-colors text-sm resize-none"
                required
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="bg-green hover:bg-green-light text-white font-medium py-3 rounded transition-colors disabled:opacity-70 flex justify-center items-center"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green text-xs text-center mt-1">Message delivered.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-xs text-center mt-1">Error sending message.</p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LABS CADD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: { type: 'privacy' } }))}
              className="hover:text-green transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: { type: 'terms' } }))}
              className="hover:text-green transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
