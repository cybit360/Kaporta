import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, Shield, Award, Users, Heart, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Kaporta Investment Sierra Leone Limited - our history, mission, vision, and commitment to building Sierra Leone since 2008.',
};

const values = [
  { icon: Shield, title: 'Quality', description: 'We deliver excellence in every project, adhering to international standards and best practices.' },
  { icon: Users, title: 'Integrity', description: 'We conduct business with honesty, transparency, and professionalism in all dealings.' },
  { icon: Heart, title: 'Community', description: 'We invest in local talent, create jobs, and contribute to community development.' },
  { icon: Award, title: 'Innovation', description: 'We embrace modern technologies and methods to deliver superior results.' },
];

const timeline = [
  { year: '2008', title: 'Company Founded', description: 'Kaporta Investment Sierra Leone Limited established in Freetown.' },
  { year: '2011', title: 'Quarry Operations', description: 'Launched state-of-the-art quarry and concrete crushing plant.' },
  { year: '2014', title: 'Fleet Expansion', description: 'Expanded haulage fleet to serve nationwide logistics needs.' },
  { year: '2017', title: 'Power Division', description: 'Added hybrid power solutions division for construction and mining.' },
  { year: '2020', title: 'Major Projects', description: 'Completed multiple government infrastructure projects across Sierra Leone.' },
  { year: '2024', title: 'Regional Growth', description: 'Expanding operations and partnerships across West Africa.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">About Kaporta Group</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            A cornerstone of Sierra Leone&apos;s infrastructure sector since 2008.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-deep-blue mb-6">Our Story</h2>
              <p className="text-concrete-gray leading-relaxed mb-4">
                Kaporta Investment Sierra Leone Limited is a leading company specializing in various sectors of the construction industry. With a focus on providing top-quality services and products, we are committed to delivering excellence and contributing to the development of Sierra Leone.
              </p>
              <p className="text-concrete-gray leading-relaxed mb-4">
                Established in January 2008, our company has built a solid reputation for reliability, professionalism, and innovation. With a passion for quality and local development, we&apos;ve contributed to roads, buildings, and energy solutions across the country.
              </p>
              <p className="text-concrete-gray leading-relaxed">
                Today, Kaporta Group is one of Sierra Leone&apos;s most trusted names in construction and logistics, serving government agencies, NGOs, mining companies, and private clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-deep-blue to-charcoal rounded-2xl h-80 flex items-center justify-center">
              <Users className="h-24 w-24 text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-soft-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-construction-yellow/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-construction-yellow-dark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-deep-blue mb-4">Our Mission</h3>
              <p className="text-concrete-gray leading-relaxed">
                To be the leading provider of comprehensive construction solutions in Sierra Leone. We aim to contribute to the growth and development of the country by delivering superior products and services, fostering innovation, and promoting sustainable practices.
              </p>
            </div>
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-forest-green/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-forest-green" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-deep-blue mb-4">Our Vision</h3>
              <p className="text-concrete-gray leading-relaxed">
                To establish Kaporta Investment Sierra Leone Limited as a trusted name in the construction, civil engineering, mining and manufacturing industry, recognized for excellence, reliability, and customer satisfaction. We aspire to be a catalyst for progress, driving positive change in Sierra Leone&apos;s infrastructure and construction landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-deep-blue text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center font-heading font-bold text-deep-blue text-sm">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading font-semibold text-lg text-charcoal">{item.title}</h3>
                  <p className="text-concrete-gray text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-soft-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-deep-blue text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-deep-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-deep-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{value.title}</h3>
                  <p className="text-concrete-gray text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="py-16 lg:py-24 bg-deep-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-12 w-12 text-construction-yellow mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Commitment to Quality & Safety</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            At Kaporta Investment Sierra Leone Limited, we prioritize quality assurance and safety in all our operations. Our products undergo stringent quality checks to ensure compliance with industry standards. We implement robust safety protocols to protect our workforce, clients, and the environment.
          </p>
          <Link
            href="/about/certifications"
            className="inline-flex items-center gap-2 px-6 py-3 bg-construction-yellow text-deep-blue font-heading font-semibold rounded-lg hover:bg-construction-yellow-dark transition-colors"
          >
            View Our Certifications <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
