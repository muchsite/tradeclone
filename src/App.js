import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "animate.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </HashRouter>
  );
}

export default App;
