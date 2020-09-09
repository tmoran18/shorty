import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero';
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Banner from './components/Banner/Banner'

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Navbar />
      <section id="hero">
      <Hero />
      </section>
      <section id="inputs">
        <div className="container input_container" >
        input
      </div>
      </section>
      <section id="cards"><div className="container" >Card</div></section>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
