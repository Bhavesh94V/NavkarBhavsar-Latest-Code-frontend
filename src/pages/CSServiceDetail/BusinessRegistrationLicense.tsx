import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { FileCheck } from 'lucide-react'
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
  title: 'BUSINESS REGISTRATION & LICENSE SERVICES',
  description:
    'Every business requires the right registrations and licenses to operate legally. Our Business Registration & License services help entrepreneurs and companies obtain all necessary approvals, ensuring compliance with statutory requirements and smooth business operations.',
  icon: FileCheck,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive business registration and licensing services for all business requirements.',
      points: [
        'Registration of Private Limited Companies, LLPs, OPCs, and Section 8 Companies',
        'GST registration and compliance advisory',
        'FSSAI registration and licensing for food businesses',
        'Shop and Establishment registration for commercial operations',
        'MSME registration and certification support',
        'Import-Export Code (IEC) registration for international trade',
        'Other statutory licenses and permits based on business requirements'
      ]
    },
    {
      heading: 'Why Choose Our Business Registration Services?',
      content:
        'Our experienced Company Secretaries provide end-to-end support and compliance assurance.',
      points: [
        'Experienced Company Secretaries with expertise in all types of business registrations',
        'End-to-end support from documentation to statutory approvals',
        'Transparent, timely, and hassle-free process',
        'Compliance assurance to avoid legal penalties and delays'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures successful registration and ongoing compliance support.',
      points: [
        'Consultation: Assess your business type, location, and licensing needs',
        'Documentation: Prepare and verify all necessary documents for registration and licenses',
        'Filing & Approval: Submit applications to the relevant authorities and track approvals',
        'Ongoing Support: Provide guidance on renewals, compliance, and statutory obligations'
      ]
    }
  ]
}

const BusinessRegistrationLicense: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Business Registration & License Services | CS & Corporate Compliance Experts</title>
        <meta name="description" content="Expert business registration and licensing services including GST, FSSAI, Shop & Establishment, Import-Export, MSME registration, and other statutory approvals." />
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

export default BusinessRegistrationLicense