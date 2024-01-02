import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "animate.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
