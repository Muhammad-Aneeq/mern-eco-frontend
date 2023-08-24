import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Categories from "./components/categories";
import Products from "./components/products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getAllCategories } from "./helpers/query";

function App() {
  getAllCategories();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
