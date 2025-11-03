import React from "react";
import { BsGithub } from "react-icons/bs";

const Project = () => {

 


  const projects = [
    {
      id: 1,
      title: "E-Commerce Example",
      desc: "A sample e-commerce platform with product listings, cart functionality, and checkout process.",
      img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: ["React", "JavaScript", "MongoDB"],
      code: "https://github.com/Nikhilrj18/zaptro",
      demo: "https://zeptro-web.netlify.app/",
    },
    {
      id: 2,
      title: "I.C.S.S School",
      desc: "A comprehensive school website providing information about academics, admissions, and events.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1122",
      tech: ["React", "JavaScript"],
      code: "https://github.com/Nikhilrj18/Iswhar-chandr-School",
      demo: "https://icss-school.netlify.app/",
    },
    {
      id: 3,
      title: "SA Technology",
      desc: "A tech education platform offering courses and tutorials on web development and programming.",
      img: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      code: "https://github.com/Nikhilrj18/SA-technology",
      demo: "https://sa-teachnology.netlify.app/",
    },
    {
      id: 4,
      title: "K72 - Web Statics",
      desc: "Static website showcasing a portfolio and services offered by a fictional web development agency.",
      img: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      tech: ["React", "JavaScript", "GSAP"],
      code: "https://github.com/Nikhilrj18/k72",
      demo: "https://k72-web.netlify.app/",
    },
    {
      id: 5,
      title: "iPhone Showcase",
      desc: "A product showcase website for the latest iPhone model, highlighting features and specs.",
      img: "https://images.unsplash.com/photo-1603625953304-97b6e41336b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      tech: ["React", "JavaScript", "GSAP", "Modern Views"],
      code: "https://github.com/Nikhilrj18/apple-web",
      demo: "https://appple-web.netlify.app/",
    },
    {
      id: 6,
      title: "BMW Web",
      desc: "A sleek and modern website for BMW, showcasing their latest car models and features.",
      img: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJtd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      tech: ["React", "JavaScript", "Library"],
      code: "https://github.com/Nikhilrj18/bwm",
      demo: "https://bmwcar-web.netlify.app/",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 id="project" className="text-3xl sm:text-4xl font-bold">
          MY <span className="text-[#F97316]">Projects</span>
        </h1>
        <hr className="w-24 sm:w-32 mx-auto border-2 border-black my-6" />
        <p className="text-[16px] sm:text-[18px] text-gray-700 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each project demonstrates my technical skills and problem-solving abilities.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((p) => (
            <article
              key={p.id}
              className="w-full max-w-sm mx-auto bg-amber-50 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-700 mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-red-500 border border-red-500 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-[#EA580C] text-[#EA580C] px-4 py-2 rounded-md hover:bg-[#EA580C] hover:text-white transition"
                    aria-label={`${p.title} - source code`}
                  >
                    <BsGithub /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border-2 border-[#EA580C] text-[#EA580C] px-4 py-2 rounded-md hover:bg-[#EA580C] hover:text-white transition"
                    aria-label={`${p.title} - live demo`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
