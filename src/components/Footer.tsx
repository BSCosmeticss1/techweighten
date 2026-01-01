import { NavLink } from '@/components/NavLink';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src="/assets/techweighten-logo.png" alt="TechWeight Logo" className="h-12 w-auto mb-6" />
            <p className="text-primary-foreground/70 max-w-md mb-6">
              TechWeight is a forward-thinking technology solutions company dedicated to helping businesses work smarter, faster, and more securely.
            </p>
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://facebook.com/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open Facebook" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open X (Twitter)" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/company/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://youtube.com/@TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Open YouTube" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} TechWeight Technologies. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Team', href: '/team' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'IT Infrastructure Setup', href: '/services/it-infrastructure-setup' },
                { name: 'Hardware & Equipment', href: '/services/hardware-equipment' },
                { name: 'Software Deployment', href: '/services/software-deployment' },
                { name: 'Web & App Development', href: '/services/web-app-development' },
                { name: 'IT Support & Maintenance', href: '/services/it-support-maintenance' },
                { name: 'IT Consultancy', href: '/services/it-consultancy' },
              ].map((service) => (
                <li key={service.name}>
                  <NavLink
                    to={service.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            Empowering African businesses with secure, innovative technology.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
