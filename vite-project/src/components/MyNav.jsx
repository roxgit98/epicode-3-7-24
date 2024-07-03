import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const MyNav = () => (
  <Navbar expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" width="100px" height="55px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/" className="nav-link text-white fw-bold">
            Home
          </Link>
          <Link to="/tvshows" className="nav-link text-white fw-bold">
            TV Shows
          </Link>
          <Nav.Link href="#Movies" className="text-white fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#RecentlyAdded" className="text-white fw-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#MyList" className="text-white fw-bold">
            My List
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Search className="icons" />
          <div className="fw-bold" id="kids">
            KIDS
          </div>
          <Bell className="icons" />
          <PersonCircle className="icons" />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
