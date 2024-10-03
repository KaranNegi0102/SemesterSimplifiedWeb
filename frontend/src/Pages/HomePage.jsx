import NavBar from "../Components/NavBar";
import logo from "../assets/mainlogo.jpeg"; // Corrected 'assests' to 'assets'
import Footer from "../Components/Footer";
import AutoSuggestSearch from "../Components/AutoSuggestSearch";
import UniversitiesListed from "../Components/UniversitiesListed";
import CoursesListed from "../Components/CoursesListed";
import { useEffect, useState } from "react";
import { UniversitiesList } from "../assets/UniversitiesList";
import { CoursesList } from "../assets/CoursesList";

const HomePage = () => {
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setUniversities(UniversitiesList);
    setCourses(CoursesList);
  }, []);

  return (
    <div className="flex flex-col min-h-screen min-w-full">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 ">
        {/* Centered Logo and Search Field */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg ">
            SEMESTER SIMPLIFIED
          </h1>
          <img
            src={logo}
            alt="Main Logo"
            className="h-32 w-32 mb-4 rounded-full"
          />
          <p className="text-2xl mb-6 font-semibold">
            Study Easier, Faster, and Better
          </p>

          {/* Search Bar with Icon */}
          <div className="relative w-full max-w-md">
            <AutoSuggestSearch />
          </div>
        </div>

        {/* Universities Listed */}
        <div className="flex flex-col items-center justify-center w-full bg-[#F5F5F5]">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Universities Listed
          </h2>
          {universities.map((university) => (
            <UniversitiesListed university={university} />
          ))}
        </div>

        {/* Courses Listed */}
        <div className="w-full bg-[#F5F5F5] p-5">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Courses Listed
          </h2>

          <div>
            {courses.map((course) => (
              <CoursesListed course={course} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
