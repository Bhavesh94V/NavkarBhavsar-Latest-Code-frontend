import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { MessageSquare } from 'lucide-react'
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
  title: 'GENERAL CORPORATE ADVISORY',
  description:
    'Effective corporate advisory ensures your company operates efficiently, remains compliant, and achieves strategic goals. Our General Corporate Advisory services provide expert guidance on corporate governance, regulatory compliance, risk management, and business strategies to help companies make informed decisions.',
  icon: MessageSquare,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive corporate advisory services covering all aspects of business governance and strategy.',
      points: [
        'Corporate governance advisory and compliance support',
        'Strategic planning and business advisory for growth and expansion',
        'Advisory on mergers, acquisitions, and restructuring',
        'Legal and regulatory compliance guidance under Companies Act and SEBI regulations',
        'Review and drafting of agreements, contracts, and corporate policies',
        'Risk assessment and mitigation strategies for operational and regulatory matters',
        'Advisory on board procedures, shareholder matters, and management frameworks'
      ]
    },
    {
      heading: 'Why Choose Our Corporate Advisory Services?',
      content:
        'Our experienced Company Secretaries provide tailored advice and proactive risk identification.',
      points: [
        'Experienced Company Secretaries with in-depth corporate law and compliance expertise',
        'Tailored advice for businesses of all sizes and industries',
        'Proactive identification of risks and solutions to mitigate them',
        'Transparent, professional, and timely service delivery'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures continuous advisory to help your company adapt and grow.',
      points: [
        'Consultation: Understand your business objectives, challenges, and governance structure',
        'Assessment: Review existing compliance, policies, and corporate frameworks',
        'Advisory: Provide actionable guidance on compliance, governance, and business strategy',
        'Ongoing Support: Continuous advisory to help your company adapt and grow while remaining compliant'
      ]
    }
  ]
}

const GeneralCorporateAdvisory: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>General Corporate Advisory Services | Expert CS Corporate Guidance</title>
        <meta name="description" content="Professional corporate advisory services for companies including governance, compliance, strategic planning, and legal guidance to ensure business growth and regulatory adherence." />
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

export default GeneralCorporateAdvisory