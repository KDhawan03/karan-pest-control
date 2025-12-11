// src/components/ServicesCard.jsx
import "./ServicesCard.css";
const ServicesCard = ({ image, title, description,icon }) => {
    return (
        <div className="services-card bg-white rounded-3xl shadow-md overflow-hidden w-full">

            <div className="h-52 overflow-hidden card-img ">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="px-6 py-6 text-center">
                <div className="flex items-center justify-center -mt-12 mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#299B46] flex items-center justify-center border-4 border-white circle">
                        <span className="text-white text-2xl">{icon}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                </h3>

                <p className=" whitespace-normal min-h-30 h-auto pt-5">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServicesCard;
