import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Card from 'react-bootstrap/Card';
import Tech from './Tech';
import { Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
  index,
  name,
  fit,
  description,
  tags,
  image,
  source_code_link,
  youtube_link,
  publication_link
}) => {
  return (    
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <Card style={{ width: '90%', height: '50vh', margin: '2% 2% 3% 2%' }}>
            <Card.Img variant="top" style={{objectFit: fit, overflow: 'hidden'}} onClick={() => window.open(source_code_link, "_blank")} src={image} />
            <Card.Body>
                <Card.Title style={{color: 'black'}}>{name}</Card.Title>
                <Card.Text style={{color: 'black'}}>
                    {description}
                </Card.Text>                
            </Card.Body>
            <Card.Footer>
            {tags.map((tag) => (
                <p style={{display: "inline", margin: '0'}} className={tag.color} key={`${name}-${tag.name}`}>#{tag.name} </p>
            ))}            
            <a href={source_code_link} target="_blank"><FontAwesomeIcon icon={faGithubAlt} title="Code Repo" size="2xl" style={{color: "#1a1c1e", float: 'right'}} /></a>
            {youtube_link != null ? <a href={youtube_link} target="_blank"><FontAwesomeIcon icon={faYoutube} title="Video Presentation" size="2xl" style={{color: "#1a1c1e", float: 'right', marginRight: '10'}} /></a> : null}
            {publication_link!= null ? <a href={publication_link} target="_blank"><FontAwesomeIcon icon={faBook} title="Publication" size="2xl" style={{color: "#1a1c1e", float: 'right', marginRight: '10'}} /></a> : null}
            </Card.Footer>
        </Card>        
      </Tilt>
  );
};

const Projects = () => {
  return (
    <section className="page-container">
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

      <Row className='flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </Row>
      </Container>
    </section>
  );
};

export default SectionWrapper(Projects, "");