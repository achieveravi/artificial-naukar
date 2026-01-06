import { useEffect, useRef, useState } from 'react';
import { Rocket, DollarSign, Handshake, Target } from 'lucide-react';

export default function Advantage() {
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

  const advantages = [
    {
      icon: Rocket,
      title: 'Speed to Market',
      description: 'From first call to live deployment in weeks, not months. Fast implementation without cutting corners.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprise charges. Clear, straightforward pricing that scales with your success.',
    },
    {
      icon: Handshake,
      title: 'Dedicated Partnership',
      description: 'You\'re not a ticket number. Direct access to your implementation team throughout the journey.',
    },
    {
      icon: Target,
      title: 'Measurable Impact',
      description: 'Real metrics, real ROI. Track response times, resolution rates, and customer satisfaction improvements.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The ArtificialNaukar Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why leading companies trust us to transform their customer support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform shadow-lg">
                <advantage.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
