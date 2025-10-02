import { useEffect, useRef, useState } from 'react'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import clint1 from '../../assets/client1.png'
import clint2 from '../../assets/client2.png'
import clint3 from '../../assets/client3.png'

const ClientsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-up')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const clientLogos = [
    { name: 'TechCorp Solutions', logo: '/api/placeholder/150/80' },
    { name: 'Global Manufacturing', logo: '/api/placeholder/150/80' },
    { name: 'Retail Dynamics', logo: '/api/placeholder/150/80' },
    { name: 'Financial Services Group', logo: '/api/placeholder/150/80' },
    { name: 'Healthcare Partners', logo: '/api/placeholder/150/80' },
    { name: 'Educational Foundation', logo: '/api/placeholder/150/80' },
    { name: 'Real Estate Ventures', logo: '/api/placeholder/150/80' },
    { name: 'Export Import Co.', logo: '/api/placeholder/150/80' }
  ]

  const testimonials = [
    {
      name: 'Priyesh Malani',
      position: 'CFO, Global Manufacturing',
      company: 'Manufacturing Industry',
      rating: 5,
      testimonial:
        `Good knowledge demonstrates exceptional knowledge and expertise in company compliance. Their thorough understanding of corporate laws and business regulations ensures clients remain fully compliant at all times. The team is proactive in anticipating regulatory changes and promptly advising practical solutions tailored to each business's unique needs.`,
      image: clint1
    },
    {
      name: 'CHETAN kumar',
      position: 'CEO, TechCorp Solutions',
      company: 'Technology Sector',
      rating: 5,
      testimonial:
        "Navkar Bhavsar provided exceptional business legal compliance services, ensuring our company's regulatory requirements were met. Their expertise, attention to detail, and timely delivery were impressive. I highly recommend their services to any business seeking reliable and knowledgeable compliance support.",
      image: clint2
    },

    {
      name: 'Aalok .p',
      position: 'Founder, Retail Dynamics',
      company: 'Retail Business',
      rating: 5,
      testimonial:
        'The company has consistently delivered excellent service, demonstrating professional aptitude, a sincere approach to query resolution, and timely execution.',
      image: clint3
    }
  ]

  const [expanded, setExpanded] = useState(false);


  const industries = [
    'Information Technology',
    'Manufacturing',
    'Healthcare',
    'Real Estate',
    'Financial Services',
    'Education',
    'Retail & E-commerce',
    'Import & Export',
    'Construction',
    'Hospitality',
    'Pharmaceuticals',
    'Textiles'
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-gradient-secondary'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='animate-on-scroll'>
            <span className='text-accent font-semibold text-lg'>
              Our Clients
            </span>
            <h2 className='text-4xl md:text-5xl font-serif font-bold text-primary mt-4 mb-6'>
              Trusted by Leading Businesses
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We're proud to serve diverse businesses across industries, from
              startups to established corporations.
            </p>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className='mb-20'>
          <div className='animate-on-scroll grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center'>
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className='bg-background rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 group'
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className='w-full h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className='mb-20'>
          <div className='animate-on-scroll text-center mb-12'>
            <h3 className='text-3xl font-serif font-bold text-primary mb-4'>
              Industries We Serve
            </h3>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Our expertise spans across multiple industries, enabling us to
              provide specialized solutions for unique sector requirements.
            </p>
          </div>

          <div className='animate-on-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {industries.map((industry, index) => (
              <div
                key={index}
                className='bg-background border border-border rounded-lg p-4 text-center hover:border-accent hover:shadow-soft transition-all duration-300 group'
              >
                <span className='text-foreground font-medium group-hover:text-accent transition-colors duration-300'>
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className='mb-16'>
          <div className='animate-on-scroll text-center mb-12'>
            <h3 className='text-3xl font-serif font-bold text-primary mb-4'>
              What Our Clients Say
            </h3>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Don't just take our word for it. Here's what our valued clients
              have to say about our services.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => {
              const [expanded, setExpanded] = useState(false);
              const text = testimonial.testimonial;
              const limit = 150; // char limit before truncation

              return (
                <div
                  key={index}
                  className="animate-on-scroll card-professional p-8 relative group hover:shadow-strong transition-all duration-500"
                >
                  <div className="absolute top-6 right-6 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-accent" />
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-2 italic">
                    "
                    {expanded || text.length <= limit
                      ? text
                      : text.slice(0, limit) + "..."}
                    "
                    {text.length > limit && (
                      <button
                        className="text-accent ms-2 text-sm font-medium hover:underline mb-4"
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>



                  <div className="flex items-center mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* CTA Section */}
        <div className='animate-on-scroll text-center'>
          <div className='bg-gradient-primary rounded-2xl p-12 text-white'>
            <h3 className='text-3xl font-serif font-bold mb-4'>
              Join Our Growing Family of Satisfied Clients
            </h3>
            <p className='text-xl mb-8 text-white/90 max-w-2xl mx-auto'>
              Experience the difference of working with a trusted chartered
              accountancy firm. Let us help you achieve your financial goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Button
                  size='lg'
                  variant='secondary'
                  className='bg-white text-primary hover:bg-white/90'
                >
                  Start Your Journey
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
              </Link>

              <Link
                to='/clients'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-black hover:bg-white hover:text-primary'
                >
                  View All Clients
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
