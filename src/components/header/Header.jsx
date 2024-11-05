import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Toys from '../Toys';


function Header() {
  const Navigate = useNavigate();
  const navLinStyles = ({ isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      color: 'black',
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      {/* Navbar.Brand is included, linking to "#", with the text "New Borns". */}
      {/* Navbar.Toggle component is used for toggling the visibility of the navigation links on smaller screens. */}
        <Navbar.Brand href="">
       
          <NavLink style={navLinStyles} className="m-2" to='home'>New Borns</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* Navbar.Collapse component contains the collapsible navigation content. */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            // navbarScroll
          >
            <NavLink  style={navLinStyles} className="m-2" to="home/girlsFashion">Girls Fashion</NavLink>
            {/* <Nav.Link>Girls Fashion</Nav.Link> */}
            <NavLink  style={navLinStyles} className="m-2" to="home/boysFashion">Boys Fashion</NavLink>
            <NavLink  style={navLinStyles} className="m-2" to="home/Toys">Toys</NavLink>
            <NavLink  style={navLinStyles} className="m-2" to="home/about">About</NavLink>


            <NavDropdown title="Toys" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#3">  Kids Games</NavDropdown.Item>
              <NavDropdown.Item href="#4">
              Kids Gadgets
              </NavDropdown.Item>
              <NavDropdown.Item href="#5">
              <NavLink  style={navLinStyles} className="m-2" to="home/Toys?category=SoftToys"> Soft Toys</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Login />
          {/* <Button onClick = { () => Navigate('home/login')} className="m-2" variant="outline-dark" > */}
        {/* Login */}
      {/* </Button> */}
      {/* <Toys /> */}
          <Register />
          <Cart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;