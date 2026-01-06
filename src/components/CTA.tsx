import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 leading-relaxed">
            Stop losing customers to long wait times and inconsistent support.
            <br />
            Let's build something remarkable together.
          </p>
          <a
            href="mailto:hello@artificialnaukar.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 text-white text-lg font-semibold rounded-lg hover:bg-cyan-400 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="mt-8">
            <p className="text-blue-200 mb-2">Or reach out directly:</p>
            <a
              href="mailto:hello@artificialnaukar.com"
              className="text-cyan-300 text-xl font-semibold hover:text-cyan-200 transition-colors"
            >
              hello@artificialnaukar.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
