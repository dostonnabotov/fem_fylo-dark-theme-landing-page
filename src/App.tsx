import About from "./components/About";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import TestimonialsData from "./data/testimonials";
import FeaturesData from "./data/features";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features data={FeaturesData()} />
      <About />
      <Testimonials data={TestimonialsData()} />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
