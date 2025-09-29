import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CorporateLaw from "./pages/CorporateLaw";
import GujaratVatAndServiceTax from "./pages/GujaratVatAndServiceTax";
import DirectTaxation from "./pages/DirectTaxation";
import CorporateFinancial from "./pages/CorporateFinancial";
import BPOPage from "./pages/BPO";
import AuditingAssurance from "./pages/AuditingAssurance";
import Advisory from "./pages/Advisory";
import Accounting from "./pages/AccountingServices";
import ClientsSection from "./pages/Clients";
import Articles from "./pages/Articles";
import QueryForm from "./pages/QueryForm";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import BFSIFranchiseServices from "./pages/CSServiceDetail/BFSIFranchiseServices";
import CompanyRegistration from "./pages/CSServiceDetail/CompanyRegistration";
import CompanyLawCompliance from "./pages/CSServiceDetail/CompanyLawCompliance";
import CorporateRestructuring from "./pages/CSServiceDetail/CorporateRestructuring";
import SecuritiesLawsCompliance from "./pages/CSServiceDetail/SecuritiesLawsCompliance";
import BusinessRegistrationLicense from "./pages/CSServiceDetail/BusinessRegistrationLicense";
import CompanyFormationServices from "./pages/CSServiceDetail/CompanyFormationServices";
import CorporateComplianceAudits from "./pages/CSServiceDetail/CorporateComplianceAudits";
import CompanyProfileSection from "./components/home/CompanyProfileSection";
import DepositoryParticipantAudit from "./pages/CSServiceDetail/DepositoryParticipantAudit";
import FEMARBIMatters from "./pages/CSServiceDetail/FEMARBIMatters";
import GeneralCorporateAdvisory from "./pages/CSServiceDetail/GeneralCorporateAdvisory";
import IPOListingDelisting from "./pages/CSServiceDetail/IPOListingDelisting";
import LegalDocumentsDueDiligence from "./pages/CSServiceDetail/LegalDocumentsDueDiligence";
import LLPRegistrationCompliance from "./pages/CSServiceDetail/LLPRegistrationCompliance";
import NBFCServices from "./pages/CSServiceDetail/NBFCServices";
import PayrollComplianceServices from "./pages/CSServiceDetail/PayrollComplianceServices";
import PractisingCompanySecretary from "./pages/CSServiceDetail/PractisingCompanySecretary";
import TrademarkRegistrationAdvisory from "./pages/CSServiceDetail/TrademarkRegistrationAdvisory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<ClientsSection />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/query" element={<QueryForm />} />
          <Route path="/services" element={<Services />} />

          <Route path="/services/bsfi-franchise" element={<BFSIFranchiseServices />} />
          <Route path="/services/company-registration-consultants" element={<CompanyRegistration />} />
          <Route path="/services/company-law-secretarial-compliance" element={<CompanyLawCompliance />} />
          <Route path="/services/securities-laws-compliances" element={<SecuritiesLawsCompliance />} />
          <Route path="/services/corporate-restructuring" element={<CorporateRestructuring />} />
          <Route path="/services/ipo-listing-delisting" element={<IPOListingDelisting />} />
          <Route path="/services/legal-documents-due-diligence" element={<LegalDocumentsDueDiligence />} />
          <Route path="/services/corporate-compliance-audits" element={<CorporateComplianceAudits />} />
          <Route path="/services/depository-participant-audit" element={<DepositoryParticipantAudit />} />
          <Route path="/services/practising-company-secretary" element={<PractisingCompanySecretary />} />
          <Route path="/services/fema-rbi-matters" element={<FEMARBIMatters />} />
          <Route path="/services/nbfc-nidhi-company-formation" element={<NBFCServices />} />
          <Route path="/services/company-formation" element={<CompanyFormationServices />} />
          <Route path="/services/llp-registration-compliance" element={<LLPRegistrationCompliance />} />
          <Route path="/services/general-corporate-advisory" element={<GeneralCorporateAdvisory />} />
          <Route path="/services/hr-payroll-labour-laws" element={<PayrollComplianceServices />} />
          <Route path="/services/trademark" element={<TrademarkRegistrationAdvisory />} />
          <Route path="/services/business-registration-license" element={<BusinessRegistrationLicense />} />


          <Route path="/services/gujarat-vat-service-tax" element={<GujaratVatAndServiceTax />} />
          <Route path="/services/direct-taxation" element={<DirectTaxation />} />
          <Route path="/services/corporate-financial" element={<CorporateFinancial />} />
          <Route path="/services/bpo" element={<BPOPage />} />
          <Route path="/services/corporate-law" element={<CorporateLaw />} />
          <Route path="/services/auditing-assurance" element={<AuditingAssurance />} />
          <Route path="/services/advisory" element={<Advisory />} />
          <Route path="/services/accounting-services" element={<Accounting />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/clients"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Clients Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/articles"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Articles Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/knowledge"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Knowledge Bank - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/knowledge/:category"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Knowledge Category - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/query"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Query Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/careers"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Careers Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Admin Portal - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/admin/:page"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Admin Page - Coming Soon</h1>
              </div>
            }
          />
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
