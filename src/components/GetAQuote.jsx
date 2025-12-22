import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import img from '/images/get_a_quet.png';
import { useMouse } from './CursorAnimation/MouseContext';
// import emailjs from '@emailjs/browser'

export default function GetAQuote() {
    const { cursorChangeHandler } = useMouse();
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const imageSrc = img;

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
        if (!formData.email.trim()) e.email = "Please fill out this field.";
        return e;
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const e = validate();
        if (Object.keys(e).length) {
            setErrors(e);
            toast.error(Object.values(e)[0]);
            return;
        }
        console.log('📤 SENDING DATA:', formData);


        setSubmitted(true);

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    service: formData.service,
                    message: formData.message
                })
            });
            const result = await response.json();
            console.log('📨 Response:', result);  // ← YE ADD KARO

            if (response.ok) {
                toast.success('Request sent! We will contact you soon.');
                setFormData({ name: "", phone: "", email: "", service: "", message: "" });
            } else {
                toast.error("Failed to send. Please check your connection.");
            }
        } catch (error) {
            toast.error("Failed to send. Please check your connection.");
        }

        setSubmitted(false);
    };


    // const handleSubmit = (ev) => {
    //     ev.preventDefault();
    //     const e = validate();
    //     if (Object.keys(e).length) {
    //         setErrors(e);
    //         toast.error(Object.values(e)[0]);
    //         return;
    //     }

    //     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    //     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    //     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    //     const templateParams = {
    //         name: formData.name,
    //         email: formData.email,
    //         phone: formData.phone,
    //         service: formData.service,
    //         message: formData.message,
    //         time: new Date().toLocaleString()
    //     }
    //     setSubmitted(true);

    //     emailjs.send(serviceId, templateId, templateParams, publicKey)
    //         .then((response) => {
    //             // console.log('SUCCESS!', response.status, response.text);
    //             toast.success('Request sent! We will contact you soon.');
    //             setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    //             setSubmitted(false);
    //         })
    //         .catch((err) => {
    //             // console.error('FAILED...', err);
    //             toast.error("Failed to send. Please check your connection.");
    //             setSubmitted(false);
    //         });

    // };

    return (

        <section id="quote" className="py-12 mt-20 sm:py-16m bg-white">
            <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-20"
                onMouseEnter={() => cursorChangeHandler("text-mode")}
                onMouseLeave={() => cursorChangeHandler("default")}
            >
                Get a Free Quote for <br />
                <span className="text-[#299B46]">
                    Professional Pest Control Services
                </span>
            </h2>

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
                                        className={`w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${errors.name ? "border-red-500" : ""
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
                                        className={`w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${errors.phone ? "border-red-500" : ""
                                            }`}
                                    />
                                    {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                                </div>

                                {/* Email Input */}
                                <div>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className={`w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${errors.email ? "border-red-500" : ""
                                            }`}
                                    />
                                    {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                                </div>

                                {/* {Message Input } */}
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Messages (optional)"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 h-32 resize-none"
                                    />
                                </div>

                                {/* Service Dropdown */}
                                <div>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={` w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${errors.service ? "border-red-500" : ""
                                            }`}
                                    >
                                        <option value="" className="  ">Select Service</option>
                                        <option value="Cockroach Control">Cockroach Control</option>
                                        <option value="Spider Control">Spider Control</option>
                                        <option value="Termite Treatment">Termite Treatment</option>
                                        <option value="Rat & Rodent Control">Rat & Rodent Control</option>
                                        <option value="Bedbug Treatment">Bedbug Treatment</option>
                                        <option value="Mosquito Control">Mosquito Control</option>
                                        <option value="Ant & Fly Control">Ant & Fly Control</option>
                                        <option value="Mosquito Fogging">Mosquito Fogging</option>
                                        <option value="Home Disinfection">Home Disinfection</option>
                                        <option value="Others">Others</option>
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