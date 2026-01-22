const Footer = () => {
  const platforms = [
    { name: "AO3", url: "https://archiveofourown.org" },
    { name: "Tapas", url: "https://tapas.io" },
  ];

  return (
    <footer className="bg-charcoal-dark border-t border-border/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-muted/40">
          <span className="font-serif text-sm text-cream/60 tracking-wide">
            A.M.Martin
          </span>
          
          <div className="flex items-center gap-6">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-muted/70 transition-colors duration-500"
              >
                {platform.name}
              </a>
            ))}
          </div>
          
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
