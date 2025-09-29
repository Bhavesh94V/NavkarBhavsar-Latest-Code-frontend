import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Award } from 'lucide-react'
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
  title: 'TRADEMARK REGISTRATION & ADVISORY SERVICES',
  description:
    'A strong brand identity is vital for business success. Our Trademark Registration & Advisory services help businesses secure, protect, and manage their trademarks while ensuring compliance with intellectual property laws in India.',
  icon: Award,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive trademark registration and advisory services for complete brand protection.',
      points: [
        'Trademark search and clearance to avoid conflicts',
        'Filing and registration of trademarks with the Trademark Registry',
        'Advisory on trademark selection, classes, and protection strategy',
        'Renewal, assignment, and transfer of trademarks',
        'Monitoring and enforcement of trademark rights',
        'Representation in case of opposition, infringement, or legal disputes',
        'Intellectual property advisory for brand, logo, and product protection'
      ]
    },
    {
      heading: 'Why Choose Our Trademark Services?',
      content:
        'Our experienced professionals provide end-to-end support and proactive brand protection.',
      points: [
        'Experienced professionals with in-depth knowledge of trademark and IP law',
        'End-to-end support from trademark search to registration and enforcement',
        'Timely filings and proactive management to protect your brand',
        'Reliable, confidential, and transparent service'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures successful trademark registration and ongoing brand protection.',
      points: [
        'Consultation: Understand your brand and IP requirements',
        'Trademark Search: Conduct clearance search to avoid conflicts',
        'Filing & Registration: Prepare and file trademark applications',
        'Monitoring & Support: Track applications, manage renewals, and provide advisory'
      ]
    }
  ]
}

const TrademarkRegistrationAdvisory: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Trademark Registration Services | CS & IP Compliance Experts</title>
        <meta name="description" content="Expert trademark services including registration, monitoring, renewals, and legal advisory to protect your brand identity and intellectual property rights." />
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

export default TrademarkRegistrationAdvisory