import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-zinc-500 hover:text-emerald-400 transition-colors text-sm mb-12"
        >
          &larr; Back
        </Link>

        <h1 className="text-3xl font-bold mb-2 text-white">
          Terms of Service
        </h1>
        <p className="text-zinc-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-0">
          <p className="text-zinc-400 leading-relaxed mb-6">
            These Terms of Service ("Terms") govern your use of the services
            provided by NoClick Automation ("we," "us," or "our"). By engaging
            our services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Scope of Services
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            NoClick Automation provides AI-powered workflow automation, system
            integration, and process optimization services. The specific scope,
            deliverables, and timeline for each engagement will be defined in a
            separate statement of work or project proposal agreed upon by both
            parties before work begins.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Client Responsibilities
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            You agree to provide timely access to any systems, accounts, data,
            and information necessary for us to perform the agreed-upon services.
            You are responsible for ensuring that you have the authority to grant
            such access and that your use of our services complies with all
            applicable laws and regulations. Delays caused by failure to provide
            required access or information may affect project timelines.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Payment Terms
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Payment terms will be outlined in the project proposal or statement
            of work. Unless otherwise agreed, invoices are due within 30 days of
            issuance (net 30). Late payments may be subject to a fee of 1.5% per
            month on the outstanding balance. We reserve the right to pause work
            on any project with overdue invoices until payment is received.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Intellectual Property
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Upon full payment, the client owns all custom deliverables created
            specifically for their project, including automation workflows,
            custom integrations, and documentation. We retain ownership of any
            pre-existing tools, frameworks, templates, or methodologies used in
            the delivery of services. We may use general knowledge and techniques
            gained during the engagement for future projects.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Limitation of Liability
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            To the maximum extent permitted by law, NoClick Automation shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages arising from or related to our services. Our total
            liability for any claim shall not exceed the amount paid by you for
            the specific services giving rise to the claim. We are not liable for
            disruptions caused by third-party services, APIs, or platforms
            outside our control.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Termination
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Either party may terminate an engagement with 14 days written notice.
            Upon termination, the client is responsible for payment of all work
            completed up to the termination date. We will provide all completed
            deliverables and reasonable transition assistance. Any retainer fees
            for unused portions of prepaid services will be refunded on a
            prorated basis.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Governing Law
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            These Terms shall be governed by and construed in accordance with the
            laws of the jurisdiction in which NoClick Automation operates,
            without regard to conflict of law principles. Any disputes arising
            from these Terms shall be resolved through good-faith negotiation,
            and if necessary, binding arbitration.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Contact Us
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            If you have any questions about these Terms, please contact us at{' '}
            <a
              href="mailto:hello@noclickautomation.com"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              hello@noclickautomation.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
