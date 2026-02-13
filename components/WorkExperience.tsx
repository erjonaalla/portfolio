import React from "react";
import ExperienceCard from "./ExperienceCard";
import NewyorkerImg from "../image/newyorker.png";

const experiences = [
  {
    title: "Textile & Fashion Engineering",
    company: "Alba Shoes Group",
    companyImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGc9-Uu9jF4HPOkUyBvw9Vdq143dK4dLnZZg&s",
    technologies: [
      "https://www.aidoos.com/media/aidoos_product/lectra.png",
      "https://images.seeklogo.com/logo-png/48/2/autocad-logo-png_seeklogo-482394.png",
      "https://www.shutterstock.com/image-vector/cad-computeraided-design-concept-vector-600nw-2419508531.jpg",
    ],
    startDate: "2014",
    endDate: "2016",
    points: [
      "Designed 2D and 3D shoe models using CAD/CAM software.",
      "Developed production-ready patterns with material efficiency.",
      "Collaborated with production teams during manufacturing.",
      "Gained hands-on experience in footwear production.",
    ],
  },
  {
    title: "Team Lead",
    company: "Alba Call",
    companyImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbKVmjtr0BAT4vGgUt2tpWDr80StAeVqNag&s",
    technologies: [
      "https://omkb.de/wp-content/uploads/2021/09/salesforce-crm-logo.png",
      "https://capacity.com/wp-content/uploads/2020/05/Zendesk-vs-Freshdesk-02.png",
      "https://www.primeinstitute.com/web/images/1635689082.jpeg",
    ],
    startDate: "2016",
    endDate: "2018",
    points: [
      "Led customer service teams for Vodafone Italy.",
      "Trained and mentored new team members.",
      "Handled escalations and quality control.",
      "Improved workflows with management teams.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Creativ Cult",
    companyImage:
      "https://pbs.twimg.com/profile_images/378800000695479479/5b6b6edad0b3e8703e6e995862f48b3b_400x400.jpeg",
    technologies: [
      "https://cdn-icons-png.flaticon.com/256/919/919827.png",
      "https://cdn-icons-png.flaticon.com/512/919/919826.png",
      "https://cdn-icons-png.flaticon.com/512/919/919828.png",
    ],
    startDate: "2019",
    endDate: "2020",
    points: [
      "Built responsive websites for clients.",
      "Worked with senior developers on best practices.",
      "Implemented features using HTML, CSS, JavaScript.",
      "Improved skills through continuous learning.",
    ],
  },
  {
    title: "Floor Manager",
    company: "New Yorker",
    companyImage: NewyorkerImg,
    technologies: [
      "https://static.integrata-cegos.de/wp-content/uploads/2024/08/09094927/Mcrosoft-Office_365_Menue_Word-1.png",
      "https://adlon.de/wp-content/uploads/2023/07/Excel.png",
      "https://twentyfour.dk/wp-content/uploads/2020/08/large-bobble-for-integration.psd.png",
    ],
    startDate: "2020",
    endDate: "2024",
    points: [
      "Managed daily store operations.",
      "Led and scheduled employees.",
      "Oversaw sales and customer service.",
      "Optimized store layout and inventory flow.",
    ],
  },
  {
    title: "Internship Frontend Developer",
    company: "2VizCon",
    companyImage:
      "https://station-frankfurt.de/wp-content/uploads/2015/07/logo_2vizcon_01_01.png",
    technologies: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi080MB34gmji6A2bmb7yndUYxq3eeIJkSRg&s",
      "https://i.pinimg.com/736x/98/0b/a0/980ba07956ccfdf81b5060b1795cdcad.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s",
    ],
    startDate: "2024",
    endDate: "2025",
    points: [
      "Built UI components for web and mobile.",
      "Worked with React-based workflows.",
      "Participated in code reviews and agile meetings.",
      "Improved debugging and optimization skills.",
    ],
  },
];


function WorkExperience() {
  return (
    <div className="flex relative overflow-hidden flex-col max-w-full px-6">
      <h3 className="uppercase tracking-[15px] text-gray-500 text-xl md:text-2xl text-center mt-20">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll py-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
