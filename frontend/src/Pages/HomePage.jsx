import NavBar from "../Components/NavBar";
import logo from "../assets/mainlogo.jpeg"; // Corrected 'assests' to 'assets'
import ipu from "../assets/ipu.png";
import du from "../assets/du.png";
import igdtuw from "../assets/igdtuw.png";
import aktu from "../assets/aktu.png";
import Footer from "../Components/Footer";
import AutoSuggestSearch from "../Components/AutoSuggestSearch ";

const HomePage = () => {

  
  return (
    <div className="flex flex-col min-h-screen">
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
        <div className="mb-12 w-full p-3">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Universities Listed
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* University 1 */}
            <figure className="flex flex-col items-center">
              <img
                src={ipu}
                alt="Guru Gobind Singh Indraprastha University"
                className="h-24 w-24 object-contain mb-2"
              />
              <figcaption className="text-center text-sm font-semibold">
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
              <figcaption className="text-center text-sm font-semibold">
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
              <figcaption className="text-center text-sm font-semibold">
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
              <figcaption className="text-center text-sm font-semibold">
                Indira Gandhi Delhi Technical University for Women
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Courses Listed */}
        <div className="w-full bg-[#F5F5F5] p-5">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Courses Listed
          </h2>
          <div className="flex flex-row items-center justify-center gap-10 flex-wrap max-w-6xl mx-auto">
            {/* Course 1 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-center">
                Bachelor Of Technology
              </h3>
              <span className="text-blue-500">(B.Tech)</span>
            </div>

            {/* Course 2 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-center">
                Masters of Business Administration
              </h3>
              <span className="text-blue-500">(MBA)</span>
            </div>

            {/* Course 3 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-center">
                Bachelor Of Commerce
              </h3>
              <span className="text-blue-500">(B.Com)</span>
            </div>

            {/* Course 4 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-center">
                Bachelor of Computer Application
              </h3>
              <span className="text-blue-500">(BCA)</span>
            </div>

            {/* Course 5 */}
            <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-center">
                Masters of Computer Application
              </h3>
              <span className="text-blue-500">(MCA)</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
