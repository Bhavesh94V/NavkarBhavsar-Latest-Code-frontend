import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { RefreshCw } from 'lucide-react'
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
  title: 'CORPORATE RESTRUCTURING - MERGER/AMALGAMATION',
  description:
    'Corporate restructuring is essential for businesses aiming to expand, streamline operations, or unlock new opportunities. Our Corporate Restructuring – Merger & Amalgamation services provide expert guidance and compliance support, ensuring a smooth transition while meeting all legal and regulatory requirements.',
  icon: RefreshCw,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive corporate restructuring services covering all aspects of mergers and amalgamations.',
      points: [
        'Advisory on mergers, amalgamations, demergers, and corporate restructuring schemes',
        'Drafting and vetting of schemes of arrangement and related documents',
        'Due diligence of companies involved in restructuring',
        'Filing of applications and petitions with the National Company Law Tribunal (NCLT)',
        'Assistance with shareholder and creditor approvals',
        'Post-merger compliance, reporting, and integration support',
        'Advisory on tax and regulatory implications of restructuring'
      ]
    },
    {
      heading: 'Why Choose Our Corporate Restructuring Services?',
      content:
        'Our experienced professionals provide strategic guidance tailored to your business growth objectives.',
      points: [
        'Experienced professionals with deep knowledge of corporate and securities laws',
        'End-to-end support from planning to NCLT approval and post-merger compliance',
        'Strategic guidance tailored to business growth and expansion goals',
        'Transparent, efficient, and compliance-focused process'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures successful restructuring with complete regulatory compliance.',
      points: [
        'Assessment: Understanding the business objectives and evaluating restructuring options',
        'Planning: Preparing a restructuring roadmap and compliance checklist',
        'Execution: Drafting schemes, conducting due diligence, and managing NCLT filings',
        'Completion: Ensuring approvals, filings, and smooth integration post-restructuring'
      ]
    }
  ]
}

const CorporateRestructuring: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Corporate Restructuring Services | Merger, Amalgamation & NCLT Support</title>
        <meta name="description" content="Expert corporate restructuring services including mergers, amalgamations, demergers, due diligence, drafting schemes, and NCLT representation." />
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

export default CorporateRestructuring