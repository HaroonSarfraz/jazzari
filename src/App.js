import React from 'react';

import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Services from './components/services';
import Testimonials from './components/testimonials';
import Statistics from './components/statistics';
import References from './components/statistics';
import Customers from './components/customers';
import ContactUs from './components/contactUs';
import Map from './components/map';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro/>
      <About />
      <Services />
      <Testimonials />
      <Statistics />
      <References />
      <Customers />
      <ContactUs/>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
