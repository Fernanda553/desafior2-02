import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Happy Cake</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/contacto"></Link>
        </Container>
      </Navbar>
    </>
  );
};
export default Nav;
