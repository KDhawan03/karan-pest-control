import React from "react";

export default function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "Rajesh Kumar",
            location: "Delhi",
            rating: 5,
            text: "Excellent service! They got rid of the termites completely. Highly recommended!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
        },
        {
            id: 2,
            name: "Priya Singh",
            location: "Gurgaon",
            rating: 5,
            text: "Very professional team. They explained everything clearly and the results were fantastic.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
        },
        {
            id: 3,
            name: "Amit Patel",
            location: "Noida",
            rating: 4,
            text: "Good service overall. They were on time and very courteous. Would use them again.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
        },
        {
            id: 4,
            name: "Neha Gupta",
            location: "Delhi",
            rating: 5,
            text: "Best pest control service in the area. No pests since their treatment!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
        },
    ];

    const renderStars = (rating) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section id="reviews" className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        What Our Customers Say
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Trusted by thousands of satisfied customers across the region
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="h-12 w-12 rounded-full"
                                />
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        {review.name}
                                    </h3>
                                    <p className="text-xs text-gray-600">{review.location}</p>
                                </div>
                            </div>

                            <div className="mb-3">{renderStars(review.rating)}</div>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#quote"
                        className="inline-flex items-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
                    >
                        Get Your Free Quote Today
                    </a>
                </div>
            </div>
        </section>
    );
}
