import c3aiIcon from '../assets/img/c3ai.svg';
import cmuIcon from '../assets/img/cmu.svg';
import deloitteIcon from '../assets/img/deloitte.png';
import vitIcon from '../assets/img/vit.png';
import iiitLogo from '../assets/img/iiitbLogo.png';
import docker from "../assets/img/docker.png";
import git from "../assets/img/git.png";
import javascript from "../assets/img/javascript.png";
import mongodb from "../assets/img/mongodb.png";
import nodejs from "../assets/img/nodejs.png";
import reactjs from "../assets/img/reactjs.png";
import redux from "../assets/img/redux.png";
import typescript from "../assets/img/typescript.png";
import PostgreSQL from "../assets/img/postgreSQL.png";
import rxJS from "../assets/img/rxJS.png";
import TensorFlow from "../assets/img/TensorFlow.png"
import Cassandra from "../assets/img/Cassandra.png"


const experiences = [
  {
    title: "AI Solution Engineer",
    type: "Job",
    company_name: "C3 AI",
    icon: c3aiIcon,
    iconBg: "#fff",
    date: "July 2021 - Present",
    points: [
      "Project lead working directly with customers to build and deploy AI applications for the manufacturing and energy industries.", 
      "Led a team of 8 developers to build ML powered dashboards for Petro-Sim – an application that simulates hydrocarbon processes.",
      "Developed a monitoring library to detect data ingestion anomalies, reducing debugging effort from hours to a few minutes.",
      "Reduced technical debt through unit testing with ~75% code coverage, and more than a 100 peer code reviews.",
      "Developed timeseries-based metrics from ML model inferences to enable engineers make 12x faster calibration decisions.",
      "Used React, Redux and rxjs to develop dynamic, data-driven user interfaces to display timeseries-based analytics and metrics.",
      "Designed data models, database schemas, & ETL pipelines for daily ingestion and processing from sources like AWS & external APIs • Onboarded 5 developers on the project, conducting daily office hours to train them on the C3 framework.",
      "Wrote map-reduce jobs that ran daily and autonomously to pre-process incoming data before it was fed to the ML model."
    ],
  },
  {
    title: "Research Assistant",
    type: "Job",
    company_name: "Carnegie Mellon University",
    icon: cmuIcon,
    iconBg: "#fff",
    date: "Jan 2020 - Dec 2020",
    points: [
      "Led the VLSI placement project, developing a Deep Reinforcement Learning based approach for solving the NP-hard PCB placement problem for Cadence and DARPA’s Intelligent Design of Electronic Assets initiative.",
      "The work has been accepted and published by ML4Eng at NeurIPS 2020"
    ],
  },
  {
    title: "Master of Science",
    type: "Education",
    company_name: "Carnegie Mellon University",
    icon: cmuIcon,
    iconBg: "#fff",
    date: "Jan 2020 - May 2021",
    points: ["Electrical and Computer Engineering"]
  },
  {
    title: "PG Diploma",
    type: "Education",
    company_name: "IIIT Bangalore",
    icon: iiitLogo,
    iconBg: "#fff",
    date: "Jan 2018 - Dec 2018",
    points: ["Data Science and Machine Learning"]
  },
  {
    title: "Software Engineer",
    type: "Job",
    company_name: "Deloitte",
    icon: deloitteIcon,
    iconBg: "#fff",
    date: "Aug 2016 - Nov 2019",
    points: [
      "Led client engagements to design, develop and test production level code for 3 insurance products using C#/.NET framework.",
      "Devised a large-scale mapping tool for SmartClaims module based on Adaboost and Decision Trees, dramatically bringing down developer effort from 10 hours to 15 minutes for previously seen code-fixes.", 
      "Promoted to Consultant and received 9 performance awards."
    ],
  },
  {
    title: "Bachelor of Technology",
    type: "Education",
    company_name: "VIT University",
    icon: vitIcon,
    iconBg: "#fff",
    date: "Aug 2012 - May 2016",
    points: ["Electrical and Computer Engineering"]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: c3aiIcon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: c3aiIcon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: c3aiIcon,
    source_code_link: "https://github.com/",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "rxJS",
    icon: rxJS,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "TensorFlow",
    icon: TensorFlow
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL
  },
  {
    name: "Cassandra",
    icon: Cassandra
  },
  {
    name: "MongoDB",
    icon: mongodb,
  }
];

export { experiences, testimonials, projects, technologies };
