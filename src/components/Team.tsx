import { Award, Users, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Experienced and certified IT professionals with proven expertise.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Proven track record of timely and successful project completion.',
  },
  {
    icon: Shield,
    title: 'Quality Commitment',
    description: 'Commitment to quality, innovation, and client satisfaction.',
  },
  {
    icon: Users,
    title: 'Excellent Support',
    description: 'Competitive pricing with outstanding after-service support.',
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-base md:text-lg uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Team You Can{' '}
            <span className="text-primary">Trust</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            TechWeight Technologies is backed by a team of dedicated professionals committed to your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start gap-5 p-6 bg-card rounded-2xl border border-border card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Approach */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Strategic Approach</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Innovative Problem Solving</h4>
                  <p className="text-muted-foreground text-sm">Engineering solutions that improve workflow and reduce costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Lifecycle Optimization</h4>
                  <p className="text-muted-foreground text-sm">Optimizing the entire lifecycle from concept to support.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Collaboration</h4>
                  <p className="text-muted-foreground text-sm">Working closely with your teams for seamless integration.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Technology Integration</h4>
                  <p className="text-muted-foreground text-sm">AI-driven automation and predictive maintenance solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
