import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Navbar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <Newsletter />
      <MyFooter />
    </>
  );
}

export default App;
