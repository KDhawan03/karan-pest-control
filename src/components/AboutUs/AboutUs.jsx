import React from "react";
import "./About.css";
import { useMouse } from '../CursorAnimation/MouseContext';

const AboutUs = () => {
    const { cursorChangeHandler } = useMouse();
    return (

        <section id="about">


            <div id="about" className="w-full bg-white py-20 px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">


                {/* LEFT CONTENT */}
                <div className="space-y-6">

                    <button className="bg-green-100 text-green-700 px-5 py-1.5 rounded-full font-semibold ">
                        About Us
                    </button>

                    <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug"
                        onMouseEnter={() => cursorChangeHandler("text-mode")}
                        onMouseLeave={() => cursorChangeHandler("default")}
                    >
                        Trusted Experts Delivering Pest Control <span style={{ color: "#299B46" }}>You Can Count On</span>
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Karan Pest Control is a trusted pest control service focused on providing safe, reliable,
                        and effective solutions for homes and businesses. With a certified team,
                        eco-friendly treatments, and dedicated customer support, we ensure a
                        pest-free environment for your comfort.
                    </p>

                    {/* INFO BOXES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">

                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                            <div className="text-4xl">🎯</div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 mb-1">Our Mission</h2>
                                <p className="text-gray-600 text-sm">To provide safe and effective pest control services.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                            <div className="text-4xl">🔰</div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 mb-1">Certified Team</h2>
                                <p className="text-gray-600 text-sm">Professionals trained and certified for best results.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                            <div className="text-4xl">♻️</div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 mb-1">Eco-Friendly</h2>
                                <p className="text-gray-600 text-sm">Using safe treatment methods for your family.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
                            <div className="text-4xl">🎧</div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800 mb-1">Customer Support</h2>
                                <p className="text-gray-600 text-sm">We are available 24/7 for assistance.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT IMAGE + ROTATING ICON */}
                <div className="flex justify-center relative w-full max-w-lg lg:ml-25">

                    {/* Rotating Icon - Always bottom left */}
                    <div className="
                    absolute
                    -bottom-6
                    -left-6
                    bg-white
                    rounded-full
                    h-20 w-20
                    flex items-center justify-center
                    shadow-lg
                    rotate-slow 
                ">
                        <span className="text-5xl">🪲</span>
                    </div>

                    <img
                        src="/images/AboutImg.png"
                        alt="Pest Control"
                        className="rounded-2xl shadow-lg w-full lg:mt-10  lg:h-120 lg:w-160"
                    />
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
