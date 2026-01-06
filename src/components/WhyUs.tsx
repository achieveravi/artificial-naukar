import { useEffect, useRef, useState } from 'react';
import { Globe, TrendingUp, Zap } from 'lucide-react';

export default function WhyUs() {
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
      icon: Globe,
      title: "We Speak Your Industry's Language",
      description:
        "Every industry has unique challenges, terminology, and customer expectations. Our AI agents are trained on your specific domain knowledge, ensuring accurate responses that reflect deep understanding of your business context.",
    },
    {
      icon: TrendingUp,
      title: 'Built for Scale, Designed for Care',
      description:
        "Handle thousands of conversations simultaneously while maintaining the personalized, empathetic touch that builds customer loyalty. Our solutions grow with your business without sacrificing quality.",
    },
    {
      icon: Zap,
      title: 'Deployment Without the Disruption',
      description:
        'Seamless integration with your existing systems and workflows. No massive overhauls. No months of implementation. We work within your infrastructure to deliver results quickly and efficiently.',
    },
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose ArtificialNaukar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another chatbot vendor. We're your strategic partner in customer experience transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
