import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Premium Organic Jaggery',
    description: 'Traditional jaggery made from pure sugarcane, rich in iron and natural sweetness.',
    tags: ['100% Natural', 'Chemical Free', 'Farm Fresh'],
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    size: 'large',
  },
  {
    title: 'Moringa Wellness Range',
    description: 'Nutrient-packed moringa leaves and powder for daily health and immunity.',
    tags: ['Superfood', 'High Protein', 'Vitamins Rich'],
    image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=600&q=80',
    size: 'small',
  },
];

export const CaseStudies = () => {
  return (
    <section id="gallery" className="py-24 bg-muted/20">
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
            <span className="text-sm font-medium text-primary">Featured Products</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Best Sellers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved products trusted by hundreds of customers.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto"
        >
          <div className="glass-card p-6 text-center">
            <p className="font-heading text-4xl font-bold gradient-text mb-1">500+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="font-heading text-4xl font-bold gradient-text mb-1">50+</p>
            <p className="text-sm text-muted-foreground">Products</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
