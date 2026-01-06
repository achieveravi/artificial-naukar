import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import WhatWeDo from './components/WhatWeDo';
import Industries from './components/Industries';
import Advantage from './components/Advantage';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyUs />
      <WhatWeDo />
      <Industries />
      <Advantage />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
