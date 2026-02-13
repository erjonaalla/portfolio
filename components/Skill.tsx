"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type SkillProps = {
  directionLeft?: boolean;
  percentage: number;
  image: string;
};

export default function Skill({ directionLeft, percentage, image }: SkillProps) {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 768px)");

    const updateMatch = () => setIsMdUp(media.matches);
    updateMatch();

    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, []);

  return (
    <div className="group relative flex cursor-pointer justify-center">
      <img
        src={image}
        alt="Skill Icon"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-10">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}
