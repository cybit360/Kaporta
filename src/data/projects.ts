export interface Project {
  slug: string;
  title: string;
  location: string;
  category: 'infrastructure' | 'commercial' | 'government';
  client: string;
  timeline: string;
  description: string;
  scope: string[];
  outcome: string;
  testimonial?: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: 'freetown-highway-expansion',
    title: 'Freetown Highway Expansion',
    location: 'Freetown, Sierra Leone',
    category: 'government',
    client: 'Sierra Leone Roads Authority',
    timeline: 'Jan 2022 – Dec 2023',
    description: 'Major highway expansion project connecting Freetown to surrounding communities with improved road infrastructure.',
    scope: ['Road grading and leveling', 'Aggregate supply and laying', 'Drainage system installation', 'Bridge reinforcement'],
    outcome: 'Delivered on time with 20% cost savings. Improved travel time by 40% for over 50,000 daily commuters.',
    testimonial: 'Kaporta delivered exceptional quality on this critical infrastructure project. Their reliability and professionalism set the standard.',
    imageAlt: 'Freetown highway expansion construction site with heavy machinery',
  },
  {
    slug: 'waterloo-commercial-complex',
    title: 'Waterloo Commercial Complex',
    location: 'Waterloo, Sierra Leone',
    category: 'commercial',
    client: 'West Africa Development Corp',
    timeline: 'Mar 2021 – Sep 2022',
    description: 'Multi-story commercial building development with modern amenities and sustainable design principles.',
    scope: ['Foundation and structural work', 'Concrete production and supply', 'Electrical infrastructure', 'Interior finishing'],
    outcome: 'Completed 2 months ahead of schedule. The complex now houses 25+ businesses and created 200+ jobs.',
    imageAlt: 'Waterloo commercial complex building under construction',
  },
  {
    slug: 'bo-district-bridge',
    title: 'Bo District Bridge Construction',
    location: 'Bo District, Sierra Leone',
    category: 'infrastructure',
    client: 'Ministry of Works & Infrastructure',
    timeline: 'Jun 2020 – Mar 2021',
    description: 'Construction of a reinforced concrete bridge connecting rural communities to essential services and markets.',
    scope: ['Site preparation and excavation', 'Concrete foundation work', 'Steel reinforcement', 'Bridge deck construction'],
    outcome: 'Bridge serves 15,000+ residents, reducing travel time from 2 hours to 15 minutes during rainy season.',
    imageAlt: 'Completed bridge spanning river in Bo District',
  },
  {
    slug: 'lungi-airport-road',
    title: 'Lungi Airport Access Road',
    location: 'Lungi, Sierra Leone',
    category: 'government',
    client: 'Sierra Leone Airport Authority',
    timeline: 'Feb 2023 – Nov 2023',
    description: 'Rehabilitation and upgrade of the airport access road with improved drainage and lighting systems.',
    scope: ['Road rehabilitation', 'Aggregate supply', 'Drainage infrastructure', 'Equipment rental for earthworks'],
    outcome: 'Improved road quality and safety for airport travelers. Enhanced first-impression infrastructure for international visitors.',
    imageAlt: 'Lungi airport access road under rehabilitation',
  },
  {
    slug: 'makeni-government-offices',
    title: 'Makeni Government Office Complex',
    location: 'Makeni, Sierra Leone',
    category: 'government',
    client: 'Government of Sierra Leone',
    timeline: 'Aug 2019 – Jun 2020',
    description: 'Construction of modern government administrative offices with power infrastructure and landscaping.',
    scope: ['Building construction', 'Power system installation', 'Water supply setup', 'Landscaping and finishing'],
    outcome: 'Provided modern working facilities for 150+ government employees. Included hybrid power solution for reliable electricity.',
    imageAlt: 'Makeni government office complex exterior view',
  },
  {
    slug: 'kenema-mining-infrastructure',
    title: 'Kenema Mining Site Infrastructure',
    location: 'Kenema District, Sierra Leone',
    category: 'commercial',
    client: 'Sierra Mining Corp',
    timeline: 'Apr 2022 – Oct 2022',
    description: 'Complete site infrastructure setup for a mining operation including access roads, power systems, and equipment staging areas.',
    scope: ['Access road construction', 'Power generation setup', 'Equipment staging facilities', 'Haulage logistics support'],
    outcome: 'Enabled mining operations to commence on schedule. Provided ongoing logistics and equipment support.',
    imageAlt: 'Mining site infrastructure with equipment and access roads',
  },
];

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'commercial', label: 'Commercial Construction' },
  { value: 'government', label: 'Government Projects' },
];
