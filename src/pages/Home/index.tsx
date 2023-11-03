import { Link } from "react-router-dom";
import { Container } from "../../styles/style";

export default function Home() {
  return (
    <Container>
      <Link to="/gt-league">Gt League</Link><br />
      <Link to="/eadriact-league">Eadriact League</Link>
    </Container>
  );
}

