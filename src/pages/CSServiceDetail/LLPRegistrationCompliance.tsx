import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Users } from 'lucide-react'
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
  title: 'LLP REGISTRATION & COMPLIANCE',
  description:
    'Limited Liability Partnership (LLP) is a popular business structure that combines the benefits of a partnership and a company. Our LLP Registration & Compliance services help entrepreneurs and businesses register their LLPs efficiently and maintain full compliance with the Companies Act and MCA regulations.',
  icon: Users,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive LLP registration and compliance services with complete regulatory support.',
      points: [
        'LLP registration and incorporation with ROC approvals',
        'Drafting and filing of LLP Agreement',
        'Annual compliance filings and statutory returns with ROC',
        'Advisory on LLP structure, partners\' rights, and duties',
        'Change in LLP partners, registered office, and capital contribution filings',
        'Advisory on regulatory compliance, tax, and corporate governance',
        'Assistance with PAN, TAN, and GST registration for LLPs'
      ]
    },
    {
      heading: 'Why Choose Our LLP Services?',
      content:
        'Our experienced Company Secretaries provide transparent and risk-free LLP services.',
      points: [
        'Experienced Company Secretaries with expertise in LLP laws and compliance',
        'End-to-end support from registration to ongoing statutory compliance',
        'Transparent, timely, and risk-free process',
        'Tailored advisory for smooth operation and governance of your LLP'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures efficient LLP registration and ongoing compliance maintenance.',
      points: [
        'Consultation: Understand your business requirements and LLP structure',
        'Documentation: Prepare and verify all incorporation and agreement documents',
        'Filing: Submit registration and compliance documents to MCA and ROC',
        'Completion: LLP registered and ongoing compliance maintained efficiently'
      ]
    }
  ]
}

const LLPRegistrationCompliance: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>LLP Registration & Compliance Services | CS Experts for LLP Formation</title>
        <meta name="description" content="Professional LLP registration and compliance services including ROC filing, LLP agreement drafting, annual filings, and regulatory advisory for Limited Liability Partnerships." />
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

export default LLPRegistrationCompliance