import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Portafolio from './Components/Portafolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Modal from './Components/Modal';


function App() {

  return (
    <div className="App">

      <Navbar />

      <Header />

      <Portafolio />

      <About />

      <Contact />

      <Footer />

      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright © Your Website 2020</small></div>
      </div>

      <div className="scroll-to-top d-lg-none position-fixed">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
      </div>

      <Modal />

    </div>
  );
}

export default App;
