import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please fill out this field.";
    if (!formData.phone.trim()) e.phone = "Please fill out this field.";
    if (!formData.email.trim()) e.email = "Please fill out this field.";
    if (!formData.service.trim()) e.service = "Please select a service.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      toast.error(Object.values(e)[0]);
      return;
    }

    setSubmitted(true);
    toast.success("Request sent!");

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="lg:col-span-2 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-5">
        Need Help? <span className="text-emerald-300">Contact Support</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full rounded-lg border border-[#ffffff12] px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Mobile No."
          className="w-full rounded-lg border border-[#ffffff12] px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border border-[#ffffff12] rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border border-[#ffffff12] rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <option value="">Select Service</option>
          <option>Cockroach Control</option>
          <option>Termite Treatment</option>
          <option>Rodent Control</option>
          <option>Bedbug Treatment</option>
          <option>Mosquito Control</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (optional)"
          className="w-full border border-[#ffffff12] rounded-lg px-4 py-2.5 text-sm text-gray-800 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <button
          type="submit"
          disabled={submitted}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
