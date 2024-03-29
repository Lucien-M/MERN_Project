import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Note App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/notes">
              <Link to="/mynotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="Lucien" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  navigate("/");
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
