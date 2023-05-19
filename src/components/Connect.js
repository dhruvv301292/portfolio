import { useState, useRef } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from 'react-loaders'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from '@emailjs/browser'
import Snackbar from "@material-ui/core/Snackbar";

const EmailSnackBar = (props) => {
  return (
      <Snackbar
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        open={props.openSnackBar}
        autoHideDuration={5000}
        onClose={props.handleToClose}
        message={props.snackBarMessage}
      />
  );
}

const Connect = () => {
  const form = useRef()
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const snackBarMessage = useRef("Message sent successfully")
  
  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpenSnackBar(false);
  };

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_we697h5', 'template_fdvgm8h', form.current, 'v6BuePfiknhGvAJnt')
      .then(
        (result) => {          
          snackBarMessage.current = "Message sent successfully"
          setOpenSnackBar(true);
          form.current.reset();
        },
        (error) => {          
          snackBarMessage.current = "Error in sending message. Please try again"
          setOpenSnackBar(true);
          alert('Failed to send the message, please try again')          
        }
      )
  }

  return (
    <>
      <section className="banner">
            <Container className='divAnimLeftFadeIn'>
              <Row>
                <Col xs={12} md={6} xl={7}>    
                <h1>{`🤙 Let's Connect`}</h1>                
                    <p>
                      My interests and experiences lie at the intersection of Machine Learning and Full-Stack Engineering. 
                      I can work as an individual contributor and collaborate with customers to build end-to-end AI powered applications. 
                    </p>   
                    <p>Titles such as Machine Learning Software Engineer, Software Engineer, Forward Deployed Engineer, and Solution Engineer might be a good fit for my profile.</p>
                    <Form ref={form} onSubmit={sendEmail}>
                      <input type="hidden" id="to_name" name="to_name" value="Dhruv"/>
                      <Row className="mb-3 mt-4">
                        <Form.Group as={Col}>
                          <FloatingLabel style={{color: '#495057'}} label="Name">
                            <Form.Control type="text" placeholder="Name" name="from_name"/>
                          </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col}>
                          <FloatingLabel  style={{color: '#495057'}} label="Email">
                            <Form.Control type="email" placeholder="Enter email" name="from_email"/>
                          </FloatingLabel>                          
                        </Form.Group>
                      </Row>                    

                      <Form.Group className="mb-3">
                        <FloatingLabel  style={{color: '#495057'}} label="Subject">
                          <Form.Control type="text" placeholder="Subject" name="subject"/>
                        </FloatingLabel>  
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textArea" rows={6} name="message" placeholder="Leave me a message and I'll respond ASAP"/>
                      </Form.Group>

                      <Button variant="primary" className='mt-4' type="submit">
                        Send
                      </Button>
                    </Form>                                
                </Col>
              </Row>        
            </Container>
        </section>
      <Loader type="pacman" />
      <EmailSnackBar openSnackBar={openSnackBar} snackBarMessage={snackBarMessage.current} handleToClose={handleToClose} ></EmailSnackBar>
    </>
  )
}

export default Connect
