import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: 'How long does deployment typically take?',
      answer:
        'Most implementations go live within 4-8 weeks, depending on complexity and integration requirements. We prioritize speed without compromising quality, with phased rollouts available for larger deployments.',
    },
    {
      question: 'Will AI replace my customer support team?',
      answer:
        'No. Our AI agents are designed to augment your team, not replace them. They handle routine inquiries and high-volume requests, freeing your human agents to focus on complex issues that require empathy, creativity, and critical thinking. Think of it as giving your team superpowers, not replacing them.',
    },
    {
      question: 'What if the AI doesn\'t know the answer?',
      answer:
        'Our intelligent routing system seamlessly escalates to human agents when needed, with full conversation context. The AI is designed to recognize its limitations and provide graceful handoffs rather than attempting to answer beyond its knowledge base.',
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer:
        'Enterprise-grade security is built into every solution. We implement end-to-end encryption, comply with industry standards (GDPR, HIPAA, SOC 2), and never share your data with third parties. Your data stays your data.',
    },
    {
      question: 'Can the AI support multiple languages?',
      answer:
        'Yes. Our AI agents can be trained to support multiple languages with native-level fluency, enabling you to serve global customers with consistent quality across all languages.',
    },
    {
      question: 'What kind of support do you provide post-deployment?',
      answer:
        'Comprehensive ongoing support including performance monitoring, regular optimization updates, troubleshooting, and dedicated account management. We\'re partners in your success, not just vendors who disappear after launch.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our AI agents and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-cyan-500" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
