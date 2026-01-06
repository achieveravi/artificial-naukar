import { useEffect, useRef, useState } from 'react';
import { Brain, Users, MessageSquare, LineChart } from 'lucide-react';

export default function WhatWeDo() {
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

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Query Resolution',
      description:
        'Advanced natural language processing that understands context, intent, and nuance. Our AI agents don\'t just match keywords—they comprehend your customers\' needs and provide accurate, helpful responses.',
    },
    {
      icon: Users,
      title: 'Seamless Human Handoff',
      description:
        'When complexity requires a human touch, our smart routing ensures smooth transitions to your team with full context preserved. No frustrated customers repeating themselves.',
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description:
        'Meet your customers where they are—website chat, email, social media, or messaging apps. One AI agent, consistent experience across all platforms.',
    },
    {
      icon: LineChart,
      title: 'Smart Learning & Improvement',
      description:
        'Continuous learning from every interaction. Our AI agents get smarter over time, adapting to new scenarios and improving response quality automatically.',
    },
  ];

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Customer Support AI Agents That Actually Work
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Purpose-built solutions that deliver real results, not generic chatbots that frustrate your customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
