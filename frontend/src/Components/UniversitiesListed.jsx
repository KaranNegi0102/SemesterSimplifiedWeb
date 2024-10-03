import React from "react";

const UniversitiesListed = ({ university }) => {
  return (
    <div className="flex items-center justify-center max-w-36 text-center animate-slide">
      {/* University Data*/}
      <figure className="flex flex-col items-center">
        <img
          src={university.logoUrl}
          alt={university.fullName}
          width={100}
          height={100}
          className="rounded-full"
        />
        <figcaption className="font-bold">{university.fullName}</figcaption>
        <span>{`(${university.abbreviation})`}</span>
      </figure>
    </div>
  );
};

export default UniversitiesListed;
