import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
  Calculator,
  FileText,
  TrendingUp,
  BarChart2,
  Shield,
  Compass,
  DollarSign,
  BookOpen,
  Briefcase,
  ShieldCheck,
  RefreshCcw,
  FileCheck,
  ClipboardList,
  FileSearch,
  UserCheck,
  Landmark,
  Building2,
  FileStack,
  BriefcaseBusiness,
  User,
  Stamp,
  ClipboardCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Layer } from 'recharts'

const Services = () => {
  useEffect(() => {
    document.title =
      'Our Services - Navkar Bhavsar & Co. | Chartered Accountant'
  }, [])

  const [activeTab, setActiveTab] = useState<'CA' | 'CS'>('CA')

  const caServices = [
    {
      icon: Calculator, // Perfect for VAT & Service Tax
      title: 'Gujarat VAT & Service TAX',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Registration under VAT Act',
        'Classification of Goods',
        'Calculation of interest and penalty',
        'Assessment under VAT Act'
      ],
      link: '/services/gujarat-vat-service-tax'
    },
    {
      icon: TrendingUp, // Tax growth/advisory fit
      title: 'Direct Taxation',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Income Tax, Wealth Tax & TDS Returns Filing',
        'Corporate & Personal Tax Planning',
        'Cross-Border Tax Advisory',
        'Advance Tax & Capital Formation Planning'
      ],
      link: '/services/direct-taxation'
    },
    {
      icon: BarChart2, // Financial analytics/loans
      title: 'Corporate Financial',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Preparation of Budgets',
        'Working Capital Estimation and Management',
        'Break Even Analysis',
        'Product Pricing'
      ],
      link: '/services/corporate-financial'
    },
    {
      icon: FileText, // Process outsourcing docs
      title: 'BPO',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Accounting and MIS reporting',
        'Payroll processing',
        'Regulatory compliances',
        'Secretarial services'
      ],
      link: '/services/bpo'
    },
    {
      icon: Briefcase, // Corporate law/company work
      title: 'Corporate Law',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Inter Corporate Investments.',
        'Corporate restructuring.',
        'Payment of dividend by companies.',
        'Buy back of shares.'
      ],
      link: '/services/corporate-law'
    },
    {
      icon: Shield, // Audit & assurance = protection
      title: 'Auditing Assurance',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Bank Audit',
        'Stock Audit',
        'Certification Work',
        'Risk Based Audit'
      ],
      link: '/services/auditing-assurance'
    },
    {
      icon: Compass, // Guidance / advisory = direction
      title: 'Business Advisory',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Business Valuations',
        'Capital Structures',
        'Design of Organisation Structure.',
        'Project Planning And Control.'
      ],
      link: '/services/advisory'
    },
    {
      icon: BookOpen, // Accounting/bookkeeping = books
      title: 'Accounting Services',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Real Estate Accounting',
        'Forensic Audit Services',
        'Write-up Services',
        'Financial Reporting'
      ],
      link: '/services/accounting-services'
    }
  ]

  const csServices = [
    {
      icon: FileText,
      title: 'Company Registration Consultants',
      description: 'Helping businesses incorporate and comply with MCA requirements.',
      features: [
        'Private / Public Ltd Registration',
        'OPC / LLP Incorporation',
        'ROC Filings',
        'Compliance Management'
      ],
      link: '/services/company-registration-consultants'
    },
    {
      icon: Briefcase,
      title: 'BSFI Franchise',
      description: 'Expert advisory and compliance services for BSFI sector franchises.',
      features: [
        'Franchise Setup Documentation',
        'Regulatory Approvals',
        'Compliance Audit',
        'Ongoing Advisory'
      ],
      link: '/services/bsfi-franchise'
    },
    {
      icon: BookOpen,
      title: 'Company Law & Secretarial Compliance',
      description: 'Ensuring businesses stay compliant with company law and secretarial standards.',
      features: [
        'Annual Filings with ROC',
        'Board & General Meetings Compliance',
        'Registers & Minutes Maintenance',
        'Secretarial Audit Support'
      ],
      link: '/services/company-law-secretarial-compliance'
    },
    {
      icon: ShieldCheck,
      title: 'Securities Laws & Compliances',
      description: 'Comprehensive compliance solutions for securities laws and related regulations.',
      features: [
        'SEBI Filings',
        'Listing Regulations Compliance',
        'Insider Trading Compliance',
        'Takeover Code Advisory'
      ],
      link: '/services/securities-laws-compliances'
    },
    {
      icon: RefreshCcw,
      title: 'Corporate Restructuring - Merger / Amalgamation',
      description: 'End-to-end advisory on mergers, acquisitions, and corporate restructuring.',
      features: [
        'Scheme Drafting & Approval',
        'NCLT Process Assistance',
        'Valuation & Fairness Reports',
        'Post-merger Integration Support'
      ],
      link: '/services/corporate-restructuring'
    },
    {
      icon: TrendingUp,
      title: 'IPO / Listing / Delisting',
      description: 'Advisory and compliance support for companies going public or restructuring.',
      features: [
        'IPO Advisory & Documentation',
        'Stock Exchange Liaison',
        'Due Diligence Reports',
        'Delisting Procedures'
      ],
      link: '/services/ipo-listing-delisting'
    },
    {
      icon: FileCheck,
      title: 'Legal Documents and Due Diligence',
      description: 'Drafting, vetting, and compliance check for business-critical legal documents.',
      features: [
        'Shareholders & JV Agreements',
        'Due Diligence Reports',
        'Drafting MOUs & Contracts',
        'Regulatory Approvals'
      ],
      link: '/services/legal-documents-due-diligence'
    },
    {
      icon: ClipboardList,
      title: 'Corporate Compliance, Audits & Certifications',
      description: 'Comprehensive compliance audits and certification services.',
      features: [
        'Secretarial Audit',
        'Corporate Governance Certification',
        'Annual Compliance Reporting',
        'Independent Auditor Reports'
      ],
      link: '/services/corporate-compliance-audits'
    },
    {
      icon: FileSearch,
      title: 'Depository Participant Audit',
      description: 'Audit and compliance support for Depository Participants under SEBI.',
      features: [
        'DP Operations Audit',
        'KYC & Documentation Review',
        'Compliance Monitoring',
        'Regulatory Reporting'
      ],
      link: '/services/depository-participant-audit'
    },
    {
      icon: UserCheck,
      title: 'Practising Company Secretary',
      description: 'Dedicated CS services for corporate compliance and governance.',
      features: [
        'Certification Services',
        'Company Law Advisory',
        'Secretarial Standards Compliance',
        'Corporate Governance Reports'
      ],
      link: '/services/practising-company-secretary'
    },
    {
      icon: Landmark,
      title: 'FEMA / RBI Matters – Advice & Support',
      description: 'Expert advice and compliance support for FEMA and RBI regulations.',
      features: [
        'FEMA Compliances',
        'RBI Approvals',
        'FDI Reporting',
        'ECB Filings'
      ],
      link: '/services/fema-rbi-matters'
    },
    {
      icon: Building2,
      title: 'NBFC / Nidhi Company',
      description: 'Specialized incorporation and compliance services for NBFCs and Nidhi companies.',
      features: [
        'NBFC Registration with RBI',
        'Nidhi Company Incorporation',
        'Compliance Filings',
        'Advisory Services'
      ],
      link: '/services/nbfc-nidhi-company-formation'
    },
    {
      icon: Layer,
      title: 'PVT LTD / OPC / SEC 8 / Limited Company Formation',
      description: 'Complete support for different types of company incorporation.',
      features: [
        'Private Limited Incorporation',
        'One Person Company Setup',
        'Section 8 NGO Formation',
        'Public Limited Incorporation'
      ],
      link: '/services/company-formation'
    },
    {
      icon: FileStack,
      title: 'LLP Registration & Compliance',
      description: 'Specialized services for LLP incorporation and compliance.',
      features: [
        'LLP Agreement Drafting',
        'ROC Filings',
        'Annual Returns',
        'Compliance Advisory'
      ],
      link: '/services/llp-registration-compliance'
    },
    {
      icon: BriefcaseBusiness,
      title: 'General Corporate Advisory',
      description: 'Strategic advice for managing corporate governance and compliance.',
      features: [
        'Corporate Governance',
        'Regulatory Advisory',
        'Business Structuring',
        'Policy Compliance'
      ],
      link: '/services/general-corporate-advisory'
    },
    {
      icon: User,
      title: 'HR Payroll and Labour Laws',
      description: 'Ensuring compliance with labour laws and smooth payroll management.',
      features: [
        'Payroll Processing',
        'PF / ESI Filings',
        'Labour Law Registrations',
        'Compliance Audit'
      ],
      link: '/services/hr-payroll-labour-laws'
    },
    {
      icon: Stamp,
      title: 'Trademark',
      description: 'Trademark registration and compliance advisory.',
      features: [
        'Trademark Search & Filing',
        'Trademark Renewal',
        'Infringement Advisory',
        'IPR Compliance'
      ],
      link: '/services/trademark'
    },
    {
      icon: ClipboardCheck,
      title: 'Various Business Registration & License',
      description: 'Helping businesses obtain mandatory registrations and licenses.',
      features: [
        'MSME / Udyam Registration',
        'Shops & Establishments License',
        'Professional Tax Registration',
        'Other Statutory Registrations'
      ],
      link: '/services/business-registration-license'
    }
  ];





  // const services = [
  //   {
  //     icon: Calculator, // Perfect for VAT & Service Tax
  //     title: 'Gujarat VAT & Service TAX',
  //     description:
  //       'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
  //     features: [
  //       'Registration under VAT Act',
  //       'Classification of Goods',
  //       'Calculation of interest and penalty',
  //       'Assessment under VAT Act'
  //     ],
  //     link: '/services/gujarat-vat-service-tax'
  //   },
  //   {
  //     icon: TrendingUp, // Tax growth/advisory fit
  //     title: 'Direct Taxation',
  //     description:
  //       'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
  //     features: [
  //       'Income Tax, Wealth Tax & TDS Returns Filing',
  //       'Corporate & Personal Tax Planning',
  //       'Cross-Border Tax Advisory',
  //       'Advance Tax & Capital Formation Planning'
  //     ],
  //     link: '/services/direct-taxation'
  //   },
  //   {
  //     icon: BarChart2, // Financial analytics/loans
  //     title: 'Corporate Financial',
  //     description:
  //       'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
  //     features: [
  //       'Preparation of Budgets',
  //       'Working Capital Estimation and Management',
  //       'Break Even Analysis',
  //       'Product Pricing'
  //     ],
  //     link: '/services/corporate-financial'
  //   },
  //   {
  //     icon: FileText, // Process outsourcing docs
  //     title: 'BPO',
  //     description:
  //       'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
  //     features: [
  //       'Accounting and MIS reporting',
  //       'Payroll processing',
  //       'Regulatory compliances',
  //       'Secretarial services'
  //     ],
  //     link: '/services/bpo'
  //   },
  //   {
  //     icon: Briefcase, // Corporate law/company work
  //     title: 'Corporate Law',
  //     description:
  //       'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
  //     features: [
  //       'Inter Corporate Investments.',
  //       'Corporate restructuring.',
  //       'Payment of dividend by companies.',
  //       'Buy back of shares.'
  //     ],
  //     link: '/services/corporate-law'
  //   },
  //   {
  //     icon: Shield, // Audit & assurance = protection
  //     title: 'Auditing Assurance',
  //     description:
  //       'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
  //     features: [
  //       'Bank Audit',
  //       'Stock Audit',
  //       'Certification Work',
  //       'Risk Based Audit'
  //     ],
  //     link: '/services/auditing-assurance'
  //   },
  //   {
  //     icon: Compass, // Guidance / advisory = direction
  //     title: 'Business Advisory',
  //     description:
  //       'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
  //     features: [
  //       'Business Valuations',
  //       'Capital Structures',
  //       'Design of Organisation Structure.',
  //       'Project Planning And Control.'
  //     ],
  //     link: '/services/advisory'
  //   },
  //   {
  //     icon: BookOpen, // Accounting/bookkeeping = books
  //     title: 'Accounting Services',
  //     description:
  //       'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
  //     features: [
  //       'Real Estate Accounting',
  //       'Forensic Audit Services',
  //       'Write-up Services',
  //       'Financial Reporting'
  //     ],
  //     link: '/services/accounting-services'
  //   }
  // ]

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <section className='pt-24 pb-20 bg-gradient-hero text-white mt-10'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-serif font-bold mb-6'>
              Our Professional Services
            </h1>
            <p className='text-xl md:text-2xl text-white/90 leading-relaxed'>
              Comprehensive financial and business solutions tailored to meet
              your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <span className='text-muted-foreground font-semibold text-lg'>
              What We Offer
            </span>
            <h2 className='text-4xl font-serif font-bold text-foreground mt-4 mb-6'>
              Complete Business Solutions
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              From startups to established enterprises, we provide the expertise
              you need to succeed.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('CA')}
              className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === 'CA' ? 'bg-primary text-white' : 'bg-muted text-foreground'
                }`}
            >
              CA Services
            </button>

            <button
              onClick={() => setActiveTab('CS')}
              className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === 'CS' ? 'bg-primary text-white' : 'bg-muted text-foreground'
                }`}
            >
              CS Services
            </button>
          </div>


          {/* <div className='grid lg:grid-cols-3 gap-8'>
            {
              caServices.map((service, index) => (
                <div
                  key={index}
                  className='card-professional p-8 group hover:shadow-strong transition-all duration-500'
                >
                  <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <service.icon className='w-8 h-8 text-primary-foreground' />
                  </div>

                  <h3 className='text-xl font-serif font-bold text-foreground mb-4'>
                    {service.title}
                  </h3>

                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {service.description}
                  </p>

                  <ul className='space-y-2 mb-6'>
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center text-sm text-muted-foreground'
                      >
                        <div className='w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0'></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  >
                    <Button className='w-full btn-primary'>Learn More</Button>
                  </Link>
                </div>
              ))}
          </div> */}

          <div className="grid lg:grid-cols-3 gap-8">

            {(activeTab === 'CA' ? caServices : csServices).map((service, index) => (
              <div key={index} className="card-professional p-8 group hover:shadow-strong transition-all duration-500 flex flex-col">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button hamesha bottom me fix hoga */}
                <Link
                  to={service.link}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="mt-auto"
                >
                  <Button className="w-full btn-primary">Learn More</Button>
                </Link>
              </div>

            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 bg-gradient-secondary'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-serif font-bold text-foreground mb-6'>
              Why Choose Our Services ?
            </h2>
          </div>

          <div className='grid lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-accent-foreground'>
                  7+
                </span>
              </div>
              <h3 className='font-semibold text-foreground mb-2'>
                Years Experience
              </h3>
              <p className='text-sm text-muted-foreground'>
                Proven expertise in diverse industries
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary-foreground'>
                  500+
                </span>
              </div>
              <h3 className='font-semibold text-foreground mb-2'>
                Happy Clients
              </h3>
              <p className='text-sm text-muted-foreground'>
                Trusted by businesses across sectors
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-accent-foreground'>
                  98%
                </span>
              </div>
              <h3 className='font-semibold text-foreground mb-2'>
                Compliance Rate
              </h3>
              <p className='text-sm text-muted-foreground'>
                Perfect track record of compliance
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary-foreground'>
                  24/7
                </span>
              </div>
              <h3 className='font-semibold text-foreground mb-2'>Support</h3>
              <p className='text-sm text-muted-foreground'>
                Round-the-clock assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='bg-gradient-primary rounded-2xl p-12 text-white text-center'>
            <h2 className='text-3xl font-serif font-bold mb-4'>
              Ready to Get Started?
            </h2>
            <p className='text-xl mb-8 text-white/90 max-w-2xl mx-auto'>
              Let us help you choose the right services for your business needs.
              Contact us for a free consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/contact'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='bg-white text-primary hover:bg-white/90'
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link to='/careers'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-black hover:bg-white hover:text-primary'
                >
                  Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Services
