import icon from "./icon.png";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Banner from "./component/Jumbotron/Jumbotron";
import KursusPilihan from "./component/KursusSaya/KursuSaya";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Container>
      <KursusPilihan/>
      <br />
        <Row>
          <Col>
            <Register />
          </Col>
          <Col>
            <Login />
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  );
}

export default App;
