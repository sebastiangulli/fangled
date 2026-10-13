import { Flag, Globe2, Target, UserRound } from 'lucide-react'

export const COMPANY = {
  name: 'Fangled Group',
  fullName: 'Fangled Tech International ©',
  phone: '888.427.5609',
  phoneHref: 'tel:+18884275609',
  email: 'info@fangledtech.com',
  location: 'Moreland Hills, Ohio',
}

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/5344408' },
  { label: 'Facebook', href: 'https://www.facebook.com/FangledInternational/' },
  { label: 'X', href: 'https://twitter.com/Fangled_Int' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCp7ZKlIqWN9I68OXFHCerWQ' },
]

export const YOUTUBE = SOCIAL[3].href

export const PRACTICES = [
  {
    title: 'Marketing & sales consulting',
    body: 'Research who buys and why, sharpen the value proposition, and build a go-to-market plan your sales team can run.',
    to: '/marketing-and-sales-consulting',
    link: 'Explore marketing & sales',
    icon: Target,
  },
  {
    title: 'Global trade & sourcing',
    body: 'Test market viability abroad, pick the right channel, and source products, materials, and manufacturers.',
    to: '/global-trade-and-sourcing',
    link: 'Explore global trade',
    icon: Globe2,
  },
  {
    title: 'Fractional CMO',
    body: 'A C-level marketing executive inside your business, for a fraction of the cost of a full-time hire.',
    to: '/about#fractional-cmo',
    link: 'Take the fit check',
    icon: UserRound,
  },
  {
    title: 'Beyond growth',
    body: 'Exit planning, plus target-company and market research that surfaces red flags and opportunities for PE and M&A teams.',
    to: '/about#beyond-growth',
    link: 'Read about exit planning',
    icon: Flag,
  },
]

export const METHOD = [
  {
    title: 'Listen to the market',
    body: 'Voice-of-customer, distributor, and dealer studies reveal what buyers actually value, and who your ideal segments are.',
  },
  {
    title: 'Prove the value',
    body: 'Those findings become a clear value proposition and a reason to choose you over every alternative.',
  },
  {
    title: 'Activate the playbook',
    body: 'Marketing and sales get one data-driven go-to-market plan, and move on it together.',
  },
]

export const DISCIPLINES = [
  'Positioning',
  'Market analysis',
  'Path-to-purchase evaluation',
  'Predictive sales modeling',
  'Brand development',
  'Marketing activation',
]

export const CMO_VS_AGENCY = [
  { row: 'Role', agency: 'A service vendor hired for tasks', cmo: 'A fiscally responsible member of your executive team' },
  { row: 'Owns', agency: 'Deliverables on a brief', cmo: 'The overall strategy and the marketing budget' },
  { row: 'Delivers', agency: 'Tactical materials', cmo: 'The go-to-market playbook' },
  { row: 'Team', agency: 'Their own account staff', cmo: 'Leads your marketing staff and vendors' },
  { row: 'Day to day', agency: 'Outside your operations', cmo: 'Inside your operations' },
]

export const CMO_CAPABILITIES = [
  'Technology review and implementation: CRM, marketing automation, web design, and SEO',
  'Lead generation and nurturing programs',
  'Leadership workshops',
  'Voice of the market, channel partners, and the competitive landscape',
  'The overall go-to-market playbook',
]

export const BEYOND_GROWTH = [
  {
    title: 'Exit planning',
    body: 'Prepare the business, the brand, and the customer base so the value you built is the value a buyer sees.',
  },
  {
    title: 'Research for PE and M&A',
    body: 'In-depth target-company and market research, including customer diligence, that surfaces red flags and opportunities before the deal closes.',
  },
]

export const PODCASTS = [
  { title: 'Exit Your Way Business Round Table: Customer Diligence', duration: '25 min' },
  { title: 'Strategic Marketing is Changing, What You Need to Know', duration: '48 min' },
  { title: 'Tyler Lindley Podcast: Effective Sales Organization Management', duration: '27 min' },
  { title: 'The Exit Your Way Round Table', duration: '48 min' },
  { title: "Monte Clark's Brilliant LinkedIn Podcast", duration: '10 min' },
  { title: 'Fractional Chief Marketing Officers Provide Top Skills & Performance at a Fraction of the Cost', duration: 'Video' },
]

export const SERVICES = {
  marketing: [
    'Marketing campaign development and execution',
    'Go-To-Market playbook development',
    'Strategic product launch and development',
    'Strategic prospecting and lead nurturing programs',
    'Total branding & rebranding initiatives',
    'Voice of consumer, distributor, or dealer studies',
    'Comprehensive qualitative and quantitative market research',
    'Graphic design and collateral development',
    'Public relations, advertising, and media management',
    'Event and trade show design and management',
    'Total project management',
  ],
  fractional: [
    'An embedded C-Level Marketing Executive when a full-time executive is cost prohibitive',
  ],
  digital: [
    'Web site creation, updates, and development including e-commerce',
    'Web site management including customer service and client management',
    'Comprehensive digital campaigns',
    'Social media campaign development and management',
  ],
  sales: [
    'CRM (Salesforce or alternative) implementation, training, and management',
    'Sales training and coaching',
    'Candidate screening and evaluation',
    'Strategic campaign development',
    'Inside sales call center management',
  ],
}

export const GLOBAL_STRATEGY = [
  'Market viability study',
  'Distribution vs. Representatives vs. Direct sales vs. Foreign presence',
  'Multicultural message evaluation',
  'Regulatory parameters',
  'Pricing and logistical strategies',
  'Strategic protection of intellectual property and legal issues',
]

export const GLOBAL_SOURCE = [
  'Source products, raw materials, and components',
  'Source contract manufacturers',
  'Manage inbound logistics and regulatory issues',
]

export const FCMO_PAIN_POINTS = [
  'Your Sales team is often distracted from actively selling by trying to create their own materials or being bogged down in marketing admin.',
  'You lack inside expertise to gather and interpret market data.',
  'You have had issues recruiting a seasoned professional.',
  'Your marketing needs have peaks and valleys you wish could scale without hiring and firing.',
  'You have had communication issues and financial creep managing agencies not involved in daily operations.',
  'You plan to eventually hire a VP Marketing or CMO but need a head start on your go-to-market plan.',
  'You have several business units that do not require an individual marketing executive for each.',
  'You just purchased or acquired a business that requires a jump start, rebranding, or turnaround strategy.',
]

export const PRODUCTS: Record<string, {
  title: string
  subtitle: string
  kicker: string
  intro: string
  sections: { heading: string; body: string; bullets?: string[] }[]
}> = {
  'ph-neutral-cleaners': {
    title: 'pH Neutral Cleaning Technology for Industrial Applications',
    subtitle: 'Our products make dangerous acid & alkaline cleaners obsolete',
    kicker: 'Advanced Chemistry',
    intro:
      'We formulate pH neutral cleaners that outperform and replace hazardous alkaline and acidic industrial cleaners used to prepare surfaces for coating and many other cleaning applications. Our formulas enhance employee and environmental safety, reduce maintenance on equipment, and save money across a limitless range of industrial applications including metal parts washing, floor cleaning, equipment maintenance, surface preparation, and more.',
    sections: [
      {
        heading: 'Finish Quality and Adhesion',
        body: '',
        bullets: [
          'Opened nooks/pores or receptor sights create better tooth for paint',
          'Soils completely removed leads to better adhesion',
          'No etching of surfaces necessary for powder coating to bond properly',
          'Enhanced drying minimizes water spots',
        ],
      },
      {
        heading: 'Safety / Environment',
        body: '',
        bullets: [
          'Non hazmat materials are safer for employees',
          'No need for special hazmat shipping or material handling',
          'Neutral cleaners should never be dumped directly into the environment',
        ],
      },
      {
        heading: 'Eased Regulatory Compliance',
        body: '',
        bullets: [
          'No need for hazmat reporting or compliance (SARA title III)',
          'Can be approved for non-hazmat removal depending on local municipality rules',
          'Reduced need for hazmat clean-up equipment and materials',
          'No need for hazmat specialized material handling equipment',
        ],
      },
      {
        heading: 'Lower Cost',
        body: '',
        bullets: [
          'Pre-treatment equipment can cost significantly less because fewer pre-treatment steps are needed',
          'Increased efficiency = lower cost',
          'Less machinery = smaller production footprint',
          'No hazmat disposal nor shipping costs',
          'Lower chemical inventory',
        ],
      },
      {
        heading: 'Application Processes',
        body: 'Our pH-neutral cleaners work across spray washing, immersion washing, vibratory burr removal, and pressure washing — typically from 130°F to 200°F. Existing alkaline washers can usually be neutralized to transition to pH-neutral products.',
        bullets: [],
      },
    ],
  },
  'drum-and-ibc-mixers': {
    title: 'Drum, Pail, & IBC Mixers Featuring 3D Mixing Technology',
    subtitle: 'A revolution in advanced mixing technology',
    kicker: '3D Mixing Technology',
    intro:
      '3D MIXING occurs when we equalize the 3 velocity vectors (radial, circular, and vertical) eliminating air inducing vortexes and evenly mixing and blending the total volume of materials in a container.',
    sections: [
      {
        heading: 'The Solution Replacing Existing Ineffective Blades',
        body:
          'Fixed pitch blades create strong vertical velocity vectors drawing in air and leaving materials on the bottom. Impeller-style blades promote vertical movement but lack radial and circular motion, drawing unwanted air into the mix. Radial blades create mostly horizontal motion with almost no vertical or circular mixing. Our 3D approach solves all three.',
        bullets: [],
      },
      {
        heading: 'EvenMix™ Blade Designs',
        body: '',
        bullets: [
          'Blade attends entire container volume',
          'Variable Pitch – 90 degree to 30 degrees creates 3D flow',
          'Bottom pump eliminates dead zones',
          'Designed for strength and low-weight',
          'Low drag for efficient power transfer from EvenMix™ motor',
          'Round shaft with square or hex drive end',
        ],
      },
      {
        heading: 'EvenMix™ Benefits',
        body: '',
        bullets: [
          'No air entrainment',
          'Mixes evenly throughout the container and at lower speeds',
          'Faster mixing (low cycle time)',
          'Will not bend in cases of drum collapse',
          'No need for welded pin on drum bottom',
          'Compatible with existing drives (square drives)',
          'Robust mixing in a wide range of viscosity',
          'Cost competitive',
        ],
      },
      {
        heading: '3D IBC Mixers',
        body: '',
        bullets: [
          'Can be installed prior to shipping IBC or inserted at the mixing location',
          '16” 3D mixing blade provides superior mixing performance',
          'Advanced folding blade fits through 6” center bung',
          'Pinless shaft guide system modified to easily fit IBC center cap',
          'Passed UN certification testing',
          'Seals lid to avoid contamination',
        ],
      },
      {
        heading: 'EvenMix™ Mixer Motors',
        body: '',
        bullets: [
          'Air or electric drives',
          'Designed for use with EvenMix™ and others',
          'Lightweight precision engineered for longer life and durability',
          'Easy to couple and drive mixers',
          '160 RPM with only 13 CFM (air) or 4 watts (electric)',
          'Oil free for use with paints and other sensitive materials',
          'Comprehensively field tested',
          'Designed and manufactured in USA by EvenMix™',
        ],
      },
    ],
  },
}

export const PRIVACY_PARAGRAPHS = [
  {
    heading: 'Your privacy is critically important to us.',
    body:
      'Fangled Tech International © D.B.A. Fangled Group is located in Moreland Hills, Ohio, and is reachable by email at info@fangledtech.com and telephone at (888) 427-5609. It is Fangled Tech’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to fangledtech.com (hereinafter, “us”, “we”, or “fangledgroup.com”). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.',
  },
  {
    heading: 'Website Visitors',
    body:
      'Like most website operators, Fangled Tech International © collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as browser type, language preference, referring site, and the date and time of each visitor request. Fangled Group also collects potentially personally-identifying information like IP addresses for logged in users and for users leaving comments.',
  },
  {
    heading: 'Gathering of Personally-Identifying Information',
    body:
      'Certain visitors to Fangled Group’s websites choose to interact with Fangled Group in ways that require us to gather personally-identifying information. The amount and type of information that Fangled Group gathers depends on the nature of the interaction. For example, we ask visitors who sign up for communications to provide a name and email address.',
  },
  {
    heading: 'Security',
    body:
      'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.',
  },
  {
    heading: 'Links To External Sites',
    body:
      'Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.',
  },
  {
    heading: 'Aggregated Statistics',
    body:
      'Fangled Tech International © may collect statistics about the behavior of visitors to its website. Fangled Tech International © may display this information publicly or provide it to others. However, Fangled Tech does not disclose your personally-identifying information.',
  },
  {
    heading: 'Cookies',
    body:
      'To enrich and perfect your online experience, Fangled Tech International © uses “Cookies”, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.',
  },
  {
    heading: 'Privacy Policy Changes',
    body:
      'Although most changes are likely to be minor, Fangled Group may change its Privacy Policy from time to time, and in Fangled Tech’s sole discretion. Fangled Tech encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.',
  },
]

export const FAQ = [
  {
    q: 'What is a Fractional CMO?',
    a: 'A C-level marketing executive who works inside your company part-time. They own the marketing strategy and budget, lead your team and vendors, and deliver the go-to-market playbook, for a fraction of the cost of a full-time hire.',
  },
  {
    q: 'How is that different from hiring an agency?',
    a: 'An agency is a vendor hired for specific tasks and sits outside your daily operations. A Fractional CMO is a fiscally responsible member of your executive team, accountable for the overall strategy, not just the materials.',
  },
  {
    q: 'Do you work with companies outside the U.S.?',
    a: 'Yes. We help U.S. companies enter markets abroad and source products, materials, and manufacturers internationally, with contacts and resources in the U.S. and overseas.',
  },
  {
    q: 'Can you help us prepare to sell the business?',
    a: 'Yes. We support exit planning, and we run target-company and market research, including customer diligence, for private equity firms and M&A professionals.',
  },
  {
    q: 'What does the first conversation look like?',
    a: 'A free strategy call. No pitch deck: we ask about your company, your market, and what you’re trying to grow, then tell you honestly whether and where we can help.',
  },
]

export const PRODUCT_CARDS = [
  {
    slug: 'ph-neutral-cleaners',
    label: 'Advanced chemistry',
    title: 'pH-neutral cleaning technology',
    body: 'Industrial cleaners that replace hazardous acid and alkaline chemistry in parts washing, surface prep, and maintenance.',
  },
  {
    slug: 'drum-and-ibc-mixers',
    label: '3D mixing technology',
    title: 'Drum, pail, and IBC mixers',
    body: 'EvenMix™ blades equalize vertical, radial, and circular flow, so the whole container blends with no air pulled in.',
  },
]

export const CAPABILITIES = [
  'Positioning',
  'Market research',
  'Voice of customer studies',
  'Go-to-market playbooks',
  'Fractional CMO',
  'Product launch',
  'Branding & rebranding',
  'CRM implementation',
  'Sales training',
  'Trade shows & events',
  'Market entry',
  'Global sourcing',
  'Exit planning',
  'PE & M&A research',
]
