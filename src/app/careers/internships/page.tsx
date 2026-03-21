import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap, BookOpen, Wrench, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Internship & Training Programs',
  description: 'Explore internship and training opportunities at Kaporta Group. Build your career in construction and engineering.',
};

export default function InternshipsPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Internship & Training Programs</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Grow your career with Kaporta Group.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-deep-blue mb-6">Invest in Your Future</h2>
            <p className="text-concrete-gray leading-relaxed mb-8">
              Kaporta Group is committed to developing the next generation of construction and engineering professionals in Sierra Leone. Our internship and training programs provide hands-on experience on real projects, mentorship from experienced leaders, and a pathway to a rewarding career.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: GraduationCap, title: 'Engineering Internship', description: '6-month program for engineering students and recent graduates. Work alongside our senior engineers on active construction projects.' },
                { icon: Wrench, title: 'Technical Training', description: 'Equipment operation, maintenance, and safety certification programs for aspiring operators and technicians.' },
                { icon: BookOpen, title: 'Management Development', description: 'Project management and leadership training for employees advancing into supervisory roles.' },
                { icon: Users, title: 'Community Youth Program', description: 'Skills training for young people in construction trades including masonry, welding, and electrical work.' },
              ].map((program) => {
                const Icon = program.icon;
                return (
                  <div key={program.title} className="flex gap-4 p-6 bg-soft-white rounded-xl">
                    <div className="w-12 h-12 bg-construction-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-construction-yellow-dark" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-charcoal">{program.title}</h3>
                      <p className="text-concrete-gray text-sm mt-1">{program.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-deep-blue rounded-2xl p-8 text-center">
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">Contact us to learn more about current openings and how to apply.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-construction-yellow text-deep-blue font-heading font-semibold rounded-lg hover:bg-construction-yellow-dark transition-colors"
              >
                Apply Now <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
