import React, { useContext, useEffect } from "react";
import { movieContext } from "../App";
import { imageUrl } from "../Url";
import "./detail.css";
import { Rating } from "@mui/material";

const Detailed_page = () => {
  const { movie, id, setshow } = useContext(movieContext);

  const selectedMovie = movie.filter((movieItem) => movieItem.id === id);
  console.log(selectedMovie);

  useEffect(() => {
    setshow(false);
    return () => {
      setshow(true);
    };
  }, [setshow]);

  // console.log(movie);
  // console.log(id);

  return (
    <div className="detailContainer row">
      <div className="detailContent col-lg-6 col-md-6 col-sm-6 col- ">
        <div style={{borderLeft:"6px solid red"}}>
          <h1 className="contenthead">
            {selectedMovie[0].title || selectedMovie[0].name}
          </h1>
          <p> {selectedMovie[0].overview}</p>
          <p>
            Release Date:
            {selectedMovie[0].release_date || selectedMovie[0].first_air_date}
          </p>
          <p>Language: {selectedMovie[0].original_language}</p>
          <Rating
            name="size-medium"
            defaultValue={selectedMovie[0].vote_average}
            className={selectedMovie[0].vote_average > 8 ? "text-success" : ""}
          />
        </div>
        <div className="watchbtn">
          <button>Watch Now</button>
        </div>
      </div>

      <div className=" col-lg-6 col-md-6 col-sm-6 col- ">
        <img
          src={imageUrl + selectedMovie[0].poster_path}
          alt=""
          className="detailImg"
        />
      </div>
    </div>
  );
};

export default Detailed_page;
