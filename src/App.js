import React, { createContext, useState } from "react";
import Header from "./header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./header/Movies";
import { comedyMovies, latestMovies, popularMovies } from "./Url";
import Banner from "./header/Banner";
import Detailed_page from "./header/Detailed_page";

const movieContext = createContext();

const App = () => {
  const [movie, setmovie] = useState([]);
  const [id, setid] = useState([]);
  const [show, setshow] = useState(true);

  return (
    <div>
      <movieContext.Provider
        value={{ movie, setmovie, id, setid, show, setshow }}
      >
        <BrowserRouter>
          {show === true && <Header />}
          {show === true && <Banner />}

          <Routes>
            <Route
              path="/comedy"
              element={<Movies api={comedyMovies} name={"Comedy Movies"} />}
            />
            <Route
              path="/popular"
              element={<Movies api={popularMovies} name={"Popular Movies"} />}
            />
            <Route
              path="/latest"
              element={<Movies api={latestMovies} name={"Latest Movies"} />}
            />
            <Route path="/detail" element={<Detailed_page />} />
          </Routes>
        </BrowserRouter>
      </movieContext.Provider>
    </div>
  );
};

export default App;
export { movieContext };
