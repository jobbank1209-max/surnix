import { motion } from 'framer-motion';
import { Leaf, Gem, Palette, Cookie, Truck, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: Cookie,
    title: 'Organic Jaggery',
    description: 'Pure, unrefined jaggery made from natural sugarcane. Rich in minerals and traditional goodness.',
    color: 'bg-amber-500/10 text-amber-500',
  },
  {
    icon: Leaf,
    title: 'Moringa Leaf Products',
    description: 'Nutrient-rich moringa leaves and powder for health-conscious customers seeking natural wellness.',
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative graphic design services for branding, marketing materials, and digital assets.',
    color: 'bg-rose-500/10 text-rose-500',
  },
  {
    icon: Gem,
    title: 'Handcrafted Jewelry',
    description: 'Exquisite handcrafted jewelry pieces that blend traditional artistry with modern elegance.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery across regions. Your products reach you fresh and on time.',
    color: 'bg-sky-500/10 text-sky-500',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Support',
    description: 'Dedicated customer support to assist you with orders, queries, and after-sales service.',
    color: 'bg-orange-500/10 text-orange-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Services = () => {
  return (
    <section id="products" className="py-24 relative">
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
            <span className="text-sm font-medium text-primary">Our Offerings</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Products & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From organic food products to creative design solutions and elegant jewelry – we bring quality to your doorstep.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="glass-card p-6 hover:shadow-glow transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
