import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import logo from "../assets/mainlogo.jpeg"; // Corrected 'assests' to 'assets'
import Footer from "../Components/Footer";
import AutoSuggestSearch from "../Components/AutoSuggestSearch";
import UniversitiesListed from "../Components/UniversitiesListed";
import CoursesListed from "../Components/CoursesListed";
import { UniversitiesList } from "../assets/UniversitiesList";
import { CoursesList } from "../assets/CoursesList";
import { useRef } from "react";
const HomePage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const requestRef = useRef();
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setUniversities(UniversitiesList);
    setCourses(CoursesList);

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });

      // Add a new particle at the cursor position
      const newParticle = {
        id: Math.random().toString(36).substr(2, 9), // Unique ID
        x: event.clientX,
        y: event.clientY,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // Random color
        size: Math.random() * 5 + 2, // Random size between 2 and 7
        life: 1, // Initial life (opacity)
      };
      setParticles((prev) => [...prev, newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

   useEffect(() => {
      const animateParticles = () => {
        setParticles((prev) =>
          prev
            .map((particle) => ({
              ...particle,
              x: particle.x + (Math.random() - 0.5) * 2, // Random horizontal movement
              y: particle.y + (Math.random() - 0.5) * 2, // Random vertical movement
              life: particle.life - 0.02, // Fade out over time
            }))
            .filter((particle) => particle.life > 0) // Remove particles that are fully faded
        );
        requestRef.current = requestAnimationFrame(animateParticles);
      };
  
      requestRef.current = requestAnimationFrame(animateParticles);
      return () => cancelAnimationFrame(requestRef.current);
    }, []);

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      {/* Custom Cursor */}

      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
          width: "40px", // Increased size
          height: "40px", // Increased size
          backgroundColor: "rgba(0, 0, 255, 0.3)", // Semi-transparent blue
          border: "2px solid blue", // Border for better visibility
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
          boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)", // Glow effect
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.life,
            transform: "translate(-50%, -50%)",
            transition: "all 0.1s ease-out",
          }}
        />
      ))}

      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="opacity-0 animate-fadeIn">
        {/* Centered Logo and Search Field */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg mt-8">
            SEMESTER SIMPLIFIED
          </h1>
          <img
            src={logo}
            alt="Main Logo"
            className="h-32 w-32 mb-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <p className="text-2xl mb-6 font-semibold">
            Study Easier, Faster, and Better
          </p>

          {/* Search Bar with Icon */}
          <div className="relative w-full max-w-md">
            <AutoSuggestSearch className="transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>
        </div>

        {/* Universities Listed */}
        <div className="flex-col items-center justify-center max-w-full bg-[#F5F5F5] transition-colors duration-300 hover:bg-[#e5e5e5] overflow-hidden">
          <h2 className="text-center text-3xl font-bold pt-5">
            Universities Listed
          </h2>
          <div className="flex flex-row w-full items-center justify-evenly py-5 my-5 animate-marquee">
            {universities.map((university, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 mx-5 transform transition-transform duration-500 hover:scale-105"
              >
                <UniversitiesListed university={university} />
              </div>
            ))}
          </div>
        </div>

        {/* Courses Listed */}
        <div className="flex-col items-center justify-center max-w-full bg-[#F5F5F5] transition-colors duration-300 hover:bg-[#e5e5e5]">
          <h2 className="text-center text-3xl font-bold pt-5">
            Courses Listed
          </h2>
          <div className="flex flex-row w-full items-center justify-evenly py-5 my-5">
            {courses.map((course, index) => (
              <CoursesListed key={index} course={course} />
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