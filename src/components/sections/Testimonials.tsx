import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    title: 'Best Organic Jaggery I have ever tasted!',
    description: 'The jaggery from Surnix is pure and has that authentic traditional taste. My family loves it!',
    client: 'Priya Sharma',
    category: 'Jaggery Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    title: 'Beautiful Handcrafted Jewelry',
    description: 'I ordered a necklace for my wedding and it was absolutely stunning. Great craftsmanship!',
    client: 'Anita Reddy',
    category: 'Jewelry Customer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    title: 'Excellent Graphic Design Work',
    description: 'Surnix designed our company logo and branding materials. Very professional and creative team!',
    client: 'Rahul Verma',
    category: 'Design Client',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
];

export const Testimonials = () => {
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
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our happy customers about their experience with Surnix.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <h3 className="font-heading text-lg font-semibold mb-2">{testimonial.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{testimonial.description}</p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.client}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.client}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
