import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
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

        <h1 className="text-3xl font-bold mb-2 text-white">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-0">
          <p className="text-zinc-400 leading-relaxed mb-6">
            NoClick Automation ("we," "us," or "our") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you visit our website or engage our
            services.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Information We Collect
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            We collect personal information that you voluntarily provide when
            booking a consultation through our scheduling platform (Cal.com),
            including your name, email address, company name, and any details you
            share about your automation needs. We also collect standard website
            analytics data such as page views, browser type, referring URLs, and
            approximate geographic location through privacy-focused analytics
            tools.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            How We Use Your Information
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            We use the information we collect to provide and improve our AI
            automation services, respond to your inquiries, schedule and conduct
            consultations, send project updates and relevant communications, and
            analyze website usage to enhance your experience. We do not sell,
            rent, or trade your personal information to third parties for
            marketing purposes.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Third-Party Services
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Our website integrates with third-party services to deliver a
            seamless experience. Cal.com is used for appointment scheduling and
            processes your booking information under its own privacy policy. We
            use privacy-focused analytics to understand website traffic patterns.
            These services may collect limited data as described in their
            respective privacy policies, and we encourage you to review them.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Data Retention &amp; Deletion
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this policy or as required by law.
            Project-related data is retained for the duration of our engagement
            and a reasonable period thereafter for reference. You may request
            deletion of your personal data at any time by contacting us, and we
            will process your request within 30 days.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Data Security
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            We implement reasonable technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the Internet is completely secure, and we cannot
            guarantee absolute security.
          </p>

          <h2 className="text-lg font-semibold text-white mb-3 mt-8">
            Contact Us
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy or wish to
            exercise your data rights, please contact us at{' '}
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
