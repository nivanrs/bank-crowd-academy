
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Banner from "./component/Jumbotron/Jumbotron";
import KursusPilihan from "./component/KursusPilihan/KursuPilihan";
import { Row, Col, Container } from "react-bootstrap";
import CoursePage from "./component/CoursePage/CoursePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Container>
      <h2 style={{textAlign:"left"}} >Kursus Pilihan</h2>
        <br/>
      <KursusPilihan/>
      <br />
      <hr />
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
