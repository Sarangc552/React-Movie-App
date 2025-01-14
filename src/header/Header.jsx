import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import "./Header.css";
import { movieContext } from "../App";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const { movie, setmovie } = useContext(movieContext);
  const [search, setsearch] = useState([]);

  const movieinput = (e) => {
    setsearch(e.target.value);
  };
  const movieget = (i) => {
    i.preventDefault();
    console.log(search);

    const filteredProduct = movie.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setmovie(filteredProduct);
  };
  return (
    <div className="head">
      <Navbar className="nav p-4" bg="danger" data-bs-theme="dark">
        <Container>
          <BiCameraMovie className="icon" />
          <Navbar.Brand href="#home">MOVIE APP</Navbar.Brand>
          <Nav className="ms-auto">
            <div className="searchbar me-5">
              <form onSubmit={movieget}>
                <input
                  className="searchinput"
                  type="text"
                  placeholder="search"
                  onChange={movieinput}
                />
                <button type="submit" className="searchbtn bg-danger">
                  <FaSearch
                    style={{
                      marginLeft: "5px",
                      fontSize: "20px",
                      color: "white",
                    }}
                  />
                </button>
              </form>
            </div>
            <Nav.Link className="ms-5" href="#features">
              <Link
                to={"/latest"}
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Latest Movies
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-5" href="#pricing">
              <Link
                to={"/comedy"}
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Comedy Movies
              </Link>
            </Nav.Link>

            <Nav.Link className="ms-5" href="#home">
              <Link
                to={"/popular"}
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Popular Movies
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
