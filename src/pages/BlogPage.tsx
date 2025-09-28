import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Link } from 'react-router-dom';

// --- DUMMY DATA ---
// Aap isko apne API ya CMS se replace kar sakte hain.
const blogPosts = [
    {
        id: 1,
        slug: 'gst-compliance-changes-2025',
        title: '5 Major GST Compliance Changes in 2025',
        excerpt: 'The GST portal has introduced several new features and compliance rules in 2025. Learn how they can impact your business.',
        content: {
            para1: "In 2025, GST compliance is undergoing significant changes. Businesses must prepare for a revamped e-invoicing system, modified input tax credit rules, and enhanced scrutiny of returns. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet.",
            para2: "These changes are designed to improve transparency and reduce tax evasion but will require companies to adapt their internal accounting systems. Practical preparation, including staff training and updated software, will help businesses stay compliant. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet."
        },
        imageUrl: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
        category: 'Taxation',
        author: 'Riya Sharma',
        date: 'Sep 22, 2025',
    },
    {
        id: 2,
        slug: 'choosing-right-business-structure',
        title: 'Choosing the Right Business Structure: Proprietorship, LLP, or Pvt. Ltd.?',
        excerpt: 'Selecting the right legal structure is crucial for your startup’s success. Here is a detailed breakdown of the pros and cons.',
        content: {
            para1: "The choice of business structure has a direct impact on taxation, liability, and scalability. Proprietorships are simple but risky due to unlimited liability. LLPs provide flexibility with limited liability, while Private Limited Companies attract investors and allow for rapid growth.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet.",
            para2: "Entrepreneurs should evaluate their business goals, risk appetite, and compliance capacity before finalizing the structure. A well-chosen structure can save costs and create opportunities for expansion.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet."
        },
        imageUrl: 'https://images.pexels.com/photos/259006/pexels-photo-259006.jpeg',
        category: 'Corporate Law',
        author: 'Amit Singh',
        date: 'Sep 18, 2025',
    },
    {
        id: 3,
        slug: 'importance-of-internal-audit',
        title: 'Internal Audit: Expense or Essential Investment?',
        excerpt: 'A strong internal audit system protects your business from risks and improves efficiency.',
        content: {
            para1: "Many businesses view internal audits as an unnecessary cost, but in reality, they are a safeguard against financial mismanagement and fraud. Audits bring credibility to financial reporting and enhance operational efficiency.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet.",
            para2: "Establishing a robust internal audit framework helps identify gaps early, reduces compliance risks, and builds investor confidence. For growing companies, it is an investment that pays back many times over.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet."
        },
        imageUrl: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg',
        category: 'Auditing',
        author: 'Priya Desai',
        date: 'Sep 15, 2025',
    },
    {
        id: 4,
        slug: 'fema-guidelines-for-startups',
        title: 'FEMA Guidelines for Startups: Simplifying Foreign Investment',
        excerpt: 'New FEMA rules have made foreign funding easier for startups. Here’s what you need to know.',
        content: {
            para1: "Startups seeking foreign investment must comply with FEMA (Foreign Exchange Management Act) guidelines. Recent changes have simplified the process, making it faster and less restrictive.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet.",
            para2: "While the new norms are business-friendly, compliance checks remain critical. Startups must maintain proper records and adhere to RBI reporting requirements to avoid penalties.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet."
        },
        imageUrl: 'https://images.pexels.com/photos/653429/pexels-photo-653429.jpeg',
        category: 'CS Services',
        author: 'Mohan Kumar',
        date: 'Sep 12, 2025',
    },
    {
        id: 5,
        slug: 'ipo-listing-process-demystified',
        title: 'IPO Listing Process: From Idea to Stock Market',
        excerpt: 'Taking a company public involves multiple steps. Here’s a simplified breakdown.',
        content: {
            para1: "An IPO (Initial Public Offering) is a complex process that transforms a private company into a publicly listed entity. It involves preparation of financial statements, SEBI approval, appointing underwriters, and drafting the prospectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet.",
            para2: "While the journey can be lengthy, listing provides access to larger capital, enhances brand visibility, and creates liquidity for shareholders. Companies should assess readiness before initiating the IPO process.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet."
        },
        imageUrl: 'https://images.pexels.com/photos/90333/pexels-photo-90333.jpeg',
        category: 'Corporate Finance',
        author: 'Anjali Verma',
        date: 'Sep 10, 2025',
    },
    {
        id: 6,
        slug: 'hr-payroll-compliance',
        title: 'HR & Payroll Compliance: Small Mistakes, Big Penalties',
        excerpt: 'Managing PF, ESIC, and labor laws is crucial to avoid legal trouble.',
        content: {
            para1: "HR and payroll compliance is a vital aspect of running a business. Non-compliance with PF, ESIC, and labor laws can attract hefty penalties and damage company reputation.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet.",
            para2: "Businesses must regularly update their compliance processes, maintain accurate records, and invest in payroll software to avoid errors. Compliance not only prevents fines but also improves employee trust.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet."
        },
        imageUrl: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg',
        category: 'CS Services',
        author: 'Vikram Patel',
        date: 'Sep 05, 2025',
    },
    {
        id: 7,
        slug: 'working-capital-management',
        title: 'Effective Working Capital Management for SMEs',
        excerpt: 'Learn strategies to manage cash flow and support growth in small and medium businesses.',
        content: {
            para1: "For SMEs, working capital management is critical to survival and growth. It involves balancing current assets and liabilities to ensure smooth operations.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet.",
            para2: "Key strategies include optimizing inventory, improving receivables collection, and negotiating better credit terms with suppliers. Sound working capital management improves liquidity and strengthens financial health.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet."
        },
        imageUrl: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg',
        category: 'Corporate Finance',
        author: 'Riya Sharma',
        date: 'Sep 01, 2025',
    },
    {
        id: 8,
        slug: 'working-capital-management',
        title: 'Effective Working Capital Management for SMEs',
        excerpt: 'Learn strategies to manage cash flow and support growth in small and medium businesses.',
        content: {
            para1: "For SMEs, working capital management is critical to survival and growth. It involves balancing current assets and liabilities to ensure smooth operations.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet.",
            para2: "Key strategies include optimizing inventory, improving receivables collection, and negotiating better credit terms with suppliers. Sound working capital management improves liquidity and strengthens financial health.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut exercitationem soluta! Sit mollitia harum, porro quasi pariatur quaerat illo, perspiciatis nisi cumque accusantium a, veritatis quisquam minus vero eligendi ut rem autem? Eum sed sapiente dolorum, nobis amet aliquam libero officia repellendus nesciunt maiores praesentium aperiam! Exercitationem aliquam quis quod, nulla velit tempora? Maxime distinctio dolorum repellat dolores illo, perferendis animi, qui corporis beatae nam magnam molestiae! Nemo iure dolor maiores dicta! Sit enim fugiat voluptas dolorem. Perspiciatis reprehenderit sint blanditiis earum nemo, quam illum dicta incidunt quibusdam, recusandae unde quidem, quod nihil obcaecati! Ratione voluptates quisquam dolorem eveniet."
        },
        imageUrl: 'https://images.pexels.com/photos/955400/pexels-photo-955400.jpeg',
        category: 'Corporate Finance',
        author: 'Riya Sharma',
        date: 'Sep 01, 2025',
    }
];


// --- SVG ICONS (Self-contained) ---
const CalendarIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);
const UserIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const FileText = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
);
const ChevronRight = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>
);
const ArrowLeft = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
);

// --- BLOG PAGE COMPONENTS ---

const BlogListPage = ({ posts, onPostSelect, onCategorySelect, selectedCategory, onPageChange, currentPage, totalPages }) => {
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);
    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
    const POSTS_PER_PAGE = 6;

    const paginatedPosts = otherPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    return (
        <>
            {/* Hero Section */}
            <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
                <div className='container mx-auto px-6 relative z-10'>
                    <FileText className='w-16 h-16 mx-auto mb-6 text-gray-200' />
                    <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6'>
                        Latest Insights & Articles
                    </h1>
                    <p className='max-w-3xl mx-auto text-lg text-gray-200/90'>
                        Stay updated with the latest news, compliance changes, and expert opinions
                        in finance, taxation, corporate law, and company management.
                    </p>
                </div>
            </section>

            <main className="bg-background">
                <div className="container mx-auto px-4 py-12 md:py-16">
                    {/* Category Filter Section */}
                    <section className="mb-16 animate-fade-up">
                        <h2 className="text-center text-lg font-semibold text-foreground mb-4">Browse by Category</h2>
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => onCategorySelect(category)}
                                    className={`btn-accent text-sm px-4 py-2 rounded-full shadow-soft hover:shadow-medium transition-all duration-300 ${selectedCategory === category ? 'bg-primary text-primary-foreground' : ''
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Featured Post Section */}
                    {featuredPost && (
                        <section className="mb-16 animate-scale-in">
                            <div onClick={() => onPostSelect(featuredPost)} className="block group cursor-pointer">
                                <div className="card-professional grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-8">
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            src={featuredPost.imageUrl}
                                            alt={featuredPost.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                                            {featuredPost.category}
                                        </span>
                                        <h2 className="heading-professional text-3xl mb-3 text-primary transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-muted-foreground mb-4">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <UserIcon className="w-4 h-4" />
                                                <span>{featuredPost.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CalendarIcon className="w-4 h-4" />
                                                <span>{featuredPost.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* All Posts Grid */}
                    <section>
                        <h2 className="heading-professional text-3xl mb-8 text-center md:text-left">
                            More Articles
                        </h2>
                        {paginatedPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {paginatedPosts.map((post, index) => (
                                    <div
                                        onClick={() => onPostSelect(post)}
                                        key={post.id}
                                        className="block group cursor-pointer animate-fade-up"
                                        style={{ animationDelay: `${index * 150}ms` }}
                                    >
                                        <div className="card-professional h-full flex flex-col overflow-hidden">
                                            <div className="overflow-hidden">
                                                <img
                                                    src={post.imageUrl}
                                                    alt={post.title}
                                                    width={400}
                                                    height={250}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                                                    {post.category}
                                                </span>
                                                <h3 className="heading-professional text-xl mb-2 flex-grow text-primary transition-colors">
                                                    {post.title}
                                                </h3>
                                                <div className="flex items-center mt-4 space-x-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-2">
                                                        <UserIcon className="w-4 h-4" />
                                                        <span>{post.author}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <CalendarIcon className="w-4 h-4" />
                                                        <span>{post.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-muted-foreground">
                                <p>No articles found in this category.</p>
                            </div>
                        )}
                    </section>

                    {/* Pagination Section */}
                    {totalPages > 1 && (
                        <section className="flex justify-center items-center gap-4 my-20 animate-fade-up">
                            <button
                                onClick={() => onPageChange('prev')}
                                disabled={currentPage === 1}
                                className="btn-primary py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                Previous
                            </button>
                            <span className="text-foreground font-medium">Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => onPageChange('next')}
                                disabled={currentPage === totalPages}
                                className="btn-primary py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                Next
                            </button>
                        </section>
                    )}

                    {/* Call to Action (CTA) Section */}
                    <section className="p-8 md:p-12 rounded-xl bg-gradient-primary text-primary-foreground mt-16 text-center animate-fade-up shadow-strong">
                        <h2 className="heading-professional text-3xl text-white md:text-4xl font-bold mb-4">
                            Aapke Business Ko Professional Guidance Ki Zaroorat Hai?
                        </h2>
                        <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
                            Chaahe woh company registration ho, tax filing, ya corporate compliance, hamari expert team aapki madad ke liye taiyar hai.
                        </p>
                        <Link to="/contact">
                            <button className="btn-hero">
                                Contact Us Today
                                <ChevronRight className="inline w-5 h-5 ml-2" />
                            </button>
                        </Link>
                    </section>
                </div>
            </main>
        </>
    );
};

const BlogPostDetail = ({ post, onBack }) => {
    return (
        <>
            <main className="bg-background pt-24">
                <div className="container mx-auto px-4 py-12 md:py-16">
                    <div className="max-w-4xl mx-auto">
                        <button onClick={onBack} className="flex items-center gap-2 text-primary font-semibold mb-8 hover:underline">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Blog
                        </button>

                        <article className="animate-fade-up">
                            <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full mb-4">
                                {post.category}
                            </span>
                            <h1 className="heading-professional text-primary text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <UserIcon className="w-4 h-4" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg mb-8 shadow-medium">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover" />
                            </div>

                            <div className="prose lg:prose-xl max-w-none text-foreground">
                                <p className="lead text-xl text-muted-foreground mb-6">{post.excerpt}</p>
                                {
                                    post.content ? (
                                        <>
                                            <p className="mb-4">{post.content.para1}</p>
                                            <p className="mb-4">{post.content.para2}</p>
                                        </>
                                    ) : (
                                        <p>Full content for this article is not available yet. Please check back later.</p>
                                    )
                                }

                            </div>
                        </article>
                    </div>
                </div>
            </main>
        </>
    )
}


// --- MAIN APP COMPONENT ---
export default function App() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [activePost, setActivePost] = useState(null);

    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'All') {
            return blogPosts;
        }
        return blogPosts.filter(post => post.category === selectedCategory);
    }, [selectedCategory]);

    const POSTS_PER_PAGE = 5;
    const totalPages = Math.ceil(Math.max(0, filteredPosts.length - 1) / POSTS_PER_PAGE);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page on category change
    };

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    if (activePost) {
        return (
            <div className='min-h-screen bg-background flex flex-col'>
                <Header />
                <BlogPostDetail post={activePost} onBack={() => setActivePost(null)} />
                <Footer />
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-background flex flex-col'>
            <Header />
            <BlogListPage
                posts={filteredPosts}
                onPostSelect={setActivePost}
                onCategorySelect={handleCategorySelect}
                selectedCategory={selectedCategory}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={totalPages}
            />
            <Footer />
        </div>
    );
}
