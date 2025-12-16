// src/components/ServicesCard.jsx
import "./ServicesCard.css";
import {Link} from "react-router-dom";

const ServicesCard = ({ id, image, title, description, icon }) => {
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
                    <div className="w-18 h-18 rounded-full bg-[#299B46] flex items-center justify-center border-4 border-white circle">
                        <span className="text-white text-2xl"> <img src={icon} alt="" /> </span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                </h3>

                <p className=" whitespace-normal min-h-30 h-auto pt-5">
                    {description}
                </p>
                <Link to={`/services/${id}`}>                    
                <button className="bg-[#299B46] hover:bg-[#1e1a3d] text-white font-semibold px-6 py-2 rounded-full transition duration-400 transform hover:scale-105 btn-wipe">
                    See in Detail
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesCard;
