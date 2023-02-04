import './App.css';
import About from './pages/about/About';
import Header from './pages/header/Header';
import Products from './pages/products/Products';
import Services from './pages/services/Services';

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Services />
     <Products />
    </div>
  );
}

export default App;
