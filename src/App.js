import Home from "./pages/Home";
import About from "./pages/About";
import Beta from "./pages/Beta";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Search from "./pages/Search";

import Test from "./pages/Test";
import Panic from "./pages/Panic";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/beta" element={<Beta />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/search" element={<Search />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Panic />} />
      </Routes>
      <Footer />
    </Router>
  </div>;
}

export default App;
