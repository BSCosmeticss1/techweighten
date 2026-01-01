import { Target, Eye, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Tailored Solutions',
    description: 'We design solutions that align with your specific operational goals and business needs.',
  },
  {
    icon: Lightbulb,
    title: 'Cutting-edge Technology',
    description: 'We leverage the latest IT tools and software to ensure precision, efficiency, and innovation.',
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'We are your long-term partner, committed to driving success through continuous improvement.',
  },
  {
    icon: Eye,
    title: 'Future Ready',
    description: 'Our solutions ensure your business is ready to adapt to technological advancements.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-base md:text-lg uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technology Solutions That{' '}
            <span className="text-primary">Drive Business Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            TechWeight is a forward-thinking technology solutions company dedicated to helping businesses work smarter, faster, and more securely.
          </p>
        </div>

        {/* Image + Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
            <img 
              src="/assets/team-collab.jpg" 
              alt="TechWeight team collaborating" 
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Your Trusted Technology Partner
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We understand the critical role of technology in driving business success. Our focus is on delivering solutions that enhance productivity, optimize resources, and ensure digital transformation through reliable deployment of technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In today's fast-evolving technological landscape, the success of any project hinges on robust, innovative, and sustainable IT solutions. Our IT team is committed to delivering high-performance results tailored to your specific requirements.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Certified Professionals
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-2 h-2 rounded-full bg-accent" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                99% Uptime
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with secure, innovative, and future-ready technology solutions that enhance productivity, accelerate growth, and sustain long-term value.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver high-quality IT services, infrastructure solutions, and digital tools that help businesses operate smarter with modern, efficient, and secure technology.
            </p>
          </div>
        </div>


      </div>
      {/* hjk */}
    </section>
  );
};

export default About;
