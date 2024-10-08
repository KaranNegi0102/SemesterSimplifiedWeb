import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import AutoSuggestSearch from "../Components/AutoSuggestSearch";
import { useLocation } from "react-router-dom";
import { UniversitiesList } from "../assets/UniversitiesList";
import { FaBook } from "react-icons/fa"; // Assuming you're using react-icons

const SubjectPage = () => {
  const [university, setUniversity] = useState("");
  const [typeOfDocs, setTypeOfDocs] = useState("");
  const [relatedSubjects, setRelatedSubjects] = useState([
    "Compiler Design",
    "Data Structure",
    "Human Values",
  ]);
  const [dataToRender, setDataToRender] = useState([
    {
      title: "Quantum",
      uploadedBy: "Anurag",
    },
    {
      title: "Notes",
      uploadedBy: "Negi",
    },
    {
      title: "Previous Year Papers",
      uploadedBy: "Avaya",
    },
  ]);
  const location = useLocation(); // Get current location (including the URL query params)

  // Create a new instance of URLSearchParams to work with query parameters
  const queryParams = new URLSearchParams(location.search);

  // Extract the values of 'course' and 'subject'
  const course = queryParams.get("course");
  const subject = queryParams.get("subject");

  const filterButtonHandler = (e) => {
    setTypeOfDocs(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Centering AutoSuggestSearch and making it wider */}
      <div className="flex items-center justify-center mb-6 mt-6 min-w-full">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <AutoSuggestSearch />
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row">
        {/* Filters Section */}
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4 mr-0 md:mr-4">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          {/* University Selection */}
          <div className="mb-4">
            <label
              htmlFor="universities"
              className="block text-sm font-medium mb-2"
            >
              Select University
            </label>
            <select
              name="universities"
              id="universities"
              onChange={(e) => setUniversity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option>Select University</option>
              {UniversitiesList.map((item) => (
                <option key={item.fullName} value={item.fullName}>
                  {item.fullName}
                </option>
              ))}
            </select>
          </div>

          {/* Study Choices */}
          <h4 className="font-semibold mb-2">Study Choices</h4>
          <div className="space-y-2">
            {["assignments", "notes", "books", "papers"].map((type) => (
              <button
                key={type}
                onClick={filterButtonHandler}
                value={type}
                className="w-full p-2 text-left bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
              >
                {type.charAt(0).toUpperCase() + type.slice(1).replace(/s$/, "")}
              </button>
            ))}
          </div>

          {/* Most Searched Subjects Section */}
          <h4 className="font-semibold mt-4 mb-2">Most Searched Subjects</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Data Structures and Algorithms</li>
            <li>Computer Networks</li>
            <li>Compiler Design</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-4 mt-4 md:mt-0">
          {/* <h2 className="text-xl font-semibold mb-4">Documents Related to {subject}</h2> */}

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Related Subjects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedSubjects.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-200"
                >
                  <div className="flex items-center">
                    <FaBook size={30} className="text-blue-500 mr-2" />
                    <span>{item}</span>
                  </div>
                  {/* <span className="text-sm text-gray-500">Icon of Book</span> */}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">{`Documents related to "${subject}"`}</h3>
          <div className="space-y-4">
            {dataToRender.map((doc, index) => (
              <div
                key={index}
                className="flex items-center p-4 border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-200"
              >
                <FaBook size={40} className="text-blue-500 mr-4" />
                <div className="flex flex-col">
                  <span className="font-medium">{doc.title}</span>
                  <span className="text-sm text-gray-500">
                    {doc.uploadedBy}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
