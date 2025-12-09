   import React from "react";

// export default function ContactUs() {
//     return (
//         <section id="contact" className="bg-gray-900 py-16 sm:py-24">
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 <div className="rounded-2xl bg-linear-to-r from-gray-800 to-gray-900 p-8 sm:p-12">
//                     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                         {/* Contact Us */}
//                         <div className="flex gap-4">
//                             <div className="shrink-0">
//                                 <svg
//                                     className="h-8 w-8 text-emerald-500"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                                     />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold text-white">Contact Us</h3>
//                                 <p className="mt-2 text-gray-300">+91 7071887188</p>
//                             </div>
//                         </div>

//                         {/* Email Address */}
//                         <div className="flex gap-4">
//                             <div className="shrink-0">
//                                 <svg
//                                     className="h-8 w-8 text-emerald-500"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                     />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold text-white">Email Address</h3>
//                                 <p className="mt-2 text-gray-300">solutions@csat-services.com</p>
//                             </div>
//                         </div>

//                         {/* Location */}
//                         <div className="flex gap-4">
//                             <div className="shrink-0">
//                                 <svg
//                                     className="h-8 w-8 text-emerald-500"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                                     />
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                                     />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold text-white">Location</h3>
//                                 <p className="mt-2 text-gray-300">Lucknow</p>
//                             </div>
//                         </div>

//                         {/* Working Hours */}
//                         <div className="flex gap-4">
//                             <div className="shrink-0">
//                                 <svg
//                                     className="h-8 w-8 text-emerald-500"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                                     />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold text-white">Working Hours</h3>
//                                 <p className="mt-2 text-gray-300">
//                                     Mon - Sat: 7:00AM to 5:00PM
//                                     <br />
//                                     Sunday: Close
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



function ContactUs() {
    return (
        <>
            <section id="contact" className="bg-amber-700 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="rounded-2xl bg-linear-to-r from-blue-800 to-blue-900 p-8 sm:p-12">
                        <div className="text-center mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Email Address */}
                            <div className="flex gap-4">
                                <div className="shrink-0">
                                    <svg
                                        className="h-8 w-8 text-emerald-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Email Address</h3>
                                    <p className="mt-2 text-gray-300">solutions@csat-services.com</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex gap-4">
                                <div className="shrink-0">
                                    <svg
                                        className="h-8 w-8 text-emerald-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Location</h3>
                                    <p className="mt-2 text-gray-300">Lucknow</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex gap-4">
                                <div className="shrink-0">
                                    <svg
                                        className="h-8 w-8 text-emerald-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Working Hours</h3>
                                    <p className="mt-2 text-gray-300">
                                        Mon - Sat: 7:00AM to 5:00PM
                                        <br />
                                        Sunday: Close
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
