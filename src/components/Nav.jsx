import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Navbar className="bg-danger">
        <Container>
          <Navbar.Collapse className="justify-content-start">
            <Link to="/" className="text-white p-2 text-decoration-none">
              🏠 Home
            </Link>
            <Link
              to="/contacto"
              className="text-white p-2 text-decoration-none"
            >
              📒 Contacto
            </Link>
          </Navbar.Collapse>
          <Navbar.Brand className="text-white">Happy Cake 🍰</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Nav;
