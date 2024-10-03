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
    <div className="flex flex-col min-h-screen w-full">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main>
        {/* Centered Logo and Search Field */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg mt-8">
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
        <div className="flex-col items-center justify-center max-w-full bg-[#F5F5F5]">
          <h2 className="text-center text-3xl font-bold pt-5">
            Universities Listed
          </h2>
          <div className="flex flex-row w-full items-center justify-evenly py-5 my-5">
            {universities.map((university) => (
              <UniversitiesListed university={university} />
            ))}
          </div>
        </div>

        {/* Courses Listed */}
        <div className="flex-col items-center justify-center max-w-full bg-[#F5F5F5]">
          <h2 className="text-center text-3xl font-bold pt-5">
            Courses Listed
          </h2>
          <div className="flex flex-row w-full items-center justify-evenly py-5 my-5">
            {courses.map((course) => (
              <CoursesListed course={course} />
            ))}
          </div>
        </div>
      </main>

      <div className="bg-[#F5F5F5]">
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
