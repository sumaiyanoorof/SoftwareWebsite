import React from 'react';
import SEO from '../Components/SEO';
import HeroCarousel from '../Components/HeroCarousel';
import About from '../Components/About';
import Services from '../Section/Services';
import Goals from '../Section/Goals';
import Module from '../Section/Module';
import ClientsSection from '../Components/ClientSection';
import Contact from '../Section/Contact';
import Image from '../Section/Image';
import Footer from '../Section/Footer';
import WhatsAppChatbot from '../Components/whatsappChatbot';

const Homepage = () => {
  return (
    <div id="home">
      <SEO
        title="LoginXol | Digital Agency for Design, Development & Marketing"
        description="LoginXol delivers responsive websites, software solutions, digital marketing, IT consulting, and professional design services that grow brands online."
        canonical="https://loginxol.com/"
        keywords="LoginXol, digital agency, web development, digital marketing, graphic design, IT consulting, networking"
      />
      <HeroCarousel />
      <About />
      <Services />
      <Goals />
      <Module />
      <ClientsSection />
      <Contact />
      <Image />
      <WhatsAppChatbot />
      <Footer />
    </div>
  )
}

export default Homepage;
