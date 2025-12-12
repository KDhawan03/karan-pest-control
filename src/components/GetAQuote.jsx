import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import { useMouse } from './CursorAnimation/MouseContext';

export default function GetAQuote() {
    const { cursorChangeHandler } = useMouse();
    const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const imageSrc = "https://as2.ftcdn.net/jpg/03/44/07/67/1000_F_344076708_gXv25092l4HzSQHKguObJRuomA1qfstC.webp";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
        setErrors((err) => ({ ...err, [name]: "" }));
    };

    const validate = () => {
        const e = {};
        if (!formData.name.trim()) e.name = "Please fill out this field.";
        if (!formData.phone.trim()) e.phone = "Please fill out this field.";
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

        console.log("Quote request:", formData);
        setSubmitted(true);
        toast.success('Request sent! We will contact you soon.');

        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", service: "", message: "" });
        }, 2000);
    };

    return (
        <section id="quote" className="py-12 mt-20 sm:py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="rounded-2xl bg-emerald-50 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">

                    {/* Left: form */}
                    <div className="p-10 lg:p-14">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight" 
                            onMouseEnter={() => cursorChangeHandler("text-mode")}
                            onMouseLeave={() => cursorChangeHandler("default")}
                        >
                            Effective Pest Solutions - <span className="text-primary">Reach Out Today!</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="space-y-5">

                                {/* Name Input */}
                                <div>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className={`w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${
                                            errors.name ? "border-red-500" : ""
                                        }`}
                                    />
                                    {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                                </div>

                                {/* Phone Input */}
                                <div>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Mobile No."
                                        className={`w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${
                                            errors.phone ? "border-red-500" : ""
                                        }`}
                                    />
                                    {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                                </div>

                                {/* Service Dropdown */}
                                <div>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={` w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${
                                            errors.service ? "border-red-500" : ""
                                        }`}
                                    >
                                        <option value="" className="  ">Select Service</option>
                                        <option value="Cockroach Control">Cockroach Control</option>
                                        <option value="Termite Treatment">Termite Treatment</option>
                                        <option value="Rodent Control">Rodent Control</option>
                                        <option value="Bedbug Treatment">Bedbug Treatment</option>
                                        <option value="Mosquito Control">Mosquito Control</option>
                                    </select>

                                    {errors.service && (
                                        <p className="mt-2 text-sm text-red-500">{errors.service}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex items-center gap-4">
                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className="bg-[#299B46] hover:bg-[#1e1a3d] text-white font-semibold px-6 py-3 rounded-xl transition duration-400 transform hover:scale-105 btn-wipe"
                                    >
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right: image */}
                    <div className="hidden lg:block">
                        <img
                            src={imageSrc}
                            alt="quote"
                            className="h-full w-full object-cover rounded-tr-2xl rounded-br-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
