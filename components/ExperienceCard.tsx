import React from "react";
import { motion } from "framer-motion";

type Experience = {
  title: string;
  company: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  points: string[];
  companyImage: string | { src: string }; // ✅ FIX
};

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[80%] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      
      {/* Company Logo */}
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-contain bg-white p-2"
        src={
          typeof experience.companyImage === "string"
            ? experience.companyImage
            : experience.companyImage.src
        }
        alt={experience.company}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          {experience.title}
        </h4>

        <p className="font-bold text-xl md:text-2xl mt-1">
          {experience.company}
        </p>

        {/* Technologies */}
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech, index) => (
            <img
              key={index}
              className="h-10 w-10 rounded-full object-contain bg-white p-1"
              src={tech}
              alt="technology"
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {experience.startDate} – {experience.endDate}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg text-gray-200">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
