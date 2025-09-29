import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

type ServiceProps = {
  title: string
  description: string
  intro?: string[]
  points?: string[]
  sections?: {
    heading: string
    content: string
    points?: string[]
  }[]
  icon: React.ElementType
}

const service: ServiceProps = {
  title: 'COMPANY LAW & SECRETARIAL COMPLIANCE',
  description:
    'Every company is required to follow corporate laws and secretarial compliances as prescribed under the Companies Act, 2013 and other applicable regulations. Non-compliance can lead to penalties, legal hurdles, and even reputational damage. Our Company Law & Secretarial Compliance services help businesses remain fully compliant while focusing on growth.',
  icon: Shield,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive secretarial compliance services to ensure your company meets all regulatory requirements.',
      points: [
        'Preparation and filing of annual returns and statutory forms with ROC',
        'Maintenance of statutory registers, records and minute books',
        'Drafting of notices, agendas and resolutions for board and general meetings',
        'Event-based compliances such as change in directors, share capital, office address and charges',
        'Certification of compliance under Companies Act and SEBI regulations',
        'Secretarial audit for listed and large companies',
        'Corporate governance advisory and compliance health checks'
      ]
    },
    {
      heading: 'Why Choose Us?',
      content:
        'Our expert Company Secretaries provide reliable and proactive compliance management.',
      points: [
        'Expert Company Secretaries with in-depth knowledge of corporate laws',
        'Comprehensive support for both routine and event-based compliances',
        'Proactive compliance monitoring to avoid penalties and delays',
        'Transparent, reliable and time-bound services'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures complete compliance management and ongoing support.',
      points: [
        'Initial Review: Assessing your company\'s current compliance status',
        'Planning: Creating a customized compliance calendar',
        'Execution: Preparing documents, filing returns and maintaining records',
        'Monitoring: Providing ongoing support and compliance updates'
      ]
    }
  ]
}

const CompanyLawCompliance: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Company Law & Secretarial Compliance Services | ROC Filings & Governance</title>
        <meta name="description" content="Expert Company Secretary services for secretarial compliance, ROC filings, corporate governance and secretarial audits. Stay compliant with ease." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
        <div className='container mx-auto px-6 relative z-10'>
          <Icon className='w-16 h-16 mx-auto mb-6 text-gray-200' />
          <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6'>
            {service.title}
          </h1>
          <p className='text-lg md:text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto'>
            {service.description}
          </p>
          <Link
            to="/services"
            className="inline-block mt-4 px-6 py-2 bg-white text-gray-900 font-medium rounded-full shadow hover:bg-gray-200 transition"
          >
            ← Back to Services
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6 max-w-5xl text-lg text-muted-foreground'>
          {service.sections?.map((sec, index) => (
            <div key={index} className='mb-12'>
              <h2 className='text-2xl font-bold text-black mb-3'>
                {sec.heading}
              </h2>
              <p className='mb-6'>{sec.content}</p>

              {sec.points && (
                <ul className='space-y-3'>
                  {sec.points.map((point, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-2 text-black/80'
                    >
                      <span className='text-primary font-bold'>➜</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CompanyLawCompliance