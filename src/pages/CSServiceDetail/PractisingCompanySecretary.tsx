import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { UserCheck } from 'lucide-react'
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
  title: 'PRACTISING COMPANY SECRETARY',
  description:
    'A Practising Company Secretary (PCS) plays a crucial role in ensuring that your company complies with all statutory and regulatory requirements. Our PCS services provide professional guidance, compliance management, and advisory support to help your business operate smoothly and legally.',
  icon: UserCheck,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive PCS services covering all aspects of corporate compliance and advisory.',
      points: [
        'Secretarial audits for listed and unlisted companies',
        'Preparation and filing of annual returns and statutory forms with ROC',
        'Corporate governance advisory and compliance health checks',
        'Drafting resolutions, notices, and agendas for board and general meetings',
        'Advisory on mergers, acquisitions, and corporate restructuring',
        'Certification and compliance reporting under Companies Act, SEBI, and other laws',
        'Guidance on corporate law matters, shareholder agreements, and statutory obligations'
      ]
    },
    {
      heading: 'Why Choose Our Practising Company Secretary Services?',
      content:
        'Our experienced and qualified PCS provides comprehensive support and proactive monitoring.',
      points: [
        'Experienced and qualified PCS with deep knowledge of corporate laws',
        'Comprehensive support for compliance, audits, and legal advisory',
        'Proactive monitoring to avoid penalties and regulatory issues',
        'Transparent, reliable, and timely service delivery'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures continuous compliance and advisory support.',
      points: [
        'Consultation: Understand your company\'s compliance needs and challenges',
        'Planning: Prepare a customized compliance and audit calendar',
        'Execution: Conduct secretarial audits, file returns, and provide certifications',
        'Ongoing Support: Continuous advisory and monitoring to ensure compliance'
      ]
    }
  ]
}

const PractisingCompanySecretary: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Practising Company Secretary Services | Expert CS Compliance & Advisory</title>
        <meta name="description" content="Experienced Practising Company Secretary offering corporate compliance, ROC filings, secretarial audits, and advisory services to companies of all sizes." />
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

export default PractisingCompanySecretary