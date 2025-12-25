const marqueeItems = [
  'Mobile Apps',
  'Motion Effect',
  'User Interfaces',
  'Website',
  'Automation',
  'AI Tools',
  'Brand Design',
];

export const Marquee = () => {
  return (
    <section className="py-12 overflow-hidden border-y border-border bg-muted/30">
      <div className="relative">
        <div className="marquee flex gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-2xl md:text-3xl font-heading font-semibold text-foreground/80 hover:text-primary transition-colors cursor-default">
                {item}
              </span>
              <span className="text-muted-foreground/40">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
