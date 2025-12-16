import React from 'react'
import ServicesCard from "./ServicesCard"
import { useMouse } from '../CursorAnimation/MouseContext';

const Services = () => {
    const { cursorChangeHandler } = useMouse();
    return (

        <section id='services'>
            <div className="grid grid-cols-1  gap-6 lg:p-8 bg-gray-100 min-h-screen">

                <div id='services' className="grid grid-cols-1  gap-6 lg:p-8 bg-gray-100 min-h-screen">



                    <div className="chooseUs-header w-full">
                        <button className="bg-[#299B46] text-white px-5 py-2 rounded-lg font-medium 
                   hover:bg-green-700 transition duration-300 shadow-sm hover:shadow">
                            Services
                        </button>

                        <h2 className="choose-title cursor-none"
                            onMouseEnter={() => cursorChangeHandler("text-mode")}
                            onMouseLeave={() => cursorChangeHandler("default")}
                        >
                            Effective & Reliable  <span className="text-[#299B46]">Pest Control Services</span>
                        </h2>


                        <p className="services-subtitle text-center sm:px-8 lg:px-100 text-lg">
                            We provide safe, effective, and long-lasting pest control solutions for homes and businesses.
                            Our expert team uses advanced, eco-friendly treatments to ensure a clean and pest-free environment.
                        </p>
                    </div>
                    <div className="cards-wrapper flex flex-wrap  whitespace-nowrap rtl-scroll">
                        <div className="inline-block rounded-lg w-full g-4 p-4 sm:w-1/2  lg:w-1/4" >
                            <ServicesCard
                                id="cockroach-control"
                                title="Cockroach Control"
                                description="Eliminating cockroach infestations from your property for a healthier environment."
                                image="/images/serviceImg1.png"
                                icon="/images/cockroach.png"
                            />
                        </div>
                        <div className="inline-block rounded-lg w-full g-4 p-4 sm:w-1/2 lg:w-1/4">
                            <ServicesCard
                                id="spider-control"
                                title="Spider Control"
                                description="Expert spider removal ensuring a safe and pest-free home environment."
                                image="/images/serviceImg2.png"
                                icon="/images/termite.png"
                            />
                        </div>


                        <div className="inline-block  rounded-lg w-full g-4 p-4 sm:w-1/2 lg:w-1/4">
                            <ServicesCard
                                id="3"
                                title="Bed Bug Treatment"
                                description="Effective solutions to eradicate bed bugs and prevent their return."
                                image="/images/serviceImg3.png"
                                icon="/images/bedbug.png"
                            />
                        </div>
                        <div className="inline-block  rounded-lg w-full g-4 p-4 sm:w-1/2 lg:w-1/4">
                            <ServicesCard
                                id="4"
                                title="Termite Protection"
                                description="Protect your property from structural damage with our advanced termite treatments."
                                image="/images/serviceImg4.png"
                                icon="/images/ant.jpg"
                            />

                        </div>
                        <div className="inline-block  rounded-lg w-full g-4 p-4 sm:w-1/2 lg:w-1/4">
                            <ServicesCard
                                id="5"
                                title="Ant & Fly Control"
                                description="Managing and eliminating ant and fly populations in and around your space."
                                image="/images/serviceImg5.png"
                                icon="/images/ant.jpg"
                            />
                        </div>
                        <div className="inline-block  rounded-lg w-full g-4 p-4 sm:w-1/2 lg:w-1/4">
                            <ServicesCard
                                id="6"
                                title="Rat & Rodent Management"
                                description="Humane and effective rodent control to prevent damage and disease."
                                image="/images/serviceImg6.png"
                                icon="/images/rat.png"
                            />
                        </div>
                        <div className="inline-block  rounded-lg w-full g-4 p-4 sm:w-1/2 lg:w-1/4">
                            <ServicesCard
                                id="7"
                                title="Mosquito Fogging"
                                description="Reduce mosquito populations and protect against mosquito-borne illnesses."
                                image="/images/serviceImg7.png"
                                icon="/images/mosquito.png"
                            />
                        </div>
                        <div className="inline-block  rounded-lg  w-full g-4 p-4  sm:w-1/2 lg:w-1/4">
                            <ServicesCard
                                id="8"
                                title="Home Disinfection"
                                description="Sanitizing services to ensure your home is free from germs and pathogens.."
                                image="/images/serviceImg8.png"
                                icon="/images/disinfection.png"
                            />
                        </div>


                    </div>
                </div>
            </div>    
        </section>
    );
};

export default Services;
