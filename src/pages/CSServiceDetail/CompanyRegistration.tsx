import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

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
  title: 'COMPANY REGISTRATION CONSULTANTS',
  description:
    'Looking for reliable company registration consultants in India? We provide end-to-end support for company incorporation and business registration. From choosing the right structure to filing with the Registrar of Companies (ROC), we ensure a fast, compliant, and stress-free process.',
  icon: Building2,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive company registration services covering all major business structures in India.',
      points: [
        'Private Limited Company registration',
        'Public Limited Company registration',
        'LLP (Limited Liability Partnership) formation',
        'Section 8 Company (NGO/Non-Profit) registration',
        'Partnership firm registration',
        'Drafting and filing of MoA and AoA',
        'PAN, TAN and GST registration assistance'
      ]
    },
    {
      heading: 'Why Choose Us?',
      content:
        'Our experienced team ensures complete compliance and transparent processes for your business incorporation.',
      points: [
        'Expert guidance to select the best business structure',
        'Complete support from documentation to ROC approval',
        '100% compliance with MCA and ROC regulations',
        'Transparent, time-bound, and cost-effective process'
      ]
    },
    {
      heading: 'How the Process Works',
      content:
        'Our streamlined process ensures quick and efficient company registration with minimal hassle.',
      points: [
        'Consultation to understand your business goals',
        'Collection and verification of documents',
        'Drafting and filing incorporation documents with MCA',
        'Issuing Certificate of Incorporation so you can start operations'
      ]
    }
  ]
}

const CompanyRegistration: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>

      <Helmet>
        <title>Company Registration Consultants | Private Limited & LLP Registration Services</title>
        <meta name="description" content="Professional company registration consultants for Private Limited, LLP, Section 8 and Partnership firms. Get hassle-free ROC filing and incorporation support today." />
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

export default CompanyRegistration