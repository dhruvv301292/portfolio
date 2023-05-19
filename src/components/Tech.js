import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Row, Col } from "react-bootstrap";

const Tech = () => {
  return (
    <>
      <Row>
        <h2 className="divAnimLeftFadeIn">Skills & Frameworks</h2>
      </Row>
      <Row>
        {technologies.map((technology) => (
          <Col xs={1} md={2} xl={1} key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </Col>
        ))}
      </Row>         
    </>
  );
};

export default SectionWrapper(Tech, "");
