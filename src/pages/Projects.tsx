import { useEffect, useState } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import pro1 from '../assets/projects/pro1.png'
import pro3 from '../assets/projects/automation.jpg'


const Projects = () => {
    const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())
    const [filterCategory, setFilterCategory] = useState<string>('All')

    useEffect(() => {
        document.title = 'Our Projects - Navkar Bhavsar & Co. | Chartered Accountant'
    }, [])

    const toggleReadMore = (index: number) => {
        setExpandedProjects(prev => {
            const newSet = new Set(prev)
            if (newSet.has(index)) {
                newSet.delete(index)
            } else {
                newSet.add(index)
            }
            return newSet
        })
    }

    const allProjects = [
        {
            title: 'Tax Compliance Portal — Globuz',
            description: 'A full-featured FinTech platform developed for Globuz to simplify tax filing and compliance management. The portal automates the entire tax process—from data collection to final submission—ensuring accuracy, efficiency, and real-time compliance updates for businesses.',
            category: 'FinTech',
            image: pro1,
            link: 'https://globuz.in/',
            stats: { clients: '500+', completion: '98%' },
            year: '2025'
        },

        {
            title: 'Tax Compliance Portal',
            description: 'Comprehensive digital solution for tax filing and compliance management. Our cutting-edge platform streamlines the entire tax process, from data collection to submission, ensuring accuracy and efficiency. With real-time updates and automated calculations, businesses can stay compliant effortlessly.',
            category: 'FinTech',
            image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            link: 'https://example.com/project1',
            stats: { clients: '500+', completion: '98%' },
            year: '2024'
        },
        {
            title: 'Corporate Governance System',
            description: 'End-to-end governance and compliance tracking for enterprises. This comprehensive system helps organizations maintain transparency, manage board meetings, handle regulatory filings, and ensure adherence to corporate governance standards across all departments.',
            category: 'Enterprise',
            image: pro3,
            link: 'https://example.com/project2',
            stats: { clients: '200+', completion: '95%' },
            year: '2024'
        },
        {
            title: 'Audit Automation Suite',
            description: 'AI-powered audit workflows and reporting system that revolutionizes traditional auditing processes. Our suite leverages machine learning to identify patterns, detect anomalies, and generate comprehensive reports, reducing manual effort while improving accuracy and insights.',
            category: 'Technology',
            image: '/placeholder.svg',
            link: 'https://example.com/project3',
            stats: { clients: '350+', completion: '97%' },
            year: '2023'
        },
        {
            title: 'GST Filing Automation',
            description: 'Streamlined GST return filing system for businesses of all sizes. Automated data extraction, validation, and submission with built-in reconciliation tools. Reduces filing time by 70% while ensuring 100% accuracy.',
            category: 'FinTech',
            image: '/placeholder.svg',
            link: 'https://example.com/project4',
            stats: { clients: '800+', completion: '99%' },
            year: '2023'
        },
        {
            title: 'Financial Advisory Platform',
            description: 'Comprehensive wealth management and financial planning solution. Features include portfolio analysis, risk assessment, retirement planning, and investment recommendations powered by AI algorithms.',
            category: 'FinTech',
            image: '/placeholder.svg',
            link: 'https://example.com/project5',
            stats: { clients: '450+', completion: '96%' },
            year: '2024'
        },
        {
            title: 'Compliance Management System',
            description: 'All-in-one regulatory compliance tracking and reporting platform. Monitors changing regulations, manages deadlines, automates notifications, and generates compliance reports for multiple jurisdictions.',
            category: 'Enterprise',
            image: '/placeholder.svg',
            link: 'https://example.com/project6',
            stats: { clients: '300+', completion: '94%' },
            year: '2023'
        },
        {
            title: 'HR & Payroll Integration',
            description: 'Seamless integration of HR management with payroll processing. Automated salary calculations, tax deductions, compliance with labor laws, and direct integration with banking systems.',
            category: 'Enterprise',
            image: '/placeholder.svg',
            link: 'https://example.com/project7',
            stats: { clients: '600+', completion: '97%' },
            year: '2024'
        },
        {
            title: 'Invoice Management System',
            description: 'Digital invoicing and accounts receivable management platform. Features automated invoice generation, payment tracking, reminder systems, and integration with accounting software.',
            category: 'Technology',
            image: '/placeholder.svg',
            link: 'https://example.com/project8',
            stats: { clients: '700+', completion: '98%' },
            year: '2023'
        },
    ]

    const categories = ['All', 'FinTech', 'Enterprise', 'Technology']

    const filteredProjects = filterCategory === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === filterCategory)

    return (
        <div className='min-h-screen bg-background'>

            <Header></Header>
            {/* Hero Section */}
            <section className='pt-24 pb-16 bg-gradient-hero text-white mt-10'>
                <div className='container mx-auto px-6'>
                    <Link
                        to='/about'
                        className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors'
                    >
                        <ArrowLeft className='h-5 w-5' />
                        Back to About
                    </Link>
                    <div className='max-w-4xl mx-auto text-center'>
                        <h1 className='text-5xl md:text-6xl font-serif font-bold mb-6'>
                            Our Projects Portfolio
                        </h1>
                        <p className='text-xl md:text-2xl text-white/90 leading-relaxed'>
                            Innovative solutions delivered with excellence across diverse industries
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className='py-6 border-b border-border bg-background/50 backdrop-blur-sm sticky top-24 z-40'>
                <div className='container mx-auto px-6'>
                    <div className='flex flex-wrap justify-center gap-3'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilterCategory(category)}
                                className={`px-4 py-1 rounded-full font-semibold transition-all ${filterCategory === category
                                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    {/* <p className='text-center mt-4 text-muted-foreground'>
                        Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                    </p> */}
                </div>
            </section>

            {/* Projects Grid */}
            <section className='py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20 relative overflow-hidden'>
                <div className='absolute inset-0 opacity-30'>
                    <div className='absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl'></div>
                    <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl'></div>
                </div>

                <div className='container mx-auto px-6 relative z-10'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {filteredProjects.map((project, index) => {
                            const isExpanded = expandedProjects.has(index)
                            const shouldTruncate = project.description.length > 120
                            const displayDescription = isExpanded || !shouldTruncate
                                ? project.description
                                : `${project.description.slice(0, 120)}...`

                            return (
                                <div
                                    key={index}
                                    className='group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in'
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <a
                                        href={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='block'
                                    >
                                        <div className='relative h-64 overflow-hidden'>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent'></div>
                                            <div className='absolute top-4 left-4'>
                                                <span className='bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold'>
                                                    {project.year}
                                                </span>
                                            </div>
                                            <div className='absolute top-4 right-4'>
                                                <span className='bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg'>
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>
                                    </a>

                                    <div className='p-6 space-y-4'>
                                        <a
                                            href={project.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='group/title'
                                        >
                                            <h3 className='text-2xl font-serif font-bold text-foreground group-hover/title:text-primary transition-colors flex items-center gap-2'>
                                                {project.title}
                                                <ExternalLink className='h-4 w-4 opacity-0 group-hover/title:opacity-100 transition-opacity' />
                                            </h3>
                                        </a>

                                        <div>
                                            <p className='text-muted-foreground leading-relaxed'>
                                                {displayDescription}
                                            </p>
                                            {shouldTruncate && (
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        toggleReadMore(index)
                                                    }}
                                                    className='text-primary hover:text-primary/80 text-sm font-semibold mt-2 inline-flex items-center gap-1 transition-colors'
                                                >
                                                    {isExpanded ? 'Read Less' : 'Read More'}
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                        stroke='currentColor'
                                                    >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth={2}
                                                            d='M19 9l-7 7-7-7'
                                                        />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>

                                        <div className='flex justify-between items-center pt-4 border-t border-border'>
                                            <div className='flex gap-4 text-sm'>
                                                <div>
                                                    <p className='text-muted-foreground'>Clients</p>
                                                    <p className='font-bold text-foreground'>{project.stats.clients}</p>
                                                </div>
                                                <div>
                                                    <p className='text-muted-foreground'>Success</p>
                                                    <p className='font-bold text-foreground'>{project.stats.completion}</p>
                                                </div>
                                            </div>
                                            <a
                                                href={project.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all'
                                            >
                                                <ExternalLink className='h-5 w-5' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Projects