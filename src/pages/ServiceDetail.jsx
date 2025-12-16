import Navbar from "../components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

const ServiceDetail = () => {
  const navigate = useNavigate();

  const goToQuote = () => {
    navigate("/"); // Home page pe jao
    setTimeout(() => {
      const quoteSection = document.getElementById("quote");
      quoteSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500); // Route change ke liye delay
  };

  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <h2 className="p-10 text-center text-2xl font-bold text-red-600">Service not found</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-10 space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {service.title}
          </h1> */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl h-64 md:h-80 object-cover mt-20"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Structured Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Intro */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-8 border-blue-500">
              <p className="text-xl text-gray-700 leading-relaxed">
                {service.details.intro}
              </p>
            </div>

            {/* Sections */}
            {service.details.sections.map((section, index) => (
              <section key={index} className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-gray-200 pb-2">
                  {section.heading}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {section.content.split('\n').map((line, i) => (
                    line.trim() && (
                      <div key={i} className="mb-4">
                        {line.includes('•') ? (
                          <p className="flex items-start gap-3">
                            <span className="text-blue-600 font-semibold mt-1">✓</span>
                            <span>{line.replace('•', '').trim()}</span>
                          </p>
                        ) : (
                          <p>{line}</p>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 sticky top-20 space-y-8">
            {/* Service Details Card */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
                Service Details
              </h3>
              <div className="space-y-6 text-lg">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold text-gray-700">Duration</span>
                  <span className="font-bold text-xl text-blue-600">30-45 mins</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold text-gray-700">Guarantee</span>
                  <span className="font-bold text-xl text-green-600">3 Months</span>
                </div>
                <div className="space-y-3 pt-6 border-t">
                  <div className="flex justify-between font-bold text-xl text-red-600 p-3 bg-red-50 rounded-xl">
                    <span>Trust-Focused</span>

                  </div>
                  <div className="flex justify-between font-bold text-xl text-red-600 p-3 bg-red-50 rounded-xl">
                    <span>Action Oriented</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-red-600 p-3 bg-red-50 rounded-xl">
                    <span>Premium Feel</span>
                  </div>
                </div>
              </div>
              <button
                onClick={goToQuote}
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  📞 BOOK NOW
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
