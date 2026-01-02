import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const projects = [
  {
    title: 'Teechha – Educational Professional Network',
    image: '/teeach.JPG',
    url: 'http://teechha.com/',
    stack: ['JavaScript', 'Typescript', 'Next.js', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL'],
    bullets: [
      'Full‑stack educational network connecting teachers and students with rich academic profiles',
      'Real‑time messaging and profile management powered by Prisma ORM',
      'Always‑on platform designed for continuous learning opportunities',
    ],
  },
  {
    title: 'Employee Competency System',
    image: '/hrm_competeny.JPG',
    url: 'https://hrmoffice.vercel.app/',
    stack: ['Typescript', 'Next.js', 'Node.js', 'Express', 'PostgreSQL'],
    bullets: [
      'Role‑based HR platform supporting competency assessments, job profiling, and analytics for 100+ employees',
      'Query optimizations reduced assessment load time from 8s to 1.2s',
    ],
  },
  {
    title: 'HRM Office - HR Solutions Platform',
    image: '/hrm.JPG',
    url: 'https://hrmoffice.org/',
    stack: ['Next.js', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL'],
    bullets: [
      'Comprehensive HR platform for 200+ companies with training, certification, and recruitment modules',
      'Achieved 98% success rate across onboarding and certification workflows',
    ],
  },
  {
    title: 'H&O Movers – Moving & Logistics Website',
    image: '/movers.JPG',
    url: 'https://www.handomovers.com/',
    stack: ['Next.js', 'Tailwind', 'Node.js'],
    bullets: [
      'Customer-first moving platform focused on speed, safety, and reliability',
      'Streamlined booking and quote flow with mobile-friendly experience',
      'Clear service presentation and trust signals built into every page',
    ],
  },
  {
    title: 'Beauty Stars – Cosmetics Brand Website',
    image: '/beauty.JPG',
    url: 'https://beautystarscosmetics.com/',
    stack: ['Next.js', 'Tailwind', 'Node.js'],
    bullets: [
      'Skincare product showcase with conversion-focused landing pages',
      'Clear product information highlighting bio‑active formulations and benefits',
      'Responsive design and fast navigation to boost engagement',
    ],
  },
  {
    title: 'Eco Darlin Ltd',
    image: '/assets/Eco.jpg',
    url: '#',
    stack: ['Brand', 'Website', 'Responsive UI'],
    bullets: [
      'Informational site championing eco conservation and bio preservation',
      'Clean visual identity and accessible content structure',
      'Mobile‑first layout guiding visitors to contact and engagement',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-base md:text-lg uppercase tracking-wider mb-4 block">
            Key Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Delivering Impact With <span className="text-accent">Modern Stacks</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of platforms architected and shipped end-to-end with performance, reliability, and usability at the core.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="mx-auto max-w-full h-auto max-h-80 md:max-h-96 object-contain bg-muted rounded-2xl border border-border shadow-md"
                />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-bold text-foreground mb-3">{p.title}</h3>
                <div className="mb-2 text-sm text-muted-foreground">Stack</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle className="text-primary mt-0.5" size={16} />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent" size="default" asChild>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
