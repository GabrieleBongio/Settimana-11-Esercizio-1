import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleCompany from "./SingleCompany";
import { Link } from "react-router-dom";

const FavouritesCompany = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favourites Company:</h1>
          {favourites.length === 0 ? (
            <p className="fs-5 fw-lighter">
              You don't have favourites companyes, press the button "Add to favourites" on a company page to add it on
              this page
            </p>
          ) : (
            favourites.map((company) => <SingleCompany key={company} company={company}></SingleCompany>)
          )}
        </Col>
      </Row>
      <div className="mt-5 text-end">
        <Link to={"/"} className="mt-5 btn btn-outline-info">
          Return to Home
        </Link>
      </div>
    </Container>
  );
};

export default FavouritesCompany;
