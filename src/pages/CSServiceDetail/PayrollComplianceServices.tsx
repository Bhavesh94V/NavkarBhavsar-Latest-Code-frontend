import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Calculator } from 'lucide-react'
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
  title: 'PAYROLL COMPLIANCE SERVICES',
  description:
    'Payroll compliance is critical for businesses to avoid penalties, maintain employee trust, and adhere to statutory regulations. Our Payroll Compliance services provide end-to-end support in managing salaries, statutory contributions, and filings, ensuring your organization remains fully compliant.',
  icon: Calculator,
  sections: [
    {
      heading: 'Our Services Include',
      content:
        'We provide comprehensive payroll compliance services ensuring accurate and compliant payroll management.',
      points: [
        'Preparation and processing of payroll for employees',
        'Compliance with PF (Provident Fund), ESI (Employee State Insurance), and other statutory contributions',
        'TDS calculation, deduction, and filing',
        'Advisory on salary structuring, allowances, and benefits',
        'Compliance with GST and other applicable labor laws',
        'Timely submission of statutory returns and reports',
        'Support in audits, inspections, and regulatory compliance'
      ]
    },
    {
      heading: 'Why Choose Our Payroll Compliance Services?',
      content:
        'Our experienced compliance experts provide accurate and reliable payroll management services.',
      points: [
        'Experienced Company Secretaries and compliance experts',
        'End-to-end payroll management with statutory compliance assurance',
        'Accurate and timely filings to avoid penalties and legal issues',
        'Confidential, reliable, and professional service'
      ]
    },
    {
      heading: 'How We Work',
      content:
        'Our systematic approach ensures continuous tracking and timely compliance.',
      points: [
        'Consultation: Understand your organization\'s payroll structure and requirements',
        'Implementation: Set up payroll systems and statutory compliance processes',
        'Execution: Process salaries, deductions, contributions, and filings',
        'Monitoring: Continuous tracking to ensure timely compliance and reporting'
      ]
    }
  ]
}

const PayrollComplianceServices: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Helmet>
        <title>Payroll Compliance Services | CS & Corporate Compliance Experts</title>
        <meta name="description" content="Expert payroll compliance services including statutory filings, PF/ESI/GST/TDS compliance, salary structuring, and HR advisory to ensure legal and regulatory adherence." />
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

export default PayrollComplianceServices