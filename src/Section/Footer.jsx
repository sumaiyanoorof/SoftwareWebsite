import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import logow_img from '../assets/alogo.png';
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 📩 EMAIL SEND FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.loading("Subscribing...", { id: "sending" });

    emailjs
      .send(
        "service_yo1n7nd", // ✔ Your Service ID
        "template_b71e04s", // ✔ Your Template ID
        {
          email: formData.email, // ✔ Template variable name
        },
        "4uR44oITRHYyrNqJT" // ✔ Public Key
      )
      .then(() => {
        toast.success("Subscribed Successfully!", { id: "sending" });

        setFormData({
          email: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Subscription Failed. Try Again!", { id: "sending" });
      });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-6 md:px-12 lg:px-20">

      <Toaster position="top-right" />

      {/* Top Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"
      >
        {/* Logo + About */}
        <div>
          <img src={logow_img} className="lg:w-40 md:w-30 sm:w-25" alt="Logo" />
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            We create modern, responsive, and interactive digital experiences
            for brands worldwide.
          </p>

          {/* Social Icons */}
          <div className="flex text-2xl mt-10 gap-4">
            {[FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a2332] to-[#0f1724] 
                           border border-red-800/60 flex items-center justify-center 
                           text-[#9ca3af] hover:text-[#95122c] hover:border-[#dc143c]/50 transition-all"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/modules" className="hover:text-white transition">Modules</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/software-development" className="hover:text-white transition">Software Development</Link></li>
            <li><Link to="/it-consulting" className="hover:text-white transition">IT Consulting</Link></li>
            <li><Link to="/website-design" className="hover:text-white transition">Website Design</Link></li>
            <li><Link to="/graphic-design" className="hover:text-white transition">Graphic Design</Link></li>
            <li><Link to="/digital-marketing" className="hover:text-white transition">Digital Marketing</Link></li>
            <li><Link to="/networking" className="hover:text-white transition">Networking</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscribe */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 
                         placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-800 
                         transition text-white text-sm font-semibold w-full sm:w-auto"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center text-center justify-between gap-5 text-sm">
        <p className="text-gray-500 w-full text-center">
          © {new Date().getFullYear()} LoginXol — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
