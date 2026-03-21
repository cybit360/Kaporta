export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  certifications: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Mohamed Kaporta',
    title: 'Chief Executive Officer & Founder',
    bio: 'With over 18 years of experience in construction and logistics in Sierra Leone, Mohamed founded Kaporta Investment in 2008. His vision of building Sierra Leone\'s infrastructure through reliable, quality-driven services has grown the company into one of the nation\'s most trusted construction firms.',
    certifications: ['Business Administration', 'Project Management Professional'],
  },
  {
    name: 'Aminata Sesay',
    title: 'Chief Operations Officer',
    bio: 'Aminata oversees day-to-day operations across all service divisions. With 12+ years in construction management, she ensures projects are delivered on time, within budget, and to the highest safety standards.',
    certifications: ['Construction Management', 'OSHA Safety Certified'],
  },
  {
    name: 'Ibrahim Conteh',
    title: 'Head of Civil Engineering',
    bio: 'Ibrahim leads our civil engineering and construction division with expertise in road construction, bridge building, and commercial developments. He holds a degree in Civil Engineering and has managed over 30 major projects across Sierra Leone.',
    certifications: ['BSc Civil Engineering', 'Structural Engineering Specialist'],
  },
  {
    name: 'Fatmata Kamara',
    title: 'Head of Logistics & Fleet Management',
    bio: 'Fatmata manages our fleet of heavy vehicles and coordinates logistics operations nationwide. Her expertise in supply chain management ensures efficient and cost-effective material transport for all projects.',
    certifications: ['Supply Chain Management', 'Fleet Operations Certified'],
  },
  {
    name: 'Alpha Bangura',
    title: 'Chief Engineer — Power & Energy',
    bio: 'Alpha leads our power and energy solutions division, specializing in hybrid power systems for construction and mining sites. His team of electrical engineers provides installation, maintenance, and emergency support services.',
    certifications: ['Electrical Engineering', 'Solar Energy Systems Certified'],
  },
  {
    name: 'Mariama Jalloh',
    title: 'Head of Finance & Administration',
    bio: 'Mariama manages financial operations, procurement, and administrative functions. She ensures fiscal responsibility and transparency across all company operations.',
    certifications: ['Chartered Accountant', 'Financial Management'],
  },
];
