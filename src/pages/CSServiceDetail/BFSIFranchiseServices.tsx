import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Briefcase } from 'lucide-react'
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
  title: 'BFSI FRANCHISE SERVICES',
  description:
    'Entering the Banking, Financial Services, and Insurance (BFSI) sector requires compliance with regulations and strategic planning. Our BFSI Franchise services help entrepreneurs set up and manage BFSI franchises efficiently, ensuring compliance with all regulatory requirements and smooth operations.',
  icon: Briefcase,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive BFSI franchise services covering all regulatory and operational requirements.',
      points: [
        'Advisory for setting up banking, financial services, and insurance (BFSI) franchises',
        'Assistance with regulatory approvals and licensing requirements',
        'Guidance on compliance with RBI, IRDAI, SEBI, and other regulatory authorities',
        'Operational setup support including documentation and agreements',
        'Risk assessment and mitigation strategies for BFSI operations',
        'Ongoing compliance monitoring and reporting',
        'Support in franchise agreements, partnerships, and revenue structures'
      ]
    },
    {
      heading: 'Why Choose Our BFSI Franchise Services?',
      content:
        'Our experienced compliance experts provide end-to-end guidance and proactive risk management.',
      points: [
        'Experienced Company Secretaries and compliance experts with BFSI sector knowledge',
        'End-to-end guidance from franchise setup to operational compliance',
        'Proactive approach to avoid regulatory risks and penalties',
        'Transparent, reliable, and professional services'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures successful franchise setup and continuous compliance monitoring.',
      points: [
        'Consultation: Understand your BFSI franchise objectives and business model',
        'Planning: Assess regulatory and operational requirements',
        'Execution: Assist in franchise setup, licensing, and documentation',
        'Ongoing Support: Provide continuous compliance monitoring and advisory'
      ]
    }
  ]
}

const BFSIFranchiseServices: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>BFSI Franchise Services | Banking, Financial Services & Insurance Franchise Support</title>
        <meta name="description" content="Expert advisory and support for BFSI franchise setup including banking, financial services, insurance operations, regulatory compliance, and licensing." />
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

export default BFSIFranchiseServices