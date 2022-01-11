import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import MyContent from "./MyContent";
import MyNav from "./MyNav";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="6">
            <MyNav></MyNav>
            <MyContent></MyContent>
          </Col>
        </Row>{" "}
      </Container>
    </div>
  );
}

export default App;
