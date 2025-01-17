import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { movieContext } from "../App";
import "./Header.css";

const Header = () => {
  const { movie, setmovie } = useContext(movieContext);
  const [search, setsearch] = useState("");

  const movieinput = (e) => {
    setsearch(e.target.value);
  };

  const movieget = (e) => {
    e.preventDefault();
    const filteredProduct = movie.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setmovie(filteredProduct);
    setsearch(""); 
  };

  return (
    <Navbar className="nav p-3" bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <BiCameraMovie className="icon me-2" />
          MOVIE APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <div className="searchbar d-flex align-items-center me-4">
              <form onSubmit={movieget} className="d-flex">
                <input
                  className="searchinput form-control me-2"
                  type="text"
                  placeholder="Search for movies..."
                  onChange={movieinput}
                  value={search}
                  aria-label="Search Movies"
                />
                <button
                  type="submit"
                  className="searchbtn btn btn-outline-light"
                  aria-label="Search"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
            <Nav.Link as={Link} to="/latest" className="text-white">
              Latest Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/comedy" className="text-white">
              Comedy Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/popular" className="text-white">
              Popular Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
