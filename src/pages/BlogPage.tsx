import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Link } from 'react-router-dom';

// --- DUMMY DATA ---
const blogPosts = [
    {
        "id": 1,
        "slug": "gst-compliance-changes-2025",
        "title": "5 Major GST Compliance Changes in 2025",
        "excerpt": "The GST portal has introduced several new features and compliance rules in 2025. Learn how they can impact your business.",
        "content": {
            "para1": "In 2025, GST compliance is undergoing significant changes. Businesses must prepare for a revamped e-invoicing system that mandates the generation of e-invoices for all B2B transactions, regardless of turnover. This move aims to curb tax evasion and bring more businesses into the formal economy. Additionally, the Input Tax Credit (ITC) rules have been modified, with stricter verification processes to prevent fraudulent claims. The concept of 'matching' of ITC, where the credit is only available if the supplier has filed their returns and paid the tax, is now being enforced more rigorously. This means businesses will have to be more diligent in choosing their vendors and ensuring their compliance. Furthermore, there is enhanced scrutiny of returns through AI-powered analytics, which can flag discrepancies in real-time. This will require businesses to maintain immaculate records and ensure the accuracy of their filings.",
            "para2": "These changes are designed to improve transparency and reduce tax evasion but will require companies to adapt their internal accounting systems. Practical preparation, including staff training and updated software, will be crucial for businesses to stay compliant. Companies should consider investing in automated GST compliance software that can integrate with their existing ERP systems to streamline the process of e-invoicing, ITC reconciliation, and return filing. Regular training sessions for the finance and accounting teams on the latest GST amendments will also be essential to avoid costly errors and penalties. Proactive measures, such as conducting periodic internal audits of GST data, can help in identifying and rectifying any compliance gaps before they are flagged by the tax authorities. In essence, a proactive and technology-driven approach will be the key to navigating the evolving GST landscape in 2025 and beyond."
        },
        "imageUrl": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
        "category": "Taxation",
        "author": "Riya Sharma",
        "date": "Sep 22, 2025"
    },
    {
        "id": 2,
        "slug": "choosing-right-business-structure",
        "title": "Choosing the Right Business Structure: Proprietorship, LLP, or Pvt. Ltd.?",
        "excerpt": "Selecting the right legal structure is crucial for your startup’s success. Here is a detailed breakdown of the pros and cons.",
        "content": {
            "para1": "The choice of business structure has a direct impact on taxation, liability, and scalability. A Sole Proprietorship is the simplest to set up, with minimal compliance requirements, making it ideal for small businesses and individual entrepreneurs. However, the biggest drawback is the unlimited liability, which means the owner's personal assets are at risk in case of business debts. A Limited Liability Partnership (LLP) offers a middle ground, providing the flexibility of a partnership with the benefit of limited liability for the partners. This structure is suitable for professional services firms and businesses with multiple partners who want to protect their personal assets. A Private Limited Company is a more formal and regulated structure, offering limited liability to its shareholders and a separate legal identity. This is the preferred structure for startups looking to raise funding from venture capitalists and angel investors, as it allows for easy transfer of shares and offers a clear ownership structure.",
            "para2": "Entrepreneurs should evaluate their business goals, risk appetite, and compliance capacity before finalizing the structure. If you are starting small and want to test a business idea with minimal investment, a proprietorship might be the best choice. However, if you are planning to build a scalable business with external funding, a private limited company is the way to go. An LLP is a good option if you are in a professional service and want to have a partnership with limited liability. A well-chosen structure can not only save costs in the long run but also create opportunities for expansion. It's also important to consider the compliance costs associated with each structure. While a proprietorship has minimal compliance, an LLP and a private limited company have annual filing requirements with the Ministry of Corporate Affairs. Therefore, a thorough cost-benefit analysis is essential before making a final decision."
        },
        "imageUrl": "https://images.pexels.com/photos/259006/pexels-photo-259006.jpeg",
        "category": "Corporate Law",
        "author": "Amit Singh",
        "date": "Sep 18, 2025"
    },
    {
        "id": 3,
        "slug": "importance-of-internal-audit",
        "title": "Internal Audit: Expense or Essential Investment?",
        "excerpt": "A strong internal audit system protects your business from risks and improves efficiency.",
        "content": {
            "para1": "Many businesses view internal audits as an unnecessary cost, but in reality, they are a safeguard against financial mismanagement and fraud. An effective internal audit function helps in evaluating and improving the effectiveness of risk management, control, and governance processes. It provides an independent and objective assurance that the organization's operations are functioning as intended. Internal auditors can identify weaknesses in internal controls and recommend corrective actions to mitigate risks. They also play a crucial role in ensuring compliance with laws, regulations, and internal policies. Furthermore, audits bring credibility to financial reporting, which is essential for building trust with stakeholders, including investors, lenders, and customers. By identifying operational inefficiencies and suggesting improvements, internal audits can also contribute to cost savings and enhanced productivity.",
            "para2": "Establishing a robust internal audit framework helps identify gaps early, reduces compliance risks, and builds investor confidence. For growing companies, it is an investment that pays back many times over. A well-structured internal audit plan should be aligned with the organization's strategic objectives and should focus on high-risk areas. The scope of internal audits can extend beyond financial controls to include operational processes, IT systems, and compliance with ethical standards. The findings and recommendations of the internal audit should be reported to the audit committee and senior management to ensure that corrective actions are implemented in a timely manner. In today's dynamic business environment, where risks are constantly evolving, a proactive and risk-based internal audit function is not just a best practice but a necessity for sustainable growth and corporate governance."
        },
        "imageUrl": "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg",
        "category": "Auditing",
        "author": "Priya Desai",
        "date": "Sep 15, 2025"
    },
    {
        "id": 4,
        "slug": "fema-guidelines-for-startups",
        "title": "FEMA Guidelines for Startups: Simplifying Foreign Investment",
        "excerpt": "New FEMA rules have made foreign funding easier for startups. Here’s what you need to know.",
        "content": {
            "para1": "Startups seeking foreign investment must comply with the Foreign Exchange Management Act (FEMA) guidelines, which regulate the flow of foreign exchange in India. Recent changes have simplified the process, making it faster and less restrictive for startups to raise capital from foreign investors. The introduction of the 'Startup India' initiative has led to several relaxations in FEMA regulations, such as allowing startups to raise up to a certain limit in foreign currency through convertible notes, which are a popular instrument for early-stage funding. Additionally, the process for reporting foreign direct investment (FDI) has been streamlined through the introduction of a single master form. These changes are aimed at creating a more favorable environment for foreign investment in Indian startups and promoting innovation and entrepreneurship in the country.",
            "para2": "While the new norms are business-friendly, compliance checks remain critical. Startups must maintain proper records of all foreign investments and adhere to the reporting requirements of the Reserve Bank of India (RBI) to avoid penalties. It is essential to ensure that the foreign investment is received through proper banking channels and that the pricing guidelines for the issuance of shares to foreign investors are followed. Startups should also be mindful of the sectoral caps and other conditions applicable to foreign investment in their specific industry. Seeking professional advice from legal and financial experts who specialize in FEMA compliance is highly recommended to navigate the complexities of the regulations and ensure a smooth fundraising process. Proper compliance not only helps in avoiding legal troubles but also builds credibility with foreign investors, paving the way for future funding rounds."
        },
        "imageUrl": "https://images.pexels.com/photos/653429/pexels-photo-653429.jpeg",
        "category": "CS Services",
        "author": "Mohan Kumar",
        "date": "Sep 12, 2025"
    },
    {
        "id": 5,
        "slug": "ipo-listing-process-demystified",
        "title": "IPO Listing Process: From Idea to Stock Market",
        "excerpt": "Taking a company public involves multiple steps. Here’s a simplified breakdown.",
        "content": {
            "para1": "An Initial Public Offering (IPO) is a complex and transformative process that turns a private company into a publicly listed entity, allowing it to raise capital from the public. The journey to an IPO involves several key stages. The first step is the preparation of detailed financial statements that are audited and compliant with the regulations of the Securities and Exchange Board of India (SEBI). The company then needs to appoint merchant bankers or underwriters who will manage the IPO process. A crucial part of the process is the drafting of the Draft Red Herring Prospectus (DRHP), which is a comprehensive document containing all the necessary information about the company's business, financials, and the IPO. The DRHP is then filed with SEBI for its approval. This is a rigorous process that involves multiple rounds of queries and clarifications from the regulator.",
            "para2": "While the journey can be lengthy and demanding, a successful IPO provides access to a larger pool of capital for growth and expansion, enhances the company's brand visibility and credibility, and creates liquidity for its existing shareholders. Once SEBI approves the DRHP, the company, in consultation with the merchant bankers, decides the price band for the shares and the dates for the IPO. The IPO is then opened to the public for subscription. After the successful completion of the IPO, the company's shares are listed on the stock exchanges, and trading begins. It is important for companies to assess their readiness for an IPO, which includes having a strong management team, a proven track record of financial performance, and a clear growth strategy, before embarking on this journey."
        },
        "imageUrl": "https://images.pexels.com/photos/90333/pexels-photo-90333.jpeg",
        "category": "Corporate Finance",
        "author": "Anjali Verma",
        "date": "Sep 10, 2025"
    },
    {
        "id": 6,
        "slug": "hr-payroll-compliance",
        "title": "HR & Payroll Compliance: Small Mistakes, Big Penalties",
        "excerpt": "Managing PF, ESIC, and labor laws is crucial to avoid legal trouble.",
        "content": {
            "para1": "HR and payroll compliance is a vital and non-negotiable aspect of running a business in India. Non-compliance with statutory regulations such as the Employees' Provident Fund (PF), Employees' State Insurance (ESIC), and various labor laws can attract hefty penalties, legal action, and significant damage to the company's reputation. The legal landscape for employment is complex and constantly evolving, with numerous central and state laws governing aspects like minimum wages, working hours, overtime, and employee benefits. It is imperative for businesses to stay updated with the latest amendments and ensure that their HR and payroll processes are fully compliant. This includes timely deposit of statutory dues, accurate calculation of contributions, and proper maintenance of records.",
            "para2": "Businesses must regularly update their compliance processes, maintain accurate and detailed records, and consider investing in robust payroll software to automate calculations and avoid manual errors. Such software can help in generating accurate payroll, managing statutory filings, and ensuring that the company is always compliant with the latest regulations. Beyond just avoiding fines, a strong commitment to compliance also improves employee trust and morale. When employees see that their statutory dues are being handled correctly and on time, it fosters a sense of security and loyalty towards the organization. Therefore, viewing HR and payroll compliance not just as a legal obligation but as a strategic function can contribute to a positive work environment and long-term business success."
        },
        "imageUrl": "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg",
        "category": "CS Services",
        "author": "Vikram Patel",
        "date": "Sep 05, 2025"
    },
    {
        "id": 7,
        "slug": "working-capital-management",
        "title": "Effective Working Capital Management for SMEs",
        "excerpt": "Learn strategies to manage cash flow and support growth in small and medium businesses.",
        "content": {
            "para1": "For Small and Medium Enterprises (SMEs), effective working capital management is the lifeblood that ensures survival and fuels growth. It involves the careful balancing of current assets (like cash, inventory, and accounts receivable) and current liabilities (such as accounts payable and short-term loans) to ensure smooth day-to-day operations. A positive working capital indicates that a company has enough short-term assets to cover its short-term liabilities, which is a key indicator of its financial health and operational efficiency. Poor working capital management can lead to cash flow problems, making it difficult for a business to meet its immediate obligations, such as paying suppliers and employees, even if it is profitable on paper.",
            "para2": "Key strategies for effective working capital management include optimizing inventory levels to avoid overstocking and carrying costs, improving the collection of accounts receivable by implementing clear credit policies and timely follow-ups, and negotiating better credit terms with suppliers to extend the payment cycle. SMEs can also explore options like invoice discounting and trade credit to manage their cash flow more effectively. By implementing sound working capital management practices, SMEs can improve their liquidity, reduce their reliance on external financing, and strengthen their overall financial health, creating a solid foundation for sustainable growth and long-term success."
        },
        "imageUrl": "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg",
        "category": "Corporate Finance",
        "author": "Riya Sharma",
        "date": "Sep 01, 2025"
    },
    {
        "id": 8,
        "slug": "understanding-due-diligence",
        "title": "The Critical Role of Due Diligence in Business Transactions",
        "excerpt": "A deep dive into why thorough due diligence is non-negotiable before any major business decision.",
        "content": {
            "para1": "Due diligence is an exhaustive investigation and analysis conducted by a prospective buyer or investor to assess the merits and risks of a potential business transaction, such as a merger, acquisition, or significant investment. This process involves a comprehensive review of the target company's financial records, legal compliance, operational efficiency, and market position. Financial due diligence focuses on verifying the accuracy of financial statements, understanding the company's earnings and cash flows, and identifying any hidden liabilities. Legal due diligence examines contracts, licenses, pending litigations, and compliance with all applicable laws and regulations to uncover any potential legal risks. Operational due diligence assesses the company's internal processes, technology infrastructure, and management team to evaluate its long-term viability and potential for growth.",
            "para2": "Conducting thorough due diligence is paramount to making informed business decisions and mitigating potential risks. It helps the acquirer or investor to identify any red flags or deal-breakers before committing to the transaction. The findings of the due diligence process can also be used to negotiate a more favorable price and better terms for the deal. Furthermore, it provides valuable insights into the target company's operations, which can be used to plan for a smooth post-merger integration. In essence, due diligence is not just a procedural formality but a critical strategic tool that can significantly impact the success of a business transaction. Skipping or rushing through this process can lead to costly surprises and, in the worst-case scenario, the failure of the entire venture."
        },
        "imageUrl": "https://images.pexels.com/photos/955400/pexels-photo-955400.jpeg",
        "category": "Corporate Finance",
        "author": "Riya Sharma",
        "date": "Sep 01, 2025"
    }
]




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
