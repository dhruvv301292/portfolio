import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import github from "../assets/img/github.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Card from 'react-bootstrap/Card';
import Tech from './Tech';
import { Row, Col, Container } from "react-bootstrap";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (    
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <Card style={{ width: '90%', height: '50vh', margin: '2% 2% 3% 2%' }}>
            <Card.Img variant="top" style={{ width: '100%', height: '30vh'}} onClick={() => window.open(source_code_link, "_blank")} src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>                
            </Card.Body>
        </Card>        
      </Tilt>
  );
};

const Projects = () => {
  return (
    <section className="banner">
        <Container>
        <Tech/>
        <Row>
            <h1>Projects</h1>
            <p>
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.        
            </p>
        </Row> 

      <div className='flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      </Container>
    </section>
  );
};

export default SectionWrapper(Projects, "");