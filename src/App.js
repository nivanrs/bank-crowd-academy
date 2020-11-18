import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <Register />
          </Col>
          <Col>
            <Login />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
