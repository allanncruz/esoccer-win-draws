import { Container } from "../../styles/style";
import { 
  Link,
  Nav
 } from "./style";

export default function Navbar() {
  return (
      <Nav>
        <Container>
          <Link href="/">Home</Link>
          <Link href="/about">Sobre</Link>
        </Container>
      </Nav>
  );
}
