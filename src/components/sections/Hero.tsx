import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroOrb from '@/assets/hero-orb.png';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Pure <span className="gradient-text">Nature,</span>
              <br />
              Crafted Beauty
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Welcome to <span className="font-semibold text-foreground">Surnix</span> – Your destination for organic Jaggery, Moringa Leaf products, stunning Jewelry, and creative Graphic Design services.
            </p>
            
            <Button variant="hero" size="lg" className="mb-10">
              Explore Products
            </Button>
            
            {/* Stats */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-card"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> Happy Customers
              </p>
            </div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Main Orb */}
            <div className="relative">
              <img 
                src={heroOrb} 
                alt="Surnix Products" 
                className="w-80 md:w-96 lg:w-[450px] animate-float"
              />
              
              {/* Floating Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -left-4 glass-card px-4 py-3 animate-float"
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center mb-1">
                  <span className="text-lg">🍯</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-1/4 -right-4 glass-card px-4 py-3 animate-float-delayed"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">Organic Jaggery</span>
                  <div className="w-3 h-3 rounded-sm bg-amber-400" />
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-muted-foreground">Moringa Leaf</span>
                  <div className="w-3 h-3 rounded-sm bg-emerald-400" />
                </div>
                <div className="mt-2 h-0.5 bg-muted rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-foreground rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-1/4 -left-8 glass-card px-4 py-3"
              >
                <p className="text-xs text-muted-foreground">Handcrafted</p>
                <p className="text-sm font-medium text-secondary">Premium Jewelry</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-8 left-1/4 glass-card px-4 py-2 flex items-center gap-2"
              >
                <span className="text-emerald-400">🌿</span>
                <span className="text-xs text-muted-foreground">100% Natural</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 flex items-center gap-2"
              >
                <span className="text-amber-400">✨</span>
                <span className="text-sm font-medium">Creative Designs</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
