import "./App.css";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
