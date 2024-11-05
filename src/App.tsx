import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Offer from './components/Offer';
import Projects from './components/Projects';
import Services from './components/Services';
import SecurityPartners from './components/SecurityPartners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Reviews />
        <Offer />
        <Projects />
        <Services />
        <SecurityPartners />
      </main>
      <Footer />
    </div>
  );
}