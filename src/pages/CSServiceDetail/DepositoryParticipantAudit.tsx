import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Database } from 'lucide-react'
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
  title: 'DEPOSITORY PARTICIPANT AUDIT',
  description:
    'Depository participants must comply with regulatory requirements set by NSDL, CDSL, and SEBI while maintaining proper internal controls. Our Depository Participant Audit services help ensure that your operations are fully compliant, risks are mitigated, and audits are completed efficiently.',
  icon: Database,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive depository participant audit services covering all regulatory requirements.',
      points: [
        'Conducting Depository Participant (DP) audits as per SEBI, NSDL, and CDSL guidelines',
        'Verification of internal controls, operational procedures, and risk management systems',
        'Compliance checks for account opening, transaction processing, and client servicing',
        'Assessment of records, documentation, and reporting standards',
        'Preparing audit reports with recommendations for improving compliance and operational efficiency',
        'Advisory for remedial actions and regulatory adherence'
      ]
    },
    {
      heading: 'Why Choose Our Depository Participant Audit Services?',
      content:
        'Our experienced Company Secretaries provide comprehensive audit coverage and risk mitigation.',
      points: [
        'Experienced Company Secretaries with expertise in depository participant operations and compliance',
        'Comprehensive audit covering NSDL, CDSL, and SEBI requirements',
        'Proactive identification of gaps and risk mitigation',
        'Reliable, timely, and confidential service'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures thorough audit and actionable recommendations.',
      points: [
        'Consultation: Understand your depository operations and compliance requirements',
        'Audit Planning: Prepare an audit checklist based on SEBI, NSDL, and CDSL guidelines',
        'Execution: Conduct on-site and documentation audits, verify internal controls',
        'Reporting: Deliver detailed audit reports with actionable recommendations for compliance improvement'
      ]
    }
  ]
}

const DepositoryParticipantAudit: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Depository Participant Audit Services | Compliance & Regulatory Support</title>
        <meta name="description" content="Expert Depository Participant Audit services for NSDL/CDSL compliance, internal controls, risk assessment, and regulatory filings for depository participants." />
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

export default DepositoryParticipantAudit