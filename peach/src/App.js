// import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

// import Carousel from "./Components/Carousel/Carousel";
import LandingPage from "./Pages/LandingPage/Landing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
