import './App.css';
import Header from './compotents/header/Header'
import Hero from "./compotents/hero/Hero";
import Hwy from "./compotents/why/Hwy";
import AboutUs from "./compotents/about/AboutUs";
import Chefs from "./compotents/chefs/Chefs";
import Dishes from "./compotents/dishes/Dishes";

function App() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Hwy/>
        <AboutUs/>
        <Chefs/>
        <Dishes/>
    </div>
  );
}

export default App;
