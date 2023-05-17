import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    const bgColor = experience.type === "Job" ? "#232631" : "#510400"
    const arrowStyle = experience.type === "Job" ? "7px solid  #232631" : "7px solid  #510400"
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: bgColor,
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: arrowStyle }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='d-flex flex-wrap align-items-center h-100'>
          <img
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className='font-bold'>{experience.title}</h3>
        <p
          className='text-gray'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}            
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="experience">
      <motion.div variants={textVariant()}>
        <h1 className={`text-center`}>
          Experience & Education
        </h1>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
