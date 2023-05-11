import { useState } from "react";
import "./App.css";
import ContactUs from "./component/contactUs/ContactUs";
import { ContextAPi } from "./contextApi";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";

function App() {
  const [showContact, setShowContact] = useState(false);

  const dispatchContactReducer = (action) => {
    switch (action) {
      case "SHOW_CONTACT":
        setShowContact(true);
        break;

      case "HIDE_CONTACT":
        setShowContact(false);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <ContextAPi.Provider value={{ showContact, dispatchContactReducer }}>
        <Header />
        <About />
        <Services />
        <Products />
        <Footer />
        {showContact && <ContactUs />}
      </ContextAPi.Provider>
    </div>
  );
}

export default App;
