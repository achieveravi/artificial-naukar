import { useEffect, useRef, useState } from 'react';
import { Search, Palette, TestTube, Rocket, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
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

  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Discovery & Strategy',
      description:
        'We dive deep into your business, understanding customer pain points, support workflows, and success metrics.',
    },
    {
      number: 2,
      icon: Palette,
      title: 'Custom Design & Development',
      description:
        'Your AI agent is built from the ground up with your brand voice, domain knowledge, and business rules.',
    },
    {
      number: 3,
      icon: TestTube,
      title: 'Testing & Refinement',
      description:
        'Rigorous testing with real scenarios, feedback loops, and iterative improvements before launch.',
    },
    {
      number: 4,
      icon: Rocket,
      title: 'Seamless Deployment',
      description:
        'Smooth integration with your existing systems, followed by careful monitoring during the rollout phase.',
    },
    {
      number: 5,
      icon: RefreshCw,
      title: 'Continuous Optimization',
      description:
        'Ongoing performance monitoring, regular updates, and continuous improvement based on real-world data.',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven process that delivers results, from concept to continuous improvement.
          </p>
        </div>

        <div className="hidden lg:block relative pt-12">
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
          <div className="relative grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="bg-white border-4 border-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex gap-6 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
