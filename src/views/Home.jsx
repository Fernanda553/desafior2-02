import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <p> El lugar de los pasteles felices </p>
      <h2>🎂</h2>
    </Container>
  );
};

export default Home;
