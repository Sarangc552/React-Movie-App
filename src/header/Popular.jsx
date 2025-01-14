import axios from "axios";
import React, { useEffect, useState } from "react";
import { imageUrl, popularMovies } from "../Url";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Popular = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get(popularMovies).then((res) => setproduct(res.data.results));
  }, []);
  console.log(product);

  return (
    <div className="row m-5">
      <h1 className="text-center fw-bold">Popular Movies</h1>
      {product.map((test, index) => {
        return (
          <Card style={{ width: "20rem", margin: "10px", padding: "10px" }}>
            <Card.Img variant="top" src={imageUrl + test.poster_path} />
            <Card.Body className="text-center">
              <Card.Title>{test.title}</Card.Title>
              <Card.Text>Language:{test.original_language}</Card.Text>
              <Card.Text>Release date:{test.release_date}</Card.Text>
              <Card.Text>{test.overview}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Popular;
