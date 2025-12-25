import { motion } from 'framer-motion';

const footerLinks = {
  products: ['Jaggery', 'Moringa Leaf', 'Jewelry', 'Graphic Design'],
  support: ['Contact', 'FAQ', 'Shipping Info', 'Returns'],
  social: ['WhatsApp', 'Instagram', 'Facebook', 'Twitter'],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
                <span className="text-foreground font-heading font-bold text-lg">S</span>
              </div>
              <span className="font-heading font-semibold text-lg">Surnix</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Your one-stop destination for organic products, handcrafted jewelry, and creative design services.
            </p>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Surnix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
