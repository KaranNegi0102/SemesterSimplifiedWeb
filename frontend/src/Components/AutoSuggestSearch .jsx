import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const AutoSuggestSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Sample data for suggestions
  const data = [
    'Bachelor Of Technology',
    'Masters of Business Administration',
    'Bachelor Of Commerce',
    'Bachelor of Computer Application',
    'Masters of Computer Application',
    'Doctor of Philosophy',
    'Master of Science',
    'Bachelor of Arts',
    'Master of Social Work',
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
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search for courses..."
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
