import React from "react";
import NavBar from "../Components/NavBar";
import logo from "../assets/mainlogo.jpeg"; // Corrected 'assests' to 'assets'
import ipu from "../assets/ipu.png";
import du from "../assets/du.png";
import igdtuw from "../assets/igdtuw.png";
import aktu from "../assets/aktu.png";
import Footer from "../Components/Footer";
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Centered Logo and Search Field */}
        <section className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">SEMESTER SIMPLIFIED</h1>
          <img src={logo} alt="Main Logo" className="h-32 w-32 mb-4" />
          <p className="text-xl mb-6">Study Easier, Faster, and Better</p>

          {/* Search Bar with Icon */}
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search for courses or universities..."
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Universities Listed */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Universities Listed
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* University 1 */}
            <figure className="flex flex-col items-center">
              <img
                src={ipu}
                alt="Guru Gobind Singh Indraprastha University"
                className="h-24 w-24 object-contain mb-2"
              />
              <figcaption className="text-center text-sm">
                Guru Gobind Singh Indraprastha University
              </figcaption>
            </figure>

            {/* University 2 */}
            <figure className="flex flex-col items-center">
              <img
                src={du}
                alt="University of Delhi"
                className="h-24 w-24 object-contain mb-2"
              />
              <figcaption className="text-center text-sm">
                University of Delhi
              </figcaption>
            </figure>

            {/* University 3 */}
            <figure className="flex flex-col items-center">
              <img
                src={aktu}
                alt="Dr.A.P.J.Abdul Kalam Technical University"
                className="h-24 w-24 object-contain mb-2"
              />
              <figcaption className="text-center text-sm">
                Dr.A.P.J.Abdul Kalam Technical University
              </figcaption>
            </figure>

            {/* University 4 */}
            <figure className="flex flex-col items-center">
              <img
                src={igdtuw}
                alt="Indira Gandhi Delhi Technical University for Women"
                className="h-24 w-24 object-contain mb-2"
              />
              <figcaption className="text-center text-sm">
                Indira Gandhi Delhi Technical University for Women
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Courses Listed */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Courses Listed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Course 1 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor Of Technology
              </h3>
              <span className="text-blue-500">(B.Tech)</span>
            </div>

            {/* Course 2 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">
                Masters of Business Administration
              </h3>
              <span className="text-blue-500">(MBA)</span>
            </div>

            {/* Course 3 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor Of Commerce
              </h3>
              <span className="text-blue-500">(B.Com)</span>
            </div>

            {/* Course 4 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Computer Application
              </h3>
              <span className="text-blue-500">(BCA)</span>
            </div>

            {/* Course 5 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">
                Masters of Computer Application
              </h3>
              <span className="text-blue-500">(MCA)</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
