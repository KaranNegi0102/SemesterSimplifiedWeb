import React from "react";

const UniversitiesListed = ({ university }) => {
  return (
    <div className="p-4 flex items-center justify-center">
      
        {/* University Data*/}
        <figure className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform">
          <img
            src={university.logoUrl}
            alt={university.fullName}
            className="h-24 w-24 object-contain mb-4 rounded-full border border-gray-200 p-2"
          />
          <figcaption className="text-center text-base font-semibold text-gray-700">
            {university.fullName}
          </figcaption>
        </figure>
      
    </div>
  );
};

export default UniversitiesListed;
