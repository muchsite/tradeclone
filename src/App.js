import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./global.scss";
import "animate.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Calc from "./pages/Calc/Calc";
import Blogs from "./pages/Blogs/Blogs";
import Cases from "./pages/Cases/Cases";
import Blog from "./pages/Blog/Blog";
import SingleCase from "./pages/SingleCase/SingleCase";
import Product from "./pages/product/Product";

export const BASE = "https://tradeflaircorp.in";
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Calc />} path="/calculator" />
        <Route element={<Blogs />} path="/blogs" />
        <Route element={<Blog />} path="/blog/:blogId" />
        <Route element={<Cases />} path="/cases" />
        <Route element={<SingleCase />} path="/case/:caseId" />
        <Route element={<Product />} path="/product" />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
