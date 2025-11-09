import React from "react";
// import servicesData from "../../../../public/data/services.json";
import servicesData from "../../public/data/services.json";

const ServicesSection = () => {
  const displayedServices = servicesData.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-500 font-semibold text-lg">Service</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Our Service Area
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Majority Have Suffered Alteration in Some Form, By Injected
            Humour, Or Randomised Words Which Don't Look Even Slightly
            Believable.
          </p>
        </div>

        {/* Services Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="mb-4 flex items-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover rounded-lg h-[214px]"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-1.5">
                {service.title}
              </h3>

              {/* Price */}
              <div className="text-red-500 font-semibold text-xl mb-4">
                Price: ${service.price}
              </div>
            </div>
          ))}
        </div>

        {/* More Services Button */}
        <div className="text-center">
          <button className="bg-white border border-red-500 text-red-500 py-3 px-8 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300 font-semibold text-lg cursor-pointer">
            More Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
