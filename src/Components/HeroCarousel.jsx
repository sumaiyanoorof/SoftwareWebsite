import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ImageWithFallback from '../figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from "react-router-dom";


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      title: "Software Development",
      description:
        "Custom software solutions that drive innovation and transform your business operations .",
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "Explore Services",
      link: "/software-development"
    },
    {
      title: "IT Consulting",
      description:
        "Expert guidance to optimize your IT infrastructure and accelerate digital transformation .",
      image:
        "https://images.unsplash.com/photo-1599453052061-5c377643e4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "Get Consultation",
      link: "/it-consulting"
    },
    {
      title: "Website Design",
      description:
        "Stunning, responsive websites that engage users and deliver exceptional performance .",
      image:
        "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "Explore Services",
      link: "/website-design"
    },
    {
      title: "Graphic Design",
      description:
        "Creative designs that capture attention and communicate your brand's unique identity .",
      image:
        "https://images.unsplash.com/photo-1663298173404-18a975da338b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "See Our Work",
      link: "/graphic-design"
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing campaigns that amplify your reach and maximize ROI .",
      image:
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      cta: "Explore Services",
      link: "/digital-marketing"
    },
    {
      title: "Networking",
      description:
        "Empowering your business with fast, secure, and uninterrupted networking—built for the digital age .",
      image: "https://i.postimg.cc/sgKsKS0B/server1280.jpg",
      cta: "Explore Services",
      link: "/networking"
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 25 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="relative h-[80vh] sm:h-[85vh] md:h-screen overflow-hidden">

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
         {/* Background Image with overlay */}  
           <div className="absolute inset-0"> 

            <ImageWithFallback 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title} 
            className="w-full h-full object-cover sm:mb-10 md:-mb-96 shadow-gradient from-gray-950" /> 
            <div
             className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/80 to-gray-950/60 opacity-90" /> 
             
             {/* Red Glow Effect */} 
             <div className="absolute inset-0 bg-gradient-to-tr from-red-400/30 via-transparent to-transparent" /> 
             </div>

          {/* TEXT CONTENT */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              
              <h1 className="text-3xl sm:mt-20 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight lg:mb-4 drop-shadow-xl">
                {slides[currentSlide].title}
              </h1>

              <p className="text-base xl:text-4xl sm:text-lg md:text-2xl text-gray-300 max-w-2xl mb-6">
                {slides[currentSlide].description}
              </p>
        
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={slides[currentSlide].link}>
                <Button className="bg-gradient-to-r from-red-800 to-red-600 hover:from-red-900 hover:to-red-700 text-white text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-5">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                </Link>

              </div>
            </div>
          </div>
          {/* Animated Particles */} 
          <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"> 
          {[...Array(20)].map((_, i) => ( 
            <motion.div 
            key={i} 
            className="absolute w-2 h-2 bg-red-600/30 rounded-full"
             initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight, 
              scale: Math.random() * 0.5 + 0.5, }} 
              animate={{ y: [null, Math.random() * window.innerHeight], 
              opacity: [0, 1, 0], }} 
              transition={{ duration: Math.random() * 5 + 5, 
              repeat: Infinity, ease: "linear", 
              }} 
              /> 
              ))} 
              </div> 
            
        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION ARROWS — RESPONSIVE FIX */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 z-20 pointer-events-none">

        <motion.button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-sm border border-red-600/40 text-white pointer-events-auto flex items-center justify-center hover:bg-red-900/40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-sm border border-red-600/40 text-white pointer-events-auto flex items-center justify-center hover:bg-red-900/40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
        </motion.button>

      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="flex justify-center gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 sm:w-14 bg-red-600"
                  : "w-6 sm:w-8 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */} 
      <motion.div 
      className="absolute bottom-8 left-8 z-20 hidden md:block" 
      animate={{ y: [0, 10, 0] }} 
      transition={{ duration: 2, repeat: Infinity }} > 
      <div 
      className="flex flex-col items-center gap-2 text-white/50"> 
      <span 
      className="text-sm rotate-90">Scroll
      </span> 
      <div 
      className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" /> 
      </div> 
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
