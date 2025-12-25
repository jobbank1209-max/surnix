import { motion } from 'framer-motion';
import worldMap from '@/assets/world-map.svg';

export const GlobalReach = () => {
  return (
    <section className="py-24 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Delivering Across India
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From farm-fresh jaggery to handcrafted jewelry, we deliver quality products to your doorstep nationwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <img 
            src={worldMap} 
            alt="Delivery Reach Map" 
            className="w-full h-auto opacity-60"
          />
        </motion.div>
      </div>
    </section>
  );
};
