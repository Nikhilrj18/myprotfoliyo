import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Nikhil <span className="text-orange-500">Saini</span>
          </h2>
          <p className="text-gray-400">
            I'm a passionate web developer creating modern and responsive web
            applications using React, Tailwind CSS, and JavaScript.
          </p>
        </div>

        {/* Quick Links */}
      

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:nikhilsaini1472@gmail.com" className="hover:text-orange-500">Nikhilsaini1472@gmail.com</a></li>
            <li>Phone: <a href="tel:+919876543210" className="hover:text-orange-500">+91 9509309747</a></li>
            <li>Location: Jaipur, Rajasthan, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Nikhilrj18" target="_blank" rel="noreferrer" className="hover:text-orange-500">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Nikhil Kumar Saini. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
