import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardDeck, Jumbotron } from "react-bootstrap";
import { GetCourse } from "../../actions/courseActions";
import { logout } from "../../actions/userActions";

const KursusSaya = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  useEffect(() => {
    if (token) {
      dispatch(GetCourse());
    } else {
      dispatch(logout());
      history.push("/login")
    }
  }, [dispatch, history, token])

  const courseData = useSelector((state) => state.courseData);
  const { courses } = courseData;

  return (
    <div>
      <Jumbotron className="px-4 py-4">
        <CardDeck>
          {courses.map((product) => (
            <React.Fragment>
              <Card key={product._id}>
                <Card.Body>
                  <Card.Title>{product.NamaKursus}</Card.Title>
                  <Card.Text>{product.IDTopik}</Card.Text>
                  <Card.Text>{product.PencapaianKursus}</Card.Text>
                  <Card.Text>{product.FiturKursus}</Card.Text>
                </Card.Body>
                <Card.Footer>{product.HargaKursus}</Card.Footer>
              </Card>
            </React.Fragment>
          ))}
        </CardDeck>
      </Jumbotron>
    </div>
  );
}

export default KursusSaya;