import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row">
        {/* Left Side */}
        <div id="contact" className="bg-black text-white p-10 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex-1">
          <h2 className="text-3xl font-bold mb-6">Contact <span className="text-orange-500">Us</span></h2>
          <p className=" text-gray-300 mb-6">
            Feel free to reach out! We’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3"><FaPhoneAlt /> +91 9509309747</p>
            <p className="flex items-center gap-3"><FaEnvelope /> Nikhilsaini1472@gmail.com</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt /> Jaipur, Rajasthan, India</p>
          </div>
        </div>

        {/* Right Side */}
        <form onSubmit={handleSubmit} className="flex-1 p-10">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">Send a Message</h3>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
