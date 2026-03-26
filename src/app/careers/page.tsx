import type { Metadata } from 'next';
import Link from 'next/link';
import { jobs } from '@/data/jobs';
import { MapPin, Briefcase, ArrowRight, GraduationCap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Kaporta Group team. Explore current openings in construction, engineering, logistics, and more.',
};

export default function CareersPage() {
  const fullTimeJobs = jobs.filter((j) => j.type === 'full-time' || j.type === 'contract');
  const internships = jobs.filter((j) => j.type === 'internship');

  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Careers at Kaporta Group</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Join our team and help build Sierra Leone&apos;s future.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16 bg-soft-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-deep-blue mb-8 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Growth Opportunities', description: 'We invest in our employees with training, mentorship, and career advancement programs.' },
              { icon: Briefcase, title: 'Meaningful Work', description: 'Contribute to real infrastructure projects that transform communities across Sierra Leone.' },
              { icon: GraduationCap, title: 'Learning Culture', description: 'Continuous skill development with certifications and hands-on experience.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-construction-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-construction-yellow-dark" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{item.title}</h3>
                  <p className="text-concrete-gray text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-deep-blue mb-8">Current Openings</h2>
          <div className="space-y-4">
            {fullTimeJobs.map((job) => (
              <div key={job.id} className="card-hover p-6 bg-soft-white rounded-xl border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-concrete-gray">
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <span className="inline-block px-2 py-0.5 bg-deep-blue/10 text-deep-blue text-xs rounded-full capitalize">{job.type}</span>
                  </div>
                  <p className="text-concrete-gray text-sm mt-2">{job.description}</p>
                </div>
                <Link
                  href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-green text-white font-heading font-semibold text-sm rounded-lg hover:bg-forest-green-dark transition-colors whitespace-nowrap"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      {internships.length > 0 && (
        <section className="py-16 bg-soft-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-deep-blue mb-8">Internship & Training Programs</h2>
            <div className="space-y-4">
              {internships.map((job) => (
                <div key={job.id} className="p-6 bg-white rounded-xl border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-charcoal">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-concrete-gray">
                      <span className="flex items-center gap-1"><GraduationCap className="h-4 w-4" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                    </div>
                    <p className="text-concrete-gray text-sm mt-2">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.requirements.map((req) => (
                        <span key={req} className="text-xs bg-construction-yellow/10 text-construction-yellow-dark px-2 py-1 rounded-full">{req}</span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-construction-yellow text-deep-blue font-heading font-semibold text-sm rounded-lg hover:bg-construction-yellow-dark transition-colors whitespace-nowrap"
                  >
                    Apply <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Equal Opportunity */}
      <section className="py-12 bg-deep-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Kaporta Investment Sierra Leone Limited is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
          </p>
        </div>
      </section>
    </>
  );
}
