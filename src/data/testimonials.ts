export interface Testimonial {
  id: number;
  name: string;
  organization: string;
  role: string;
  quote: string;
  projectType: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. James Koroma',
    organization: 'Sierra Leone Roads Authority',
    role: 'Project Director',
    quote: 'Kaporta Investment delivered our highway expansion project on time and under budget. Their professionalism and quality of work exceeded our expectations. We look forward to partnering with them on future infrastructure projects.',
    projectType: 'Infrastructure',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    organization: 'UNDP Sierra Leone',
    role: 'Country Programme Manager',
    quote: 'Working with Kaporta Group on our community infrastructure project was a seamless experience. Their commitment to quality and local development aligns perfectly with our mission.',
    projectType: 'Government',
    rating: 5,
  },
  {
    id: 3,
    name: 'Alhaji Kamara',
    organization: 'Sierra Mining Corp',
    role: 'Operations Manager',
    quote: 'The equipment rental and logistics services provided by Kaporta are second to none. Their fleet is well-maintained, operators are professional, and delivery is always on time.',
    projectType: 'Mining',
    rating: 5,
  },
  {
    id: 4,
    name: 'Isatu Bangura',
    organization: 'West Africa Development Corp',
    role: 'CEO',
    quote: 'Kaporta built our commercial complex ahead of schedule and the quality of construction is outstanding. They are our go-to partner for all construction needs in Sierra Leone.',
    projectType: 'Commercial',
    rating: 5,
  },
  {
    id: 5,
    name: 'Emmanuel Johnson',
    organization: 'Ministry of Works & Infrastructure',
    role: 'Deputy Minister',
    quote: 'Kaporta Investment has consistently demonstrated excellence in government construction projects. Their ability to source quality materials locally while maintaining international standards is commendable.',
    projectType: 'Government',
    rating: 5,
  },
  {
    id: 6,
    name: 'Adama Turay',
    organization: 'Freetown City Council',
    role: 'Head of Infrastructure',
    quote: 'From quarry supply to civil engineering, Kaporta provides end-to-end construction solutions. Their local expertise and commitment to community development makes them a valued partner.',
    projectType: 'Infrastructure',
    rating: 4,
  },
];
