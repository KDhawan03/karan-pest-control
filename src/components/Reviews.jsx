import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {  StarFilled  } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() { 
    const reviews = [
        {
            name: "Deepak Rana",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text:
                "I used their termite pest control service for my home in Lucknow. The team was professional, punctual, explained everything clearly, and delivered excellent long-lasting results.",
        },
        {
            name: "Shreya Mittal",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text:
                "Their bedbug pest control service was extremely effective. Staff arrived on time, handled work professionally, and solved the issue completely. I am very satisfied with their service.",
        },
        {
            name: "Priyansh Mehta",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/men/56.jpg",
            text:
                "We hired their industrial pest control services for our warehouse. The team followed safety standards, used proper equipment, and delivered reliable results beyond our expectations.",
        },
        {
            name: "Neha Gupta",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            text:
                "Excellent pest control service with trained and polite staff. The treatment was thorough and effective. We have not faced any pest problems after the service.",
        },
        {
            name: "Rohit Verma",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            text:
                "Quick response, professional behavior, and effective treatment. The team explained the process clearly and ensured complete hygiene throughout the pest control service.",
        },
        {
            name: "Anjali Sharma",
            role: "Customer",
            image: "https://randomuser.me/api/portraits/women/12.jpg",
            text:
                "Very smooth experience from booking to service completion. Pricing was fair, work was professional, and results were impressive. I would recommend them to others.",
        },
    ];



    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-center text-4xl font-extrabold text-gray-900">
                    What Our Customers Say About <br />
                    <span className="text-[#299B46] ">
                        Our Pest Control Services
                    </span>
                </h2>

                {/* Carousel */}
                <div className="mt-20">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={40}
                        
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {   reviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <div
                                        className={`mb-16 mt-12 h-[360px] flex flex-col justify-between
                                                    rounded-3xl border border-black/20 bg-white p-8
                                                    transition-all duration-300
                                        ${isActive
                                                ? "scale-105 shadow-xl"
                                                : "opacity-70"
                                        }`}
                                    >
                                        {/* Profile */}
                                        <div>
                                            <div className="flex-col items-center  mb-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-16 w-16 mb-4 rounded-full"
                                                />
                                                <div>
                                                    <h4 className="font-bold text-gray-900">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-800">{item.role}</p>
                                                </div>
                                            </div>


                                            {/* Stars */}
                                            <div className="flex gap-1 mb-4 text-green-700 text-lg">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarFilled key={i} />
                                                ))}
                                            </div>


                                            {/* Review Text */}
                                            <p className="text-gray-600 leading-relaxed">
                                                “{item.text}”
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div >
            </div >
        </section >
    );
}
