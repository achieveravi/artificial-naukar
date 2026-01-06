import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Laptop, Heart, DollarSign, Plane, Home } from 'lucide-react';

export default function Industries() {
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

  const industries = [
    {
      icon: ShoppingCart,
      name: 'E-commerce & Retail',
      description:
        'Order tracking, product recommendations, returns processing, and personalized shopping assistance that drives conversions.',
    },
    {
      icon: Laptop,
      name: 'SaaS & Technology',
      description:
        'Technical troubleshooting, onboarding support, feature guidance, and subscription management for software products.',
    },
    {
      icon: Heart,
      name: 'Healthcare & Wellness',
      description:
        'Appointment scheduling, insurance inquiries, prescription refills, and patient support with HIPAA-compliant solutions.',
    },
    {
      icon: DollarSign,
      name: 'Financial Services',
      description:
        'Account inquiries, transaction support, fraud prevention, and financial guidance with enterprise-grade security.',
    },
    {
      icon: Plane,
      name: 'Hospitality & Travel',
      description:
        'Booking assistance, itinerary management, local recommendations, and 24/7 guest support across time zones.',
    },
    {
      icon: Home,
      name: 'Real Estate',
      description:
        'Property inquiries, showing scheduling, tenant support, and lead qualification for agents and property managers.',
    },
  ];

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across diverse sectors, tailored solutions for every industry's unique challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-cyan-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
