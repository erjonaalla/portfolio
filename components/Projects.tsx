import React from "react";
import RivieraImg from "../image/riviera.png";
import CaribbeanImg from "../image/royalcaribbean.png";
import DisneyImg from "../image/disney.png";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      title: "Royal Caribbean",
      description:
        "RoyalCaribbean.com is the official website of Royal Caribbean Cruises, a major global cruise line. It lets visitors browse cruise destinations and ships, find deals, and book vacations online.",
      image: CaribbeanImg,
    },
    {
      title: "Disneyland",
      description:
        "DisneylandParis.com is the official website for Disneyland Paris, one of Europe’s most popular theme park resorts.",
      image: DisneyImg,
    },
    {
      title: "Riviera Travel",
      description:
        "The Riviera Travel website showcases escorted tours and cruises offered by a UK travel company, including river cruises, group tours, and solo holidays, with options to browse, compare, and book trips worldwide.",
      image: RivieraImg,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="px-6 relative flex flex-col max-w-full justify-evenly mx-auto items-center z-0 mt-20 mb-10"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-10">
        Projects
      </h3>

      <div className="relative w-full gap-10 grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full flex flex-col items-center justify-center py-10"
          >
            {/* Image wrapper enforces same size */}
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-full h-[220px] flex items-center justify-center mb-8"
            >
              <img
                src={project.image.src}
                alt={project.title}
                className="h-full w-auto object-contain"
              />
            </motion.div>

            <div className="space-y-6 px-4 text-center max-w-xl">
              <h4 className="text-2xl font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}
                </span>
                <br />
                {project.title}
              </h4>

              {/* Truncated description */}
              <p className="text-lg line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
