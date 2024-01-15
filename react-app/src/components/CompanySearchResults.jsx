import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourites, removeFavourites } from "../actions";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const [isInFavourites, setIsInFavourites] = useState(false);
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    if (favourites.includes(params.company)) {
      setIsInFavourites(true);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = () => {
    dispatch(removeFavourites(params.company));
    setIsInFavourites(false);
  };

  const handleAdd = () => {
    dispatch(addFavourites(params.company));
    setIsInFavourites(true);
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {isInFavourites ? (
            <Button variant="outline-success" className="m-4" onClick={handleRemove}>
              Remove from favourites
            </Button>
          ) : (
            <Button variant="success" className="m-4" onClick={handleAdd}>
              Add to favourites
            </Button>
          )}
          <Link
            to="/favourites"
            className="btn btn-outline-info
          "
          >
            Favourites
          </Link>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      <div className="mt-5 text-end pt-5">
        <Link to={"/"} className="mt-5 btn btn-outline-info">
          Return to Home
        </Link>
      </div>
    </Container>
  );
};

export default CompanySearchResults;
