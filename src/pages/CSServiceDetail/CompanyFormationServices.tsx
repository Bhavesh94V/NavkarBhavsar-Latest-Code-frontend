import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Building } from 'lucide-react'
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
  title: 'PRIVATE LIMITED, OPC, SECTION 8 & LIMITED COMPANY FORMATION',
  description:
    'Forming a company requires careful planning, compliance with the Companies Act, and accurate documentation. Our Company Formation services help entrepreneurs and businesses set up Private Limited, OPC, Section 8, and Limited Companies efficiently and legally, ensuring smooth operations from day one.',
  icon: Building,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive company formation services for all major business structures.',
      points: [
        'Private Limited Company formation with ROC filing and approvals',
        'One Person Company (OPC) registration for single-owner businesses',
        'Section 8 Company (NGO/Non-Profit) registration and compliance',
        'Public and Limited Company formation',
        'Drafting and filing of Memorandum of Association (MoA) and Articles of Association (AoA)',
        'Assistance with PAN, TAN, and GST registration',
        'Advisory on choosing the right business structure'
      ]
    },
    {
      heading: 'Why Choose Our Company Formation Services?',
      content:
        'Our experienced Company Secretaries ensure complete compliance and transparent processes.',
      points: [
        'Experienced Company Secretaries with extensive knowledge of MCA regulations',
        'Complete support from documentation to approval and certification',
        'Compliance assurance for Companies Act, ROC, and related regulations',
        'Transparent, timely, and cost-effective process'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our streamlined process ensures quick and efficient company formation.',
      points: [
        'Consultation: Understand your business objectives and structure requirements',
        'Documentation: Prepare and verify all necessary documents',
        'Filing: Submit incorporation documents with MCA and ROC',
        'Completion: Receive Certificate of Incorporation and start business operations'
      ]
    }
  ]
}

const CompanyFormationServices: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Private Limited, OPC, Section 8 & Limited Company Formation | CS Experts</title>
        <meta name="description" content="Professional company formation services for Private Limited, One Person Company (OPC), Section 8 (NGO) and Limited Companies. Complete ROC filing and compliance support." />
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

export default CompanyFormationServices