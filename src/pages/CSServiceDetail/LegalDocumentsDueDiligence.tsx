import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { FileText } from 'lucide-react'
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
  title: 'LEGAL DOCUMENTS AND DUE DILIGENCE',
  description:
    'Proper legal documentation and thorough due diligence are crucial for mitigating risks, ensuring compliance, and making informed business decisions. Our Legal Documents and Due Diligence services help businesses manage contracts, agreements, and corporate records while providing a detailed review of legal and financial matters for smooth transactions and operations.',
  icon: FileText,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive legal documentation and due diligence services for all business needs.',
      points: [
        'Drafting, reviewing, and vetting agreements and contracts, including NDAs, MoUs, and shareholder agreements',
        'Due diligence for mergers, acquisitions, fundraising, and partnerships',
        'Verification of statutory documents, licenses, and corporate records',
        'Legal advisory on compliance, corporate governance, and risk management',
        'Support in negotiations and documentation during business transactions',
        'Ensuring alignment with Companies Act, SEBI regulations, and other applicable laws'
      ]
    },
    {
      heading: 'Why Choose Our Legal and Due Diligence Services?',
      content:
        'Our experienced Company Secretaries provide detailed review and documentation to prevent legal risks.',
      points: [
        'Experienced Company Secretaries with expertise in corporate law and compliance',
        'Detailed review and documentation to prevent legal risks',
        'End-to-end support for transactions, mergers, acquisitions, and corporate agreements',
        'Timely, reliable, and confidential services tailored to your business needs'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures thorough legal review and risk mitigation.',
      points: [
        'Consultation: Understand your business objectives and legal requirements',
        'Document Review: Examine and verify all relevant legal and statutory documents',
        'Due Diligence: Conduct thorough legal, financial, and regulatory assessments',
        'Execution: Draft, finalize, and provide recommendations for risk mitigation'
      ]
    }
  ]
}

const LegalDocumentsDueDiligence: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Legal Documents and Due Diligence Services | Corporate Compliance Experts</title>
        <meta name="description" content="Expert Company Secretary services for drafting, reviewing, and managing legal documents, agreements, contracts, and conducting due diligence for businesses." />
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

export default LegalDocumentsDueDiligence