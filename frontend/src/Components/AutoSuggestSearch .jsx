import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

const AutoSuggestSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Sample data for suggestions
  const data = [
    // Bachelor of Technology (B.Tech)
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Circuit Theory",
    "Digital Electronics",
    "Control Systems",
    "Power Systems",
    "Electromagnetic Fields",
    "Thermodynamics",
    "Fluid Mechanics",
    "Manufacturing Processes",
    "Machine Design",
    "Engineering Mechanics",

    // Masters of Business Administration (MBA)
    "Financial Management",
    "Investment Analysis",
    "Corporate Finance",
    "Financial Accounting",
    "Risk Management",
    "Marketing Management",
    "Consumer Behavior",
    "Digital Marketing",
    "Brand Management",
    "Sales Management",
    "Organizational Behavior",
    "Talent Management",
    "Performance Management",
    "Labor Laws",
    "Compensation Management",

    // Bachelor of Commerce (B.Com)
    "Financial Accounting",
    "Cost Accounting",
    "Management Accounting",
    "Taxation",
    "Auditing",
    "Business Law",
    "Business Economics",
    "Business Environment",
    "Entrepreneurship",
    "E-Commerce",
    "Financial Management",
    "Investment Management",
    "Banking and Insurance",
    "Corporate Finance",
    "Financial Markets",

    // Bachelor of Computer Applications (BCA)
    "C Programming",
    "Java Programming",
    "Data Structures",
    "Web Development",
    "Software Engineering",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Mobile App Development",
    "Cloud Computing",

    // Masters of Computer Applications (MCA)
    "Advanced Data Structures",
    "Software Engineering",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "Mobile Computing",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
  ];

  const handleChange = (event) => {
    const input = event.target.value;
    setQuery(input);

    if (input) {
      const filteredSuggestions = data.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="relative w-full max-w-md">
      {/* <NavLink to='/about'> */}
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      {/* </NavLink> */}
      <input
        type="text"
        placeholder="SEARCH SUBJECT"
        value={query}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggestSearch;
