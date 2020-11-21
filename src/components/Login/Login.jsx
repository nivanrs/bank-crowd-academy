import React from "react";
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
//import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
//import Swal from "sweetalert2";
//import withReactContent from "sweetalert2-react-content";
import { login } from "../../actions/userActions";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.dispatch(login(user));
    this.props.history.push('/course')
  }

  render() {
    return (
      <Container style={{display: 'flex', justifyContent: 'center'}}>
        <Card className="my-4" border="info" style={{ width: '30rem' }}>
          <Card.Header className="text-center" style={{background: "#3498DB", color: "#FFFFFF"}}>Masuk</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Masukkan Email" name="email" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password" name="password" onChange={this.handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Masuk
              </Button>
            </Form>
            <p>Belum Memiliki akun? <a href='/register'>Daftar</a></p>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userLogin: state.user.account
  }
}

export default connect(mapStateToProps)(withRouter(Login));