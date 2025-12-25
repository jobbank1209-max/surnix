import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What products does Surnix offer?',
    answer: 'Surnix offers a diverse range of products including organic jaggery, moringa leaf products, handcrafted jewelry, and professional graphic design services.',
  },
  {
    question: 'Is your jaggery 100% organic?',
    answer: 'Yes! Our jaggery is made from pure sugarcane using traditional methods without any chemicals or preservatives. It is completely natural and organic.',
  },
  {
    question: 'How can I place an order?',
    answer: 'You can place an order by contacting us through our website or WhatsApp. We will guide you through the ordering process and delivery options.',
  },
  {
    question: 'Do you deliver across India?',
    answer: 'Yes, we deliver our products across India. Delivery charges may vary based on your location. Contact us for specific delivery information.',
  },
  {
    question: 'What graphic design services do you provide?',
    answer: 'We offer logo design, branding, social media graphics, business cards, brochures, banners, and all types of marketing materials for businesses.',
  },
];

export const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">S</span>
            </div>
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have questions? We are here to help!
          </p>
          
          <Button variant="default" size="lg">
            Contact Us
          </Button>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-heading font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
