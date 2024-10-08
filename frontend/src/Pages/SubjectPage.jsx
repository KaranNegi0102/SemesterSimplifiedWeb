import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import AutoSuggestSearch from "../Components/AutoSuggestSearch";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UniversitiesList } from "../assets/UniversitiesList";
import { FaBook } from "react-icons/fa";
import axios from "axios";
import { data } from "../assets/Suggestions";

const SubjectPage = () => {
  const [university, setUniversity] = useState("");
  const [typeOfDocs, setTypeOfDocs] = useState("");
  const [relatedSubjects, setRelatedSubjects] = useState([]);
  const [allData, setAllData] = useState([]); // Store all documents
  const [dataToRender, setDataToRender] = useState([]); // Store filtered documents
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const course = queryParams.get("course");
  const subject = queryParams.get("subject");
  console.log(course);
  console.log(subject);
  
  

  // Function to handle filter button click
  const filterButtonHandler = (e) => {
    const selectedCategory = e.target.value;
    setTypeOfDocs(selectedCategory); // Set the selected category to state

    // Filter the data based on the selected category
    const filteredData =
      selectedCategory === "all"
        ? allData // Show all documents if "All" is selected
        : allData.filter((doc) => doc.category === selectedCategory);

    setDataToRender(filteredData);
    console.log("Filtered category:", selectedCategory);
  };

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/search/getDocs",
        {
          params: {
            course: course,
            subject: subject,
          },
        }
      );
      setAllData(response.data); // Store all documents
      setDataToRender(response.data); // Initially render all documents
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const settingRelatedSubjects = () => {
    // Filter subjects based on the course/degree
    const subjects =
      data.find((item) => item.degree === course)?.subjects || [];

    // Shuffle the array and pick 3 random subjects
    const shuffledSubjects = subjects.sort(() => 0.5 - Math.random());
    setRelatedSubjects(shuffledSubjects.slice(0, 3)); // Pick first 3 subjects from shuffled
  };

  useEffect(() => {
    fetchData();
    settingRelatedSubjects();
  }, [course, subject]);

  return (
    <div className="min-h-screen">
      <NavBar />

      <div className="flex items-center justify-center mb-6 mt-6 min-w-full">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <AutoSuggestSearch />
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4 mr-0 md:mr-4">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

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

          <h4 className="font-semibold mb-2">Material Type: </h4>
          <div className="space-y-2">
            {["all", "assignments", "notes", "books", "papers"].map((type) => (
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

          <h4 className="font-semibold mt-4 mb-2">Most Searched Subjects</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Data Structures and Algorithms</li>
            <li>Computer Networks</li>
            <li>Compiler Design</li>
          </ul>
        </div>

        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-4 mt-4 md:mt-0">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Related Subjects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedSubjects.map((item, index) => (
                <NavLink
                  to={`/search?course=${course}&subject=${encodeURIComponent(
                    item
                  )}`}
                >
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-200"
                  >
                    <div className="flex items-center">
                      <FaBook size={30} className="text-blue-500 mr-2" />
                      <span>{item}</span>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">{`Documents related to "${subject}"`}</h3>
          <div className="space-y-4">
            {dataToRender.length > 0 ? (
              dataToRender.map((doc, index) => (
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
              ))
            ) : (
              <p>No documents available for this selection.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
