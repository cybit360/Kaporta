import Link from 'next/link';
import { ArrowRight, Shield, Clock, Users, CheckCircle2, Star, Mountain, Factory, Truck, Building2, Zap, Wrench } from 'lucide-react';

const servicePreview = [
  { icon: Mountain, title: 'Quarrying & Mining', href: '/services/quarrying-mining' },
  { icon: Factory, title: 'Concrete Production', href: '/services/concrete-production' },
  { icon: Truck, title: 'Haulage & Logistics', href: '/services/haulage-logistics' },
  { icon: Building2, title: 'Civil Engineering', href: '/services/civil-engineering' },
  { icon: Zap, title: 'Power & Energy', href: '/services/power-energy' },
  { icon: Wrench, title: 'Equipment Rental', href: '/services/equipment-rental' },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Active Clients' },
  { value: '500+', label: 'Jobs Created' },
];

const whyChooseUs = [
  { icon: Shield, title: 'Fully Certified Team', description: 'Our team holds international certifications and adheres to strict safety protocols.' },
  { icon: Clock, title: 'On-Time Delivery', description: 'We consistently deliver projects on schedule and within budget.' },
  { icon: Users, title: '100% Local Commitment', description: 'Proudly Sierra Leonean, investing in local talent and communities.' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              <CheckCircle2 className="h-4 w-4 text-construction-yellow" />
              Trusted Since 2008 &bull; Sierra Leone&apos;s Leading Constructor
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Sierra Leone&apos;s Future Through{' '}
              <span className="text-construction-yellow">Strength & Innovation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Since 2008, Kaporta Investment Sierra Leone Limited has been a trusted partner in construction, logistics, and infrastructure development across West Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-construction-yellow text-deep-blue font-heading font-bold text-base rounded-lg hover:bg-construction-yellow-dark transition-colors"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-heading font-semibold text-base rounded-lg hover:bg-white hover:text-deep-blue transition-colors"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-deep-blue-dark/80 backdrop-blur-sm border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-construction-yellow">{stat.value}</div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="font-heading text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              What We Do
            </h2>
            <p className="text-concrete-gray text-lg max-w-2xl mx-auto">
              Comprehensive construction and logistics solutions tailored to meet the unique demands of West African infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePreview.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="card-hover group p-8 bg-soft-white rounded-xl border border-gray-100 hover:border-construction-yellow/30"
                >
                  <div className="w-14 h-14 bg-deep-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-construction-yellow/20 transition-colors">
                    <Icon className="h-7 w-7 text-deep-blue group-hover:text-construction-yellow-dark transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{service.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm text-deep-blue font-medium group-hover:text-construction-yellow-dark transition-colors">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-deep-blue font-heading font-semibold hover:text-construction-yellow-dark transition-colors"
            >
              Explore All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-soft-white" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="why-heading" className="font-heading text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Why Choose Kaporta Group
            </h2>
            <p className="text-concrete-gray text-lg max-w-2xl mx-auto">
              With over 15 years of experience, we bring reliability, quality, and local expertise to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center p-8">
                  <div className="w-16 h-16 bg-construction-yellow/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-8 w-8 text-construction-yellow-dark" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">{item.title}</h3>
                  <p className="text-concrete-gray leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="projects-heading" className="font-heading text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Featured Projects
            </h2>
            <p className="text-concrete-gray text-lg max-w-2xl mx-auto">
              A selection of our completed projects across Sierra Leone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Freetown Highway Expansion', category: 'Government', location: 'Freetown' },
              { title: 'Waterloo Commercial Complex', category: 'Commercial', location: 'Waterloo' },
              { title: 'Bo District Bridge', category: 'Infrastructure', location: 'Bo District' },
            ].map((project) => (
              <div key={project.title} className="card-hover group rounded-xl overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-deep-blue to-charcoal flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-white/20" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-construction-yellow-dark bg-construction-yellow/10 px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">{project.title}</h3>
                  <p className="text-sm text-concrete-gray">{project.location}, Sierra Leone</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-deep-blue text-white font-heading font-semibold rounded-lg hover:bg-deep-blue-light transition-colors"
            >
              View All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 lg:py-24 bg-deep-blue" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Clients Across West Africa
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: 'Kaporta delivered our highway expansion project on time and under budget. Their professionalism exceeded our expectations.',
                name: 'Dr. James Koroma',
                org: 'Sierra Leone Roads Authority',
              },
              {
                quote: 'The equipment rental and logistics services provided by Kaporta are second to none. Delivery is always on time.',
                name: 'Alhaji Kamara',
                org: 'Sierra Mining Corp',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-construction-yellow fill-construction-yellow" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-heading font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-construction-yellow font-heading font-semibold hover:text-construction-yellow-light transition-colors"
            >
              Read More Testimonials <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-construction-yellow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-deep-blue/80 text-lg mb-8 max-w-2xl mx-auto">
            Partner with Kaporta Group for reliable construction, logistics, and infrastructure solutions across Sierra Leone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-blue text-white font-heading font-bold rounded-lg hover:bg-deep-blue-light transition-colors"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-deep-blue text-deep-blue font-heading font-semibold rounded-lg hover:bg-deep-blue hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
