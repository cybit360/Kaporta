import type { Metadata } from 'next';
import { CreditCard, FileText, Phone, Mail, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Payment',
  description: 'Payment information for Kaporta Group services and invoices.',
};

export default function PaymentPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Payment</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Secure payment options for our services and invoices.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-soft-white p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-6 w-6 text-deep-blue" />
                <h2 className="font-heading text-2xl font-bold text-deep-blue">Bank Transfer / ACH</h2>
              </div>
              <p className="text-concrete-gray mb-4">Make payments directly to our bank account. Please include your invoice number as reference.</p>
              <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 text-sm">
                <p><span className="font-medium text-charcoal">Bank Name:</span> <span className="text-concrete-gray">Sierra Leone Commercial Bank</span></p>
                <p><span className="font-medium text-charcoal">Account Name:</span> <span className="text-concrete-gray">Kaporta Investment Sierra Leone Limited</span></p>
                <p><span className="font-medium text-charcoal">Account Number:</span> <span className="text-concrete-gray">Contact us for details</span></p>
                <p><span className="font-medium text-charcoal">Branch:</span> <span className="text-concrete-gray">Freetown Main Branch</span></p>
              </div>
            </div>

            <div className="bg-soft-white p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-deep-blue" />
                <h2 className="font-heading text-2xl font-bold text-deep-blue">Invoice Payment</h2>
              </div>
              <p className="text-concrete-gray mb-4">To pay an existing invoice, please reference your invoice number when making payment. For invoice inquiries, contact our billing department.</p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-concrete-gray">Online payment portal coming soon. In the meantime, please use bank transfer or contact us directly.</p>
              </div>
            </div>

            <div className="bg-soft-white p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-forest-green" />
                <h2 className="font-heading text-2xl font-bold text-deep-blue">Payment Terms</h2>
              </div>
              <ul className="space-y-2 text-sm text-concrete-gray">
                <li>&#8226; Payment terms are Net 30 unless otherwise agreed in contract</li>
                <li>&#8226; Deposits may be required for large projects (typically 30-50%)</li>
                <li>&#8226; All payments are in Sierra Leonean Leones (SLE) or USD</li>
                <li>&#8226; Late payment fees may apply as per contract terms</li>
              </ul>
            </div>
          </div>

          {/* Billing Contact */}
          <div className="mt-12 p-8 bg-deep-blue rounded-2xl text-center">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">Billing Inquiries</h3>
            <p className="text-gray-300 mb-6">For questions about invoices, payments, or account status:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a href="mailto:kaportaq1@gmail.com" className="flex items-center gap-2 text-construction-yellow hover:text-construction-yellow-light transition-colors">
                <Mail className="h-4 w-4" /> kaportaq1@gmail.com
              </a>
              <a href="tel:+23278341012" className="flex items-center gap-2 text-construction-yellow hover:text-construction-yellow-light transition-colors">
                <Phone className="h-4 w-4" /> +232 78341012
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
