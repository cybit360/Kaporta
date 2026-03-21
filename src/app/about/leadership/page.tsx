import type { Metadata } from 'next';
import { teamMembers } from '@/data/team';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership Team',
  description: 'Meet the leadership team behind Kaporta Group - experienced professionals driving construction excellence in Sierra Leone.',
};

export default function LeadershipPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Leadership Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Meet the experienced professionals leading Kaporta Group.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card-hover bg-soft-white rounded-xl overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-deep-blue to-charcoal flex items-center justify-center">
                  <User className="h-20 w-20 text-white/20" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-charcoal">{member.name}</h3>
                  <p className="text-construction-yellow-dark text-sm font-medium mb-3">{member.title}</p>
                  <p className="text-concrete-gray text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert) => (
                      <span key={cert} className="text-xs bg-deep-blue/10 text-deep-blue px-2 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
