import { Mountain, Factory, Truck, Building2, Zap, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  overview: string;
  keyBenefits: string[];
  targetCustomers: string[];
  cta: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'quarrying-mining',
    title: 'Quarrying & Mining',
    shortTitle: 'Quarry',
    icon: Mountain,
    description: 'We produce premium-grade crushed stones, aggregates, and precast concrete blocks from our state-of-the-art quarry and concrete crushing plant.',
    overview: 'Kaporta Investment Sierra Leone Limited operates a state-of-the-art quarry and concrete crushing plant, allowing us to produce high-quality crushed quarry stones, aggregates, and concrete products. Our materials are sourced responsibly and processed using advanced techniques to meet the specific needs of our clients in various construction projects.',
    keyBenefits: [
      'Premium-grade crushed stones and aggregates',
      'State-of-the-art crushing plant technology',
      'Responsibly sourced materials',
      'Custom sizing and grading available',
      'Competitive bulk pricing',
      'Reliable supply chain for large projects',
    ],
    targetCustomers: ['Government agencies', 'Construction firms', 'Road builders', 'Mining companies', 'Real estate developers'],
    cta: 'Contact Us for Quarry Supply Contracts',
    features: ['Crushed stone production', 'Aggregate processing', 'Precast concrete blocks', 'Custom material sizing', 'Bulk supply contracts', 'Quality testing & certification'],
  },
  {
    slug: 'concrete-production',
    title: 'Concrete Production',
    shortTitle: 'Concrete',
    icon: Factory,
    description: 'Industrial-grade concrete production plants ensuring strength, durability, and compliance with international standards.',
    overview: 'Our industrial-grade concrete production facilities produce high-quality concrete products that meet both local and international standards. From ready-mix concrete to precast elements, we ensure every batch meets strict quality controls for strength and durability.',
    keyBenefits: [
      'Industrial-grade production capacity',
      'Strict quality control processes',
      'Multiple concrete mix designs',
      'On-time delivery to project sites',
      'Compliance with international standards',
      'Technical support and consultation',
    ],
    targetCustomers: ['Construction companies', 'Government projects', 'Commercial developers', 'Infrastructure contractors'],
    cta: 'Request a Concrete Quote',
    features: ['Ready-mix concrete', 'Precast concrete products', 'Concrete blocks', 'Custom mix designs', 'Quality testing', 'Site delivery'],
  },
  {
    slug: 'haulage-logistics',
    title: 'Haulage & Logistics',
    shortTitle: 'Haulage',
    icon: Truck,
    description: 'Reliable material and heavy-equipment transport across Sierra Leone with our fleet of well-maintained vehicles.',
    overview: 'We offer comprehensive haulage and logistics services, specializing in the transportation of construction materials, equipment, and other goods. With a fleet of well-maintained vehicles backed by experienced drivers and a highly specialized maintenance team, we ensure efficient and timely delivery to our customers\' desired locations. Our logistics solutions are tailored to meet the unique requirements of each project, ensuring seamless coordination and cost-effective transportation.',
    keyBenefits: [
      'Fleet of well-maintained heavy vehicles',
      'Experienced and licensed drivers',
      'Nationwide coverage across Sierra Leone',
      'Cost-effective transportation solutions',
      'Real-time tracking and coordination',
      'Specialized heavy-load transport',
    ],
    targetCustomers: ['Construction firms', 'Mining companies', 'NGOs', 'Government agencies', 'Manufacturing companies'],
    cta: 'Partner With Our Logistics Team',
    features: ['Material transport', 'Heavy equipment haulage', 'Bulk delivery', 'Project logistics coordination', 'Fleet management', 'Cross-country transport'],
  },
  {
    slug: 'civil-engineering',
    title: 'Civil Engineering & Construction',
    shortTitle: 'Civil Engineering',
    icon: Building2,
    description: 'Complete infrastructure projects — from foundations to final structure — handled by our expert architects and engineers.',
    overview: 'Kaporta Investment Sierra Leone Limited specializes in civil and engineering construction projects of various scales. From infrastructure development to building construction, our experienced team of engineers, architects, and skilled workers delivers projects to the highest standards. We combine innovative solutions, quality craftsmanship, and adherence to timelines to ensure client satisfaction.',
    keyBenefits: [
      'Experienced engineers and architects',
      'Full project lifecycle management',
      'Quality craftsmanship guaranteed',
      'On-time project delivery',
      'Compliance with safety standards',
      'Cost-effective solutions',
    ],
    targetCustomers: ['Government agencies', 'Commercial developers', 'NGOs', 'International organizations', 'Private clients'],
    cta: 'View Our Past Projects',
    features: ['Road construction', 'Bridge building', 'Commercial buildings', 'Residential construction', 'Infrastructure development', 'Project management'],
  },
  {
    slug: 'power-energy',
    title: 'Power & Energy Solutions',
    shortTitle: 'Power',
    icon: Zap,
    description: 'Hybrid energy solutions: generators, solar accessories, and full system setup for uninterrupted operations.',
    overview: 'Kaporta Investment Sierra Leone Limited understands the importance of reliable power supply in the construction, mining, and manufacturing industry. We provide hybrid power solutions, including generators and electrical accessories, to ensure uninterrupted low-cost power for our clients\' sites. Our team of skilled Electrical Power Engineers and technicians assesses our clients\' power requirements, installs equipment, and provides the needed maintenance services to keep smooth running operations.',
    keyBenefits: [
      'Hybrid power solutions (generator + solar)',
      'Skilled electrical engineers on staff',
      'Custom power assessments',
      'Installation and maintenance services',
      'Cost-effective energy solutions',
      '24/7 emergency support',
    ],
    targetCustomers: ['Construction sites', 'Mining operations', 'Manufacturing plants', 'Commercial facilities', 'Rural communities'],
    cta: 'Inquire About Energy Solutions',
    features: ['Generator supply & setup', 'Solar panel installation', 'Hybrid power systems', 'Power assessment', 'Maintenance contracts', 'Emergency power support'],
  },
  {
    slug: 'equipment-rental',
    title: 'Equipment Rental',
    shortTitle: 'Equipment',
    icon: Wrench,
    description: 'Earth-moving machines including cranes, dozers, and excavators — operated and maintained by our trained professionals.',
    overview: 'We offer a wide range of construction/earthworks equipment for hire to cater to the diverse needs of our clients. Our inventory includes excavators, loaders, cranes, bulldozers, and more. We ensure that our equipment is regularly maintained and operated by trained professionals. Additionally, we provide equipment management services, assisting our clients in optimizing equipment utilization and minimizing downtime.',
    keyBenefits: [
      'Wide range of heavy equipment',
      'Regularly maintained machinery',
      'Trained and certified operators',
      'Flexible rental periods',
      'Equipment management services',
      'Competitive rental rates',
    ],
    targetCustomers: ['Construction companies', 'Mining firms', 'Government projects', 'Road builders', 'Developers'],
    cta: 'Book Your Equipment Now',
    features: ['Excavators', 'Bulldozers', 'Loaders', 'Cranes', 'Dump trucks', 'Operated equipment hire'],
  },
];
