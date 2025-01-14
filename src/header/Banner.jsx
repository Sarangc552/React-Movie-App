import axios from "axios";
import React, { useEffect, useState } from "react";
import { comedyMovies, imageUrl } from "../Url";
import "./Banner.css";

const Banner = () => {
 
  const [obj, setobj] = useState([]);
  const [first, setfirst] = useState([]);
  useEffect(() => {
    axios.get(comedyMovies).then((res) => {
      const movies = res.data.results;
      setobj(movies);

      // Select a random movie after the data is fetched
      const randomIndex = Math.floor(Math.random() * movies.length);
      setfirst(movies[randomIndex]);
    });
  }, []);
  // console.log(obj);

  // console.log(first);

  return (
    <div className="bg-light">
      <div
        className="text-center p-5"
        style={{
          backgroundImage: `url(${imageUrl + first?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          backgroundRepeat:"no-repeat"
        }}
      >
        <div className="banner">
          <h3>Movie Name: {first?.name}</h3>
          <h3>Country: {first?.origin_country}</h3>
          <h3>Release Date: {first?.first_air_date}</h3>
          <h5>{first?.overview}</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
