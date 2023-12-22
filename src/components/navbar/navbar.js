import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../sidenav/sidenav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {  useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";



function ExploreNavbar(props) {

    const [isClosed, setisClosed] = useState(false);

    const toggleSide = () => {
      setisClosed(!isClosed);
      
    }

    return ( 
      <>
      <Navbar expand="lg" className={props.isDark ? "bg-white fixed-top flex-row dark" : "bg-white fixed-top flex-row light" }>
      <Container fluid >
        <Navbar.Brand  href="#"><img src={require("../../assets/navbar/logo.png")} style={{width: 100 }} alt="logo"/></Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Item className="text-link">
            <Nav.Link href="#text">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">Explore</span>
              </Nav.Link>
            </Nav.Item>
            <NavDropdown 
              className="db-dropdown d-none d-sm-none d-md-none d-lg-block d-xl-block"
              title="Dashboard" 
              id="db-dropdown" 
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="#text">
              <img alt="" src={require("../../assets/navbar/userDashBoard.png")}/> 
              User Dashboard</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="text-link">
            <Nav.Link href="#text">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">My Challenges</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-link">
            <Nav.Link href="#text">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">My Labs</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-link">
            <Nav.Link  href="#text">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">My Projects</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-link">
            <Nav.Link href="#text">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">Career Explorer</span>
              </Nav.Link>
            </Nav.Item>

            <div className="right-nav">
            <Nav.Item className="nav-icon">
            <Nav.Link href="#icon">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <img alt="" src="https://preprlabs.org/assets/images/header/bell-icon.svg"/> 
              </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-icon">
            <Nav.Link href="#icon">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <img alt="" src="https://preprlabs.org/assets/images/header/inbox-icon.svg"/> 
              </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-icon">
            <Nav.Link href="#icon">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <img alt="" src="https://preprlabs.org/assets/images/header/help-icon.svg"/> 
              </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="searchbar">
            <Form.Control
              placeholder="Search..."
            />
            </Nav.Item>

            <Nav.Item className="profile">
            <Nav.Link href="#profile">
              <span className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
              <img className="profile-image" alt="" src={require("../../assets/navbar/default-user.png")}/> 
              </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>

            <Nav.Item className="sidebar-button">
            <Nav.Link href="#" onClick={toggleSide}>
            <span 
              className = "d-block d-sm-block d-md-block d-lg-none d-xl-none"
              >
              { isClosed ?  <img alt="" src="https://preprlabs.org/assets/images/header/trigram.svg"/> 
                  :  <img alt="" src="https://preprlabs.org/assets/images/header/cross.svg"/> 
              }
              </span>
              </Nav.Link>

            </Nav.Item>

              <NavDropdown
                className="app-menu"
                id="app-menu"
                title={
                  <img alt="" src="https://preprlabs.org/assets/images/header/app-icon.svg"></img>
                } 
                renderMenuOnMount={true}
              >
                <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/lab-icon.svg"/>
                  Labs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/lab-program-icon.svg"/>
                  Lab Programs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/project-icon.svg"/>
                  Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/challenge-icon.svg"/>
                  Challenges
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/challenge-path-icon.svg"/>
                  Challenge Paths
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/assessment-icon.svg"/>
                  Assessments
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/resource-module-icon.svg"/>
                  Resources
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/skill-icon.svg"/>
                  Career Explorer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/achievement-icon.svg"/>
                  Achievements
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/organization-icon.svg"/>
                  Organizations
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/team-matching-icon.svg"/>
                  Team Matching
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#text">
                  <img alt="" src="https://preprlabs.org/assets/images/header/leaderboard-icon.svg"/>
                  Leaderboard
                  </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            </div>
          </Nav>
      </Container>
    </Navbar>
    <Sidebar isDark={props.isDark} toggleClosed = {isClosed} ></Sidebar>
    

    </>
    );
}

export default ExploreNavbar;