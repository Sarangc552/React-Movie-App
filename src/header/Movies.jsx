import React, { useContext, useEffect, useState } from "react";
import { imageUrl } from "../Url";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { movieContext } from "../App";
import Rating from "@mui/material/Rating";

const Movies = ({ api, name }) => {
  const { movie, setmovie, id, setid,show,setshow } = useContext(movieContext);

  // const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get(api).then((response) => setmovie(response.data.results));
  }, [api]);

  // useEffect(() => {
  //   setmovie(product);
  // }, [product, setmovie]);
  // console.log(movie);

  const getMovie_id = (i) => {
    setid(i);
  };
  console.log(id);

  const nav = useNavigate();
  const Enter = () => {
    nav("/detail");
  };

  return (
    <div className="row bg-dark p-5">
      <h1 className="heading">{name}</h1>
      {movie.map((test, index) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-">
            <Card
              className=" card text-light bg-danger"
              onClick={() => getMovie_id(test.id)}
            >
              <Card.Img
                variant="top"
                src={imageUrl + test.poster_path}
                height={"350px"}
              />
              <Card.Body style={{ height: "350px" }}>
                <Card.Title>
                  <h4>
                  {test.name}
                  {test.title}
                  </h4>
                </Card.Title>
                <Card.Text>Language:{test.original_language}</Card.Text>
                <Card.Text>
                  Release Date:{test.release_date}
                  {test.first_air_date}
                </Card.Text>
                <Card.Text>
                  <Rating name="size-medium" defaultValue={test.vote_average} className={test.vote_average>8?"text-success":""}/>
                </Card.Text>

                <div>
                  <Button
                    onClick={Enter}
                    variant="warning"
                    style={{ width: "180px"}}
                  >
                    VIEW
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
