import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { TrendingUp } from 'lucide-react'
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
  title: 'SECURITIES LAWS & COMPLIANCES',
  description:
    'Securities laws are highly regulated and complex. Our Securities Laws & Compliances services help listed and unlisted companies comply with SEBI, stock exchange, and corporate governance requirements, ensuring transparency and investor confidence.',
  icon: TrendingUp,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive securities law compliance services for all types of companies.',
      points: [
        'SEBI compliance for listed and unlisted companies',
        'Stock exchange listing support and disclosure management',
        'Drafting and vetting of offer documents and prospectuses',
        'Insider trading regulation compliance',
        'Advisory on takeover code, buybacks, and delisting',
        'Corporate governance reporting and certifications',
        'Representation before SEBI and stock exchanges'
      ]
    },
    {
      heading: 'Why Choose Our Securities Compliance Services?',
      content:
        'Our experienced CS professionals ensure risk-free compliance with securities regulations.',
      points: [
        'Experienced CS professionals with expertise in securities law',
        'End-to-end compliance from listing to ongoing obligations',
        'Risk-free approach to avoid penalties and regulatory issues',
        'Trusted by private and public companies'
      ]
    },
    {
      heading: 'How the Process Works',
      content:
        'Our systematic approach ensures continuous compliance with SEBI and stock exchange requirements.',
      points: [
        'Consultation on your capital market and listing requirements',
        'Review of existing compliance and gap analysis',
        'Drafting, filing, and submission of required documents',
        'Continuous monitoring and reporting to SEBI and exchanges'
      ]
    }
  ]
}

const SecuritiesLawsCompliance: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Securities Laws & Compliances | SEBI & Stock Exchange Compliance Support</title>
        <meta name="description" content="Professional compliance support for SEBI regulations, stock exchange listing, insider trading laws, takeover code, buybacks and investor disclosures." />
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

export default SecuritiesLawsCompliance