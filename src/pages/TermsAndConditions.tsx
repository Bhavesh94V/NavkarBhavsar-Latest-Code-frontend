// import { useEffect } from "react";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";

// const TermsAndConditions = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         document.title = "Terms and Conditions - CA & CS Advisory Services";
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div className="min-h-screen bg-background">
//             {/* Header */}
//             <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
//                 <div className="container mx-auto px-4 py-16">
//                     <Button
//                         variant="ghost"
//                         onClick={() => navigate(-1)}
//                         className="mb-6 text-white hover:bg-white/20"
//                     >
//                         <ArrowLeft className="w-4 h-4 mr-2" />
//                         Back
//                     </Button>
//                     <div className="max-w-4xl mx-auto text-center">
//                         <h1 className="heading-professional text-4xl md:text-5xl font-bold mb-4">
//                             Terms and Conditions
//                         </h1>
//                         <p className="text-lg text-primary-foreground/90">
//                             CA & CS Advisory Services
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="container mx-auto px-4 py-16">
//                 <div className="max-w-4xl mx-auto">
//                     <div className="card-professional p-8 md:p-12 space-y-8">

//                         {/* Section 1 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 1. Introduction
//                             </h2>
//                             <p className="text-muted-foreground leading-relaxed">
//                                 These Terms and Conditions ("Agreement") govern the relationship between Navkar Bhavsar and Company,
//                                 a firm of Chartered Accountants and Company Secretaries, and the Client for the provision of
//                                 professional advisory and consultancy services.
//                             </p>
//                         </section>

//                         {/* Section 2 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 2. Scope of Services
//                             </h2>
//                             <p className="text-muted-foreground leading-relaxed">
//                                 The Firm agrees to provide advisory services which may include compliance, tax consultancy,
//                                 secretarial services, audit support, and other professional services as mutually agreed in writing.
//                             </p>
//                         </section>

//                         {/* Section 3 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 3. Engagement and Acceptance
//                             </h2>
//                             <p className="text-muted-foreground leading-relaxed">
//                                 The Client's engagement is confirmed upon signing this Agreement or any written acceptance of
//                                 the firm's engagement letter. Services shall commence from the date agreed.
//                             </p>
//                         </section>

//                         {/* Section 4 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 4. Fees and Payment Terms
//                             </h2>
//                             <ul className="space-y-2 text-muted-foreground">
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>Fees for services will be as per the agreed quotation or fee schedule.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>Payments shall be made within 30 days of invoice receipt.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>Late payments may attract interest or suspension of services.</span>
//                                 </li>
//                             </ul>
//                         </section>

//                         {/* Section 5 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 5. Client Responsibilities
//                             </h2>
//                             <ul className="space-y-2 text-muted-foreground">
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>The Client shall provide accurate, complete information and timely cooperation.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>The Client shall ensure compliance with statutory obligations as applicable.</span>
//                                 </li>
//                             </ul>
//                         </section>

//                         {/* Section 6 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 6. Confidentiality
//                             </h2>
//                             <ul className="space-y-2 text-muted-foreground">
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>The Firm and Client shall maintain confidentiality of all shared information.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>Confidential information shall not be disclosed to third parties without prior written consent, except as required by law.</span>
//                                 </li>
//                             </ul>
//                         </section>

//                         {/* Section 7 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 7. Intellectual Property
//                             </h2>
//                             <ul className="space-y-2 text-muted-foreground">
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>Documents, reports, and recommendations provided by the Firm remain its intellectual property.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>The Client may use such materials solely for the intended purpose.</span>
//                                 </li>
//                             </ul>
//                         </section>

//                         {/* Section 8 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 8. Limitation of Liability
//                             </h2>
//                             <ul className="space-y-2 text-muted-foreground">
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>The Firm shall perform services with due diligence but does not guarantee specific outcomes.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>Liability shall be limited to fees paid for services rendered.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>The Firm is not responsible for losses due to incomplete or incorrect information provided by the Client.</span>
//                                 </li>
//                             </ul>
//                         </section>

//                         {/* Section 9 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 9. Indemnity
//                             </h2>
//                             <p className="text-muted-foreground leading-relaxed">
//                                 The Client agrees to indemnify the Firm against any claims arising from reliance on incorrect
//                                 information or misuse of the Firm's advice.
//                             </p>
//                         </section>

//                         {/* Section 10 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 10. Term and Termination
//                             </h2>
//                             <ul className="space-y-2 text-muted-foreground">
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>This Agreement remains in force until the completion of services or termination by either party with 30 days' notice.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>Termination does not relieve the Client's obligation to pay for services rendered.</span>
//                                 </li>
//                             </ul>
//                         </section>

//                         {/* Section 11 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 11. Governing Law and Dispute Resolution
//                             </h2>
//                             <ul className="space-y-2 text-muted-foreground">
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>These Terms are governed by the laws of India.</span>
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                                     <span>Disputes shall be resolved through mediation or arbitration as mutually agreed, or by courts having jurisdiction in Ahmedabad only.</span>
//                                 </li>
//                             </ul>
//                         </section>

//                         {/* Section 12 */}
//                         <section>
//                             <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
//                                 12. Amendments
//                             </h2>
//                             <p className="text-muted-foreground leading-relaxed">
//                                 Any changes to this Agreement shall be made in writing and signed by both parties.
//                             </p>
//                         </section>

//                         {/* Footer Note */}
//                         <div className="mt-12 pt-8 border-t border-border">
//                             <p className="text-sm text-muted-foreground text-center">
//                                 Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TermsAndConditions;




import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsAndConditions = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Terms and Conditions - CA & CS Advisory Services";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <Header></Header>
            <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <div className="container mx-auto px-4 mt-16 py-16">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(-1)}
                        className="mb-6 text-white hover:bg-white/20"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="heading-professional text-white text-4xl md:text-5xl font-bold mb-4">
                            Terms and Conditions
                        </h1>
                        <p className="text-lg text-primary-foreground/90">
                            CA & CS Advisory Services
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="card-professional p-10 md:p-16 space-y-10 shadow-strong">

                        {/* Section 1 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                1. Introduction
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                These Terms and Conditions ("Agreement") govern the relationship between <span className="font-semibold text-foreground">Navkar Bhavsar and Company</span>,
                                a firm of Chartered Accountants and Company Secretaries, and the Client for the provision of
                                professional advisory and consultancy services.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                2. Scope of Services
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                The Firm agrees to provide advisory services which may include compliance, tax consultancy,
                                secretarial services, audit support, and other professional services as mutually agreed in writing.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                3. Engagement and Acceptance
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                The Client's engagement is confirmed upon signing this Agreement or any written acceptance of
                                the firm's engagement letter. Services shall commence from the date agreed.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                4. Fees and Payment Terms
                            </h2>
                            <ul className="space-y-3 text-muted-foreground text-lg">
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>Fees for services will be as per the agreed quotation or fee schedule.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>Payments shall be made within 30 days of invoice receipt.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>Late payments may attract interest or suspension of services.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                5. Client Responsibilities
                            </h2>
                            <ul className="space-y-3 text-muted-foreground text-lg">
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>The Client shall provide accurate, complete information and timely cooperation.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>The Client shall ensure compliance with statutory obligations as applicable.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                6. Confidentiality
                            </h2>
                            <ul className="space-y-3 text-muted-foreground text-lg">
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>The Firm and Client shall maintain confidentiality of all shared information.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>Confidential information shall not be disclosed to third parties without prior written consent, except as required by law.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 7 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                7. Intellectual Property
                            </h2>
                            <ul className="space-y-3 text-muted-foreground text-lg">
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>Documents, reports, and recommendations provided by the Firm remain its intellectual property.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>The Client may use such materials solely for the intended purpose.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 8 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                8. Limitation of Liability
                            </h2>
                            <ul className="space-y-3 text-muted-foreground text-lg">
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>The Firm shall perform services with due diligence but does not guarantee specific outcomes.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>Liability shall be limited to fees paid for services rendered.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>The Firm is not responsible for losses due to incomplete or incorrect information provided by the Client.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 9 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                9. Indemnity
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                The Client agrees to indemnify the Firm against any claims arising from reliance on incorrect
                                information or misuse of the Firm's advice.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                10. Term and Termination
                            </h2>
                            <ul className="space-y-3 text-muted-foreground text-lg">
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>This Agreement remains in force until the completion of services or termination by either party with 30 days' notice.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>Termination does not relieve the Client's obligation to pay for services rendered.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 11 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                11. Governing Law and Dispute Resolution
                            </h2>
                            <ul className="space-y-3 text-muted-foreground text-lg">
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>These Terms are governed by the laws of India.</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                    <span>Disputes shall be resolved through mediation or arbitration as mutually agreed, or by courts having jurisdiction in Ahmedabad only.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 12 */}
                        <section className="border-l-4 border-primary pl-6">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                                12. Amendments
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Any changes to this Agreement shall be made in writing and signed by both parties.
                            </p>
                        </section>

                        {/* Footer Note */}
                        <div className="mt-16 pt-8 border-t-2 border-primary/20">
                            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 text-center">
                                <p className="text-sm text-muted-foreground font-medium">
                                    <span className="block mb-2 text-foreground font-semibold">Document Information</span>
                                    Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <p className="text-xs text-muted-foreground mt-3">
                                    For any queries regarding these terms, please contact our office.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TermsAndConditions;