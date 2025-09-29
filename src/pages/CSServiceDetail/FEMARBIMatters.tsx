import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Globe } from 'lucide-react'
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
  title: 'FEMA / RBI MATTERS - ADVICE & SUPPORT',
  description:
    'Compliance with FEMA (Foreign Exchange Management Act) and RBI regulations is critical for companies dealing with foreign investments, cross-border transactions, and remittances. Our FEMA / RBI advisory and support services help businesses meet regulatory requirements efficiently, avoid penalties, and ensure smooth international operations.',
  icon: Globe,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive FEMA and RBI advisory services for all cross-border business needs.',
      points: [
        'Advisory on Foreign Direct Investment (FDI) and Overseas Direct Investment (ODI) compliance',
        'Assistance with RBI approvals and filings',
        'Guidance on foreign remittances, repatriation, and cross-border transactions',
        'Compliance with FEMA regulations for mergers, acquisitions, and joint ventures',
        'Documentation review, due diligence, and regulatory reporting',
        'Advisory on foreign loans, capital inflows, and investment structures',
        'Support in representing companies before RBI and regulatory authorities'
      ]
    },
    {
      heading: 'Why Choose Our FEMA / RBI Advisory Services?',
      content:
        'Our experienced Company Secretaries provide proactive compliance monitoring and reliable services.',
      points: [
        'Experienced Company Secretaries with expertise in FEMA, RBI, and cross-border regulations',
        'End-to-end guidance from documentation to regulatory approvals',
        'Proactive compliance monitoring to mitigate risks and penalties',
        'Reliable, transparent, and timely services for domestic and international businesses'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures continuous FEMA and RBI compliance.',
      points: [
        'Consultation: Understand your foreign investment and transaction requirements',
        'Review: Assess compliance gaps and documentation needs',
        'Execution: Prepare filings, seek RBI approvals, and manage regulatory reporting',
        'Monitoring: Provide ongoing support to ensure continuous FEMA and RBI compliance'
      ]
    }
  ]
}

const FEMARBIMatters: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>FEMA & RBI Compliance Services | Foreign Investment & Regulatory Advisory</title>
        <meta name="description" content="Expert Company Secretary services for FEMA compliance, RBI approvals, FDI regulations, foreign remittances, and regulatory advisory for businesses." />
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

export default FEMARBIMatters