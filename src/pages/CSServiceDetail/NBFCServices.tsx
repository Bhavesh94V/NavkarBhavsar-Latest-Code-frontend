import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Landmark } from 'lucide-react'
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
  title: 'NBFC COMPLIANCE & ADVISORY',
  description:
    'Non-Banking Financial Companies (NBFCs) operate under strict regulatory frameworks set by RBI and the Companies Act. Our NBFC Compliance & Advisory services help businesses meet all statutory, regulatory, and corporate governance requirements while ensuring smooth operations and risk mitigation.',
  icon: Landmark,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive NBFC compliance and advisory services covering all regulatory requirements.',
      points: [
        'NBFC registration and RBI approval assistance',
        'Preparation and filing of statutory returns and compliance reports',
        'Advisory on corporate governance, board procedures, and internal controls',
        'Compliance with RBI regulations for lending, deposits, and financial reporting',
        'Conducting audits, secretarial audits, and certifications as required',
        'Advisory on mergers, acquisitions, and restructuring for NBFCs',
        'Risk management and regulatory reporting support'
      ]
    },
    {
      heading: 'Why Choose Our NBFC Compliance Services?',
      content:
        'Our experienced Company Secretaries provide end-to-end compliance support and proactive risk management.',
      points: [
        'Experienced Company Secretaries with expertise in NBFC regulations and corporate law',
        'End-to-end compliance support from registration to ongoing regulatory filings',
        'Proactive risk management and governance advisory',
        'Transparent, timely, and reliable services for all sizes of NBFCs'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures continuous regulatory adherence and proactive advisory.',
      points: [
        'Consultation: Understand your NBFC\'s business model and regulatory requirements',
        'Planning: Develop a customized compliance and audit calendar',
        'Execution: Prepare and file returns, conduct audits, and ensure RBI compliance',
        'Monitoring: Provide ongoing advisory to maintain continuous regulatory adherence'
      ]
    }
  ]
}

const NBFCServices: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>NBFC Compliance & Advisory Services | RBI & Corporate Law Experts</title>
        <meta name="description" content="Expert Company Secretary services for NBFC registration, RBI compliance, corporate governance, audits, and regulatory advisory for Non-Banking Financial Companies." />
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

export default NBFCServices