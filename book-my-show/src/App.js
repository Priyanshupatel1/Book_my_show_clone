import "./App.css";

//page
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

//Routes
import { Routes, Route } from "react-router-dom";
import axios from "axios";


//React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//api_key=053590f079d358ef9c59fe5093c3d20d

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"] = "053590f079d358ef9c59fe5093c3d20d";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
