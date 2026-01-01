import { 
  Server, 
  Monitor, 
  Code, 
  Globe, 
  Headphones, 
  ClipboardList,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const services = [
  {
    icon: Server,
    title: 'IT Infrastructure Setup',
    description: 'Server and network installation, router/switch/firewall setup, cloud-based system deployment, and email platform migration.',
    features: ['Network Configuration', 'Cloud Deployment', 'Security Setup'],
    image: '/new/newest/IT.jpg',
    id: 'it-infrastructure-setup',
  },
  {
    icon: Monitor,
    title: 'Hardware & Equipment',
    description: 'Supply and configuration of laptops, desktops, printers, CCTV systems, access control, and time & attendance systems.',
    features: ['Device Supply', 'CCTV Installation', 'Access Control'],
    image: '/hardware.jpg',
    id: 'hardware-equipment',
  },
  {
    icon: Code,
    title: 'Software Deployment',
    description: 'Installation and configuration of enterprise applications, custom software delivery, and licensing management.',
    features: ['App Integration', 'Custom Software', 'License Management'],
    image: '/new/newest/code34.jpg',
    id: 'software-deployment',
  },
  {
    icon: Globe,
    title: 'Web & App Development',
    description: 'Corporate website design and hosting, web and mobile application development, UI/UX design and optimization.',
    features: ['Website Design', 'Mobile Apps', 'UI/UX Design'],
    image: '/new/newest/software.jpg',
    id: 'web-app-development',
  },
  {
    icon: Headphones,
    title: 'IT Support & Maintenance',
    description: 'Preventive and corrective maintenance, troubleshooting, system upgrades, remote and on-site support services.',
    features: ['24/7 Support', 'System Upgrades', 'Troubleshooting'],
    image: '/new/newest/network.jpg',
    id: 'it-support-maintenance',
  },
  {
    icon: ClipboardList,
    title: 'IT Consultancy',
    description: 'IT policy development, technology audit, risk assessment, strategic IT planning and digital transformation advisory.',
    features: ['Strategy Planning', 'Risk Assessment', 'Digital Transformation'],
    image: '/consult.jpg',
    id: 'it-consultancy',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-base md:text-lg uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions for{' '}
            <span className="text-accent">Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver a comprehensive suite of IT solutions tailored for the evolving needs of modern businesses across all industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col md:flex-row md:items-center md:gap-6 group bg-card rounded-2xl p-6 border border-border card-hover overflow-hidden"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover rounded-xl group-hover:shadow-lg transition-shadow duration-300"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <NavLink
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
                >
                  Read More
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" asChild>
            <NavLink to="/request-quote">
              Discuss Your Project
              <ArrowRight size={20} />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
