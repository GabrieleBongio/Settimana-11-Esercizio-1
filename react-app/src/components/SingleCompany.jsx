import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFavourites } from "../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SingleCompany = ({ company }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  const handleRemove = () => {
    dispatch(removeFavourites(company));
    setVisible(false);
  };

  return (
    <Row
      className={visible ? `mx-0 mt-3 p-3 justify-content-center align-items-center` : "d-none"}
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={10}>
        <Link to={`/${company}`}>{company}</Link>
      </Col>
      <Col xs={2}>
        <Button variant="danger" onClick={handleRemove}>
          Remove
        </Button>
      </Col>
    </Row>
  );
};

export default SingleCompany;
