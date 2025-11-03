import React from "react";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skill";
import myimg from "../assets/profile-pic.png"

const Home = () => {
  return (
    <div className="text-black bg-yellow-300 min-h-screen">
      <header className="w-full lg:h-screen h-[600px] flex items-center justify-center relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20 max-w-6xl px-6">
          <div className="text-center lg:text-left lg:pr-8">
            <h1 className="text-6xl lg:text-8xl font-bold uppercase">Nikhil Saini</h1>
            <p className="text-2xl lg:text-3xl mt-2">Software Developer</p>
          </div>

          <div className="relative">
            <img
              src={myimg}
              alt="Portrait of Nikhil Saini"
              className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold text-center uppercase mb-4">About Me</h2>
          <hr className="w-1/3 mx-auto border-2 border-black mb-8" />

          <div className="lg:flex lg:gap-20">
            <div className="lg:w-1/2 p-3">
              <h3 className="font-bold text-3xl mb-4">Professional Summary</h3>
              <p>
                I’m Nikhil Kumar Saini, a passionate and creative software developer focused on modern web development.
                I build clean, responsive, and user-friendly interfaces using HTML, CSS, Tailwind CSS, Bootstrap,
                JavaScript, React.js, and MongoDB.
              </p>
            </div>

            <div className="lg:w-1/2 p-3">
              <h3 className="font-bold text-3xl mb-4">Education</h3>

              <div className="bg-amber-100 w-full lg:w-3/4 border-2 p-4 mb-4 rounded-md hover:bg-amber-200">
                <h4 className="font-bold">Bachelor of Computer Applications (BCA)</h4>
                <p>Agrwal P.G College, Jaipur</p>
                <p>2023 - 2026</p>
              </div>

              <div className="bg-amber-100 w-full lg:w-3/4 border-2 p-4 rounded-md hover:bg-amber-200">
                <h4 className="font-bold">High School</h4>
                <p>Podar School, Jhunjhunu</p>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
