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
import TensorFlow from "../assets/img/TensorFlow.png";
import Cassandra from "../assets/img/Cassandra.png";
import MyTorch from "../assets/img/MyTorch.jpg";
import trajPred from "../assets/img/trajPred.png";
import weconnect4 from "../assets/img/weconnect4.png";
import faultTol from "../assets/img/faultTol.png";
import placementSolver from '../assets/img/placementSolver.png'
import restGraph from '../assets/img/restGraph.png'

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
    name: "MyTorch - An Object-Oriented Deep Learning Library",
    description:
      "An object-oriented auto-differentiator API emulating PyTorch’s Autograd that computes complex function derivatives by encoding them as directed graphs. Used this API to implement configurable MLPs, CNNs, LSTMs and GRUs",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "cortex",
        color: "pink-text-gradient",
      }
    ],
    image: MyTorch,
    source_code_link: "https://github.com/dhruvv301292/DAG-based-automatic-differentiator-for-deep-learning",
    fit: 'cover'
  },
  {
    name: "Segmentation-assisted Trajectory Prediction",
    description:
      "A trajectory prediction architecture that ingests information pertaining to the past trajectory, social interactions and environmental interactions of a person and predicts their coordinates for the next 12 times steps.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "deepLearning",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "black-text-gradient",
      }
    ],
    image: trajPred,
    source_code_link: "https://github.com/dhruvv301292/Trajectory-Forecasting-using-Segmentation-and-Attention",
    youtube_link: "https://www.youtube.com/watch?v=bt2_xwNjiYI",
    fit: 'none'
  },
  {
    name: "Fault tolerant E-book distributed library",
    description:
      "A Flask based fault-tolerant distributed asynchronous system, with heartbeats, distributed consensus, total ordering, checkpointing, and logging to provide strong consistency for a replicated (hot-swap and primary-backup) application.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "restAPI",
        color: "pink-text-gradient",
      },
      {
        name: "http",
        color: "black-text-gradient",
      },
      {
        name: "sql",
        color: "orange-text-gradient"
      }
    ],
    image: faultTol,
    source_code_link: "https://github.com/dhruvv301292/Distributed-Library",
    fit: 'contain'
  },
  {
    name: "End-to-end Speech Recognition Model",
    description:
      "An Attention-based Speech-to-Text Deep Encoder-Decoder Neural Network using pyramidal Bi-LSTMs that was able to produce text with a mean Levenshtein Distance of 18.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "pyserve",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "black-text-gradient",
      },
    ],
    image: MyTorch,
    source_code_link: "https://github.com/dhruvv301292/SpeechRecModel",
    fit: 'cover'
  },
  {
    name: "Deep Reinforcement Learning based Placement solver",
    description:
      "A Deep Reinforcement Learning based approach for solving the NP-hard PCB placement problem for Cadence and DARPA’s Intelligent Design of Electronic Assets initiative.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "black-text-gradient",
      },
    ],
    image: placementSolver,
    source_code_link: "https://github.com/dhruvv301292/Reinforcement-Learning-Placement-Solver",
    publication_link: "https://ml4eng.github.io/camera_readys/36.pdf",
    fit: 'contain'
  },
  {
    name: "WeConnect4",
    description:
      "A multi-client connect-4 game developed using web sockets and the MVC architecture on the django framework",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "websockets",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "black-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      }
    ],
    image: weconnect4,
    source_code_link: "https://github.com/dhruvv301292/connect4Django",
    fit: 'cover'
  },
  {
    name: "RestApi vs GraphQL",
    description:
      "A simple MERN stack based application displaying the pros and cons of using graphql and restAPIs",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "black-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "blue-text-gradient",
      }
    ],
    image: restGraph,
    source_code_link: "https://github.com/dhruvv301292/restApi",
    fit: 'contain'
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
