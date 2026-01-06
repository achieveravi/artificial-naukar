import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Customers Deserve 24/7 Support.
          <br />
          <span className="text-cyan-300">You Deserve Peace of Mind.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          We build intelligent AI agents that transform your customer support from a cost center
          into a competitive advantage. No templates. No compromises. Just custom-built solutions
          that understand your business and delight your customers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-400 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Schedule Free Consultation
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 border-2 border-white/30"
          >
            Learn More
          </button>
        </div>

        <button
          onClick={() => scrollToSection('why-us')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </section>
  );
}
