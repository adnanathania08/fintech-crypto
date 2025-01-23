import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };
  return (
    <>
      <footer className="text-txtwhite font-quicksand">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Information */}
            <div className="space-y-4">
              <GrTechnology className="h-10 w-auto text-txtwhite" />
              <p className="text-xl font-semibold mt-4">Finsy</p>
              <p className="text-gray-400 font-inter">
                Innovating for tomorrow, delivering today
              </p>
              <p className="text-sm text-txtwhite mt-6">
                &copy; {new Date().getFullYear()} Finsy. All rights
                reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      className="hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
                      aria-label={item}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { Icon: FaFacebook, label: "Facebook" },
                  { Icon: FaTwitter, label: "Twitter" },
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaLinkedin, label: "LinkedIn" },
                  { Icon: FaYoutube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    className="hover:text-white transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded-full p-2"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
              <p className="text-gray-400 font-inter">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="email-input" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-pgreen text-black rounded-md hover:bg-pgreen/50 hover:text-txtwhite transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>Designed and developed with ❤️ by TechVision Team</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
