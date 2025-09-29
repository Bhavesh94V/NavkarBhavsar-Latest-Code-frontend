import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { BarChart3 } from 'lucide-react'
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
  title: 'IPO, LISTING & DELISTING SERVICES',
  description:
    'Taking a company public is a milestone that requires expert guidance and strict compliance with SEBI and stock exchange regulations. Whether you are preparing for an Initial Public Offering (IPO), managing a stock exchange listing, or planning a delisting, our expert CS team provides comprehensive support to ensure transparency, compliance, and investor confidence.',
  icon: BarChart3,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide end-to-end IPO, listing, and delisting services with complete regulatory compliance.',
      points: [
        'Advisory on IPO planning and structuring',
        'Drafting and vetting of prospectus, offer documents, and information memorandums',
        'Compliance with SEBI regulations and stock exchange listing norms',
        'Liaison with merchant bankers, regulators, and stock exchanges',
        'Guidance on continuous listing obligations and corporate governance norms',
        'Advisory on delisting of securities and compliance with SEBI Delisting Regulations',
        'Assistance with shareholder approvals, disclosures, and exit opportunities'
      ]
    },
    {
      heading: 'Why Choose Our IPO, Listing & Delisting Services?',
      content:
        'Our experienced Company Secretaries specialize in capital markets and provide proven expertise.',
      points: [
        'Experienced Company Secretaries specializing in capital markets and securities law',
        'End-to-end compliance and documentation support',
        'Proven expertise in IPO advisory, stock exchange dealings, and regulatory approvals',
        'Transparent, reliable, and time-efficient services'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our structured approach ensures successful IPO execution and ongoing compliance support.',
      points: [
        'Consultation: Understanding your business and IPO/delisting objectives',
        'Planning: Structuring the process in line with SEBI and stock exchange guidelines',
        'Execution: Drafting, filing, and coordinating with regulators and stakeholders',
        'Completion: Ensuring successful listing/delisting and ongoing compliance support'
      ]
    }
  ]
}

const IPOListingDelisting: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>IPO, Listing & Delisting Services | SEBI & Stock Exchange Compliance Experts</title>
        <meta name="description" content="Expert Company Secretaries for IPO, listing, and delisting services. End-to-end support for SEBI compliance, stock exchange approvals, and corporate governance." />
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

export default IPOListingDelisting