
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Banner from "./component/Jumbotron/Jumbotron";
import KursusPilihan from "./component/KursusPilihan/KursuPilihan";
import {Container } from "react-bootstrap";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CoursePage from "./screen/CoursePage/CoursePage";
import ClassPage from "./screen/ClassPage/ClassPage";

export default function App() {
  return (
    <Router>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/article">
          </Route>
          <Route path="/course">
            <CoursePage/>
          </Route>
          <Route path="/class">
            <ClassPage/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        <br />
    </Router>
  );
}

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Container>
      <h2 style={{textAlign:"left"}} >Kursus Pilihan</h2>
        <br/>
      <KursusPilihan/>
      <br />
      <hr />
      </Container>
    </div>
  );
}
