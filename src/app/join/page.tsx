import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Join the Team | Spire Mortgage Team',
  description: 'Join Spire Mortgage Team — a dynamic, growth-minded group of mortgage professionals in Calgary.',
}

export default function JoinPage() {
  return (
    <>
      <section className="bg-spire-teal py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-4">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Join the Team</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            We&apos;re a growth-minded team of mortgage professionals who believe in doing things right. If that sounds like you, we&apos;d love to connect.
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We&apos;re always open to conversations with talented mortgage professionals who share our values of honesty, integrity, and genuine care for clients.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-spire-green px-8 py-3.5 text-base font-semibold text-white hover:bg-spire-green/90 transition-colors"
          >
            Reach Out
          </Link>
        </div>
      </section>
    </>
  )
}
