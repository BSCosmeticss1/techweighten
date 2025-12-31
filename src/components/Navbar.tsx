import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-white text-foreground border-b border-border">
      <div className="hidden lg:block bg-blue-900 text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between h-12">
            {/* Left Side: Language & Globe */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors cursor-pointer">
                <span>English</span>
              </div>
              <Globe className="h-4 w-4 text-white/70" />
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+2347065755293"
                  className="hover:text-accent transition-colors"
                  aria-label="Call 07065755293"
                >
                  07065755293
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="tel:+2347077323600"
                  className="hover:text-accent transition-colors"
                  aria-label="Call 07077323600"
                >
                  07077323600
                </a>
              </div>
            </div>
            {/* Right Side: Email & Request Quote */}
            <div className="flex items-center gap-4">
              <a href="mailto:info@techweighten.com" className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm">
                <Mail className="h-4 w-4" />
                info@techweighten.com
              </a>
              <span className="text-white/30">|</span>
              <NavLink to="/request-quote" className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm">
                <span>Request a Quote</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-white text-foreground ${!isHome ? 'border-b-2 border-blue-400' : ''}`}>
        <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/assets/techweighten-logo.png" alt="TechWeighten Logo" className="h-10 md:h-12 w-auto" />
            <span className="text-lg md:text-2xl font-bold tracking-tight text-blue-600">
              TechWeighten
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-blue-600">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="nav-link text-sm font-medium text-blue-600 hover:text-accent"
                activeClassName="text-accent"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="accent" size="default" asChild>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-white">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-blue-600 hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Button variant="accent" size="lg" className="mt-2" asChild>
                <NavLink to="/contact">Get Started</NavLink>
              </Button>
            </div>
          </div>
        )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
