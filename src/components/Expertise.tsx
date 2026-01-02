import { Building2, Factory, Droplets, Truck, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const industries = [
  { icon: Building2, name: 'Corporate', description: 'Enterprise IT infrastructure and digital transformation solutions.' },
  { icon: Factory, name: 'Manufacturing', description: 'Production optimization through smart technology integration.' },
  { icon: Droplets, name: 'Oil & Gas', description: 'Secure and reliable IT systems for energy sector operations.' },
  { icon: Truck, name: 'Logistics', description: 'Fleet management and supply chain technology solutions.' },
];

const methodology = [
  { step: '01', title: 'Assessment', description: 'Understanding your IT environment and business goals' },
  { step: '02', title: 'Planning', description: 'Developing a tailored IT delivery roadmap' },
  { step: '03', title: 'Implementation', description: 'Executing system setup, deployment, or integration' },
  { step: '04', title: 'Testing', description: 'Ensuring all systems meet operational standards' },
  { step: '05', title: 'Training', description: 'Equipping your staff for smooth operations' },
  { step: '06', title: 'Support', description: 'Continuous maintenance, monitoring, and review' },
];

const Expertise = () => {
  return (
    <section className="section-padding bg-navy text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cross-Industry <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We provide solutions for industries ranging from manufacturing to oil and gas, delivering tailored technology that drives results.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <a href="https://facebook.com/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://x.com/techweighten" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/techweighten" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/company/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://youtube.com/@TechWeighten" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <industry.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
              <p className="text-primary-foreground/60 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 bg-background rounded-3xl p-8 md:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Proven Methodology</h3>
            <p className="text-muted-foreground">Following global ITIL standards for service management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item) => (
              <div
                key={item.step}
                className="relative flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
              >
                <span className="text-4xl font-bold text-accent">{item.step}</span>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="accent" size="xl" asChild>
            <NavLink to="/request-quote">
              Start Your Project
              <ArrowRight size={20} />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
