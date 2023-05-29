import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Row, Col, Container } from "react-bootstrap";

const Tech = () => {
  return (
    <>
    <Container>
      <Row>
        <h2 className="divAnimLeftFadeIn">Skills & Frameworks</h2>
      </Row>
      <Row>
        {technologies.map((technology) => (
          <Col xs={4} md={2} xl={1} key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </Col>
        ))}
      </Row>
    </Container>       
    </>
  );
};

export default SectionWrapper(Tech, "");
