import { ExternalLink } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pro1 from '../assets/projects/pro1.png'
import pro3 from '../assets/projects/automation.jpg'

export default function ProjectSection() {

    const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())

    useEffect(() => {
        document.title = 'About Us - Navkar Bhavsar & Co. | Chartered Accountant'
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

    const projects = [
        {
            title: 'Tax Compliance Portal - Globuz',
            description: 'A full-featured FinTech platform developed for Globuz to simplify tax filing and compliance management. The portal automates the entire tax process—from data collection to final submission—ensuring accuracy, efficiency, and real-time compliance updates for businesses.',
            category: 'FinTech',
            image: pro1,
            link: 'https://globuz.in/',
            stats: { clients: '500+', completion: '98%' },
            // year: '2025'
        },
        {
            title: 'Tax Compliance Portal',
            description: 'Comprehensive digital solution for tax filing and compliance management. Our cutting-edge platform streamlines the entire tax process, from data collection to submission, ensuring accuracy and efficiency. With real-time updates and automated calculations, businesses can stay compliant effortlessly.',
            category: 'FinTech',
            image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            link: 'https://example.com/project1',
            stats: { clients: '500+', completion: '98%' },
            // year: '2024'
        },
        {
            title: 'Audit Automation Suite',
            description: 'AI-powered audit workflows and reporting system that revolutionizes traditional auditing processes. Our suite leverages machine learning to identify patterns, detect anomalies, and generate comprehensive reports, reducing manual effort while improving accuracy and insights.',
            category: 'Technology',
            image: pro3,
            link: 'https://example.com/project3',
            stats: { clients: '350+', completion: '97%' }
        }
    ]

    return (
        <div>
            <section className='py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20 relative overflow-hidden'>
                <div className='absolute inset-0 opacity-30'>
                    <div className='absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl'></div>
                    <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl'></div>
                </div>
                <div className='container mx-auto px-6 relative z-10'>
                    <div className='text-center mb-16'>
                        <span className='text-primary font-semibold text-lg uppercase tracking-wider'>
                            Our Work
                        </span>
                        <h2 className='text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6'>
                            Featured Projects
                        </h2>
                        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                            Delivering excellence through innovative solutions and strategic partnerships
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                        {projects.map((project, index) => {
                            const isExpanded = expandedProjects.has(index)
                            const shouldTruncate = project.description.length > 120
                            const displayDescription = isExpanded || !shouldTruncate
                                ? project.description
                                : `${project.description.slice(0, 120)}...`

                            return (
                                <div
                                    key={index}
                                    className='group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2'
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
                                            <div className='absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent'></div>
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
                                            <h3 className='text-[22px] font-serif font-bold text-foreground group-hover:text-primary transition-colors group-hover/title:text-primary flex items-center gap-2'>
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

                    <div className='text-center'>
                        <Link
                            to='/projects'
                            className='inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:scale-105 group'
                        >
                            View All Projects
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5 group-hover:translate-x-1 transition-transform'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
