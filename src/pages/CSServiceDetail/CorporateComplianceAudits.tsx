import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { ClipboardCheck } from 'lucide-react'
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
  title: 'CORPORATE COMPLIANCE, AUDITS & CERTIFICATIONS',
  description:
    'Maintaining corporate compliance and obtaining timely audits and certifications is critical for legal adherence, investor confidence, and smooth business operations. Our Corporate Compliance, Audits & Certifications services help businesses meet statutory requirements efficiently while minimizing risks.',
  icon: ClipboardCheck,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive compliance, audit, and certification services for complete regulatory adherence.',
      points: [
        'Preparation and filing of statutory returns and compliance reports with ROC',
        'Secretarial audits for listed and unlisted companies',
        'Annual compliance audits and corporate governance reviews',
        'Certification of compliance under Companies Act, SEBI regulations, and other applicable laws',
        'Advisory on regulatory requirements and risk mitigation',
        'Assistance with internal audits, financial audits, and operational compliance checks',
        'Certification for directors, officers, and corporate filings as required by law'
      ]
    },
    {
      heading: 'Why Choose Our Services?',
      content:
        'Our experienced Company Secretaries provide comprehensive compliance and audit support.',
      points: [
        'Experienced Company Secretaries with in-depth knowledge of corporate laws and regulations',
        'Comprehensive compliance and audit support for companies of all sizes',
        'Proactive approach to prevent penalties and legal risks',
        'Transparent, reliable, and timely execution of audit and certification processes'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures ongoing compliance support and legal adherence.',
      points: [
        'Consultation: Assess your company\'s compliance status and requirements',
        'Planning: Develop a compliance and audit calendar tailored to your business',
        'Execution: Conduct audits, prepare reports, and provide certifications',
        'Monitoring: Ongoing compliance support and advisory to maintain legal adherence'
      ]
    }
  ]
}

const CorporateComplianceAudits: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Corporate Compliance, Audits & Certifications Services | CS Experts</title>
        <meta name="description" content="Expert Company Secretary services for corporate compliance, statutory audits, secretarial audits, and certifications to ensure legal and regulatory adherence." />
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

export default CorporateComplianceAudits