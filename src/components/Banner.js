import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import dev from '../assets/img/dhruv-circle1.png'
import resumeDoc from '../assets/docs/Resume.pdf';
import { Link } from "react-router-dom";


export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "AI Engineer", "Full-Stack Developer", "Logo Designer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "divAnimLeftFadeIn" : ""}>                    
                        <h1>{`🙏 Namaste! I'm Dhruv,`}</h1>
                        <h1><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                        <p>I am currently working as a Software Engineer at C3 AI. In this role, I lead a team of 8 developers working directly with customers to design and build end-to-end Enterprise AI applications. I have experience in working with large codebases and full-stack Javascript frameworks. I am also a Deep Learning enthusiast and well-versed with deploying complex models using Python and PyTorch.</p>
                        <a href={resumeDoc} style={{textDecoration: "None"}} download="Resume_Dhruv_Vashisht"><button className="btn btn-primary" style={{display: "inline-block", marginRight: "3%", marginTop: "0", borderRadius: "20px"}}>Resume</button></a>
                        <Link to='/connect'>
                          <button style={{display: "inline-block"}}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </Link>                        
                    </div>}
                    </TrackVisibility>                 
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img className="dev"
                    src={dev}
                    alt={'dev'}
                />
                </Col>
                </Row>                
            </Container>            
            
        </section>
    )
}
