import Header from "../components/Header";
import FloatingSocial from "../components/FloatingSocial";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Categories from "../components/Categories";
import WeAre from "../components/WeAre";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingSocial />
      <Hero />
      <Journey />
      <Categories />
      <WeAre />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}