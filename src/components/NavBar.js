import { useEffect, useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/nameLogo.png'
import logoImg from '../assets/img/dhruvLogo.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Banner from './Banner';
import Experience from './Experience';
import Tech from './Tech';
import Connect from './Connect';
import Projects from './Projects';
import TicTacToe from './TicTacToe';

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const logoImgRef = useRef();
    const logoTextRef = useRef();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (linkName) => {
        if (linkName === 'home') {
            if (activeLink !== 'home') {
                logoImgRef.current.className = 'logoImgFadeOut'
                logoTextRef.current.className = 'logoTextMoveLeft'
            }            
        } else {
            if (activeLink === 'home') {
                logoImgRef.current.className = 'logoImgFadeIn'
                logoTextRef.current.className = 'logoTextMoveRight'
            }
        }
        setActiveLink(linkName);

    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand as={Link} to="/" onClick={() => onUpdateActiveLink('home')}>
                        <img src={logoImg} ref={logoImgRef} className='logoImgFirstLoad' alt='nameLogo'/>
                        <img src={logo} ref={logoTextRef} className='logoTextFirstLoad' alt='imageLogo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{position: "absolute", right: "10px"}}>
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className='collapser'>
                        <Nav className="nav-margin me-auto">
                            <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'navbar-link active' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>                    
                            <Nav.Link as={Link} to="/experience" className={activeLink === 'experience' ? 'navbar-link active' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                            <Nav.Link as={Link} to="/projects"  className={activeLink === 'projects' ? 'navbar-link active' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>                    
                    </Navbar.Collapse>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/dhruv-vashisht-615567124/"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/dhruvv301292"><img src={navIcon2} alt="GitHub" /></a>
                        </div>
                        <Link className='navbar-connect' to='/connect'>
                            <button onClick={() => onUpdateActiveLink('')}><span>Let’s Connect</span></button>
                        </Link>
                    </span>
                </Container>
            </Navbar>
            <Routes>
                <Route exact path='/' element={<Banner />} />
                <Route exact path='/experience' element={<Experience />} />
                <Route exact path='/tech' element={<Tech />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/connect' element={<Connect />} />
                <Route path='*' element={<TicTacToe/>} />
            </Routes>
        </Router>
      );
}
