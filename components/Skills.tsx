import React, { useState } from "react";
import Skill from "./Skill";
type Props = {};

function Skills({}: Props) {
  const [skills, setSkills] = useState([
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      percentage: 90,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s",
      percentage: 100,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968472.png",
      percentage: 100,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968520.png",
      percentage: 100,
    },
    {
      image: "https://www.aidoos.com/media/aidoos_product/lectra.png",
      percentage: 80,
    },
     {
      image: "https://images.seeklogo.com/logo-png/48/2/autocad-logo-png_seeklogo-482394.png",
      percentage: 90,
    },
    {
    image: "https://www.shutterstock.com/image-vector/cad-computeraided-design-concept-vector-600nw-2419508531.jpg",
      percentage: 90,
    },
     {
      image:"https://omkb.de/wp-content/uploads/2021/09/salesforce-crm-logo.png",
      percentage: 100,
    },
     {
      image: "https://capacity.com/wp-content/uploads/2020/05/Zendesk-vs-Freshdesk-02.png",
      percentage: 100,
    },
    {
    image:       "https://www.primeinstitute.com/web/images/1635689082.jpeg",
      percentage: 90,
    },
      {
      image:"https://cdn-icons-png.flaticon.com/256/919/919827.png",
      percentage: 100,
    },
     {
      image:     "https://cdn-icons-png.flaticon.com/512/919/919826.png",
      percentage: 90,
    },
    {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO2RQclsx4UIIvhyDyQfK36xz90irtkAdctoTSzg1xaNx_-TQaWPMtdrNyOygzNaTi5A&usqp=CAU",
      percentage: 90, 
    },

     {
      image:"https://cdn-icons-png.flaticon.com/128/919/919825.png",
      percentage: 100,
    },
     {
      image:"https://cdn-icons-png.flaticon.com/128/5968/5968482.png",
      percentage: 90,
    },
    {
      image:"https://cdn-icons-png.flaticon.com/128/2/2197.png",
      percentage: 100,
    },

  ]);

  return (
    <div className="px-6 mt-20">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-5 text-center">
        Skills
      </h3>
     

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((item, idx) => (
          <Skill 
            key={idx} 
            image={item.image} 
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
