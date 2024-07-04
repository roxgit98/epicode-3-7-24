import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Galleria from "./components/Galleria";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Home />
      <Routes>
        <Route path="/" element={<Galleria />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movie-details/:movieID" element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
