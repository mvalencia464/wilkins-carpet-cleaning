import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import BlogPost from './components/BlogPost';

// Home page component
const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <About />
    <Testimonials />
    <Contact />
  </main>
);

// Blog page component
const BlogPage = () => (
  <BlogPost />
);

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;