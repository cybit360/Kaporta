export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Civil Engineer',
    department: 'Engineering',
    location: 'Freetown, Sierra Leone',
    type: 'full-time',
    description: 'Lead civil engineering projects including road construction, bridge building, and commercial developments.',
    requirements: ['BSc in Civil Engineering', '5+ years experience', 'Project management skills', 'Valid driving license'],
  },
  {
    id: 2,
    title: 'Heavy Equipment Operator',
    department: 'Operations',
    location: 'Waterloo, Sierra Leone',
    type: 'full-time',
    description: 'Operate excavators, bulldozers, and loaders on construction and quarry sites.',
    requirements: ['Equipment operation certification', '3+ years experience', 'Safety training completed', 'Physical fitness'],
  },
  {
    id: 3,
    title: 'Logistics Coordinator',
    department: 'Logistics',
    location: 'Freetown, Sierra Leone',
    type: 'full-time',
    description: 'Coordinate material transport and fleet operations across project sites nationwide.',
    requirements: ['Diploma in Logistics or Supply Chain', '2+ years experience', 'Strong organizational skills', 'Computer proficiency'],
  },
  {
    id: 4,
    title: 'Electrical Power Engineer',
    department: 'Power & Energy',
    location: 'Freetown, Sierra Leone',
    type: 'contract',
    description: 'Design and implement hybrid power solutions for construction and mining sites.',
    requirements: ['BSc Electrical Engineering', 'Solar energy experience preferred', 'Generator maintenance expertise', '3+ years experience'],
  },
  {
    id: 5,
    title: 'Graduate Engineering Intern',
    department: 'Engineering',
    location: 'Freetown, Sierra Leone',
    type: 'internship',
    description: 'Join our engineering team for a 6-month hands-on internship program working on real construction projects.',
    requirements: ['Currently enrolled or recent graduate in Engineering', 'Strong academic record', 'Willingness to learn', 'Team player'],
  },
];
