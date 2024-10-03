import React from "react";

const CoursesListed = ({ course }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      {/* Course details */}
      <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-xl font-semibold text-center">
          {course.fullName}
        </h3>
        <span className="text-blue-500">{`(${course.abbreviation})`}</span>
      </div>
    </div>
  );
};

export default CoursesListed;
