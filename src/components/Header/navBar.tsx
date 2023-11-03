import { Link } from "react-router-dom";
import { Container } from "../../styles/style";

import { 
  Nav
 } from "./style";

export default function Navbar() {
  return (
      <Nav>
        <Container>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
        </Container>
      </Nav>
  );
}
