import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

const slides = [
  {
    img: '/new/5.jpg',
    alt: 'Technology background',
    title: 'Empowering Businesses with Technology',
    // description: 'Your business is our business. We deliver innovative IT solutions tailored to your operational, technical, and business goals.',
    descriptionClass: 'text-white',
    buttons: [
      { text: 'Start Your Project', variant: 'accent', to: '/contact' },
      { text: 'Explore Services', variant: 'hero', to: '/services' },
    ],
  },
  {
    img: '/new/newest/cloud.webp',
    alt: 'Team collaboration',
    title: 'What Makes Us Different',
    // description: 'We combine strategy, engineering, and support to build resilient digital operations.',
    descriptionClass: 'text-accent',
  },
  {
    img: '/new/yy.jpg',
    alt: 'Reliable infrastructure',
    title: 'We Ensure 99% Uptime',
    // description: 'Performance, reliability, and proactive monitoring to keep your business online.',
    descriptionClass: 'text-amber-200',
    highlight: '99% Uptime',
  },
  {
    img: '/new/9uj.jpg',
    alt: 'Innovative technology',
    title: 'Driving Innovation with Cutting-Edge Tech',
    // description: 'Stay ahead of the curve with our latest technological advancements and innovative solutions.',
    descriptionClass: 'text-primary-foreground/90',
    buttons: [
      { text: 'Get Started', variant: 'accent', to: '/contact' },
      { text: 'Our Innovations', variant: 'hero', to: '/services' },
    ],
  },
  {
    img: '/new/68.jpg',
    alt: 'Expert team',
    title: 'Meet Our Expert Team',
    // description: 'Our skilled professionals bring years of experience and expertise to deliver exceptional results.',
    descriptionClass: 'text-orange-400',
    features: ['Certified Specialists', 'Years of Experience', 'Client-Focused Approach'],
  },
  {
    img: '/new/90.jpg',
    alt: 'Reliable support',
    title: '24/7 Support You Can Count On',
    // description: 'Round-the-clock assistance and maintenance to ensure your systems run smoothly at all times.',
    descriptionClass: 'text-sky-200',
    highlight: '24/7 Available',
  },
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [api]);
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Carousel opts={{ loop: true }} setApi={setApi} className="relative">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-screen flex items-center">
                <img src={slide.img} alt={slide.alt} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="container-custom relative z-10 py-20">
                  <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                      {slide.title.includes('with') ? (
                        <>
                          {slide.title.split(' with ')[0]} with <span className="text-accent">{slide.title.split(' with ')[1]}</span>
                        </>
                      ) : (
                        slide.title
                      )}
                    </h1>
                    <p
                      className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-semibold ${
                        slide.descriptionClass ?? 'text-accent'
                      }`}
                    >
                      {/* {slide.description} */}
                    </p>
                    {slide.buttons && (
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {slide.buttons.map((button, btnIndex) => (
                          <Button key={btnIndex} variant={button.variant as any} size="xl" asChild>
                            <NavLink to={button.to}>
                              {button.text}
                              {btnIndex === 0 && <ArrowRight size={20} />}
                            </NavLink>
                          </Button>
                        ))}
                      </div>
                    )}
                    {slide.features && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {slide.features.map((item) => (
                          <div key={item} className="flex items-center justify-center gap-2 text-primary-foreground/90">
                            <CheckCircle className="text-accent" size={22} />
                            <span className="text-sm md:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {slide.highlight && (
                      <div className="mt-6">
                        <div className="text-4xl md:text-5xl font-bold text-accent">{slide.highlight}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default Hero;

