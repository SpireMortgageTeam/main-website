import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story | Spire Mortgage Team',
  description: 'Learn why Spire Mortgage Team was built on honesty, integrity, and a genuine belief in real estate as a wealth-building tool.',
}

const differentiators = [
  {
    stat: '26',
    label: 'Mortgages held personally',
    detail: 'Our team collectively holds 26 mortgages — we invest in real estate ourselves and bring that lived experience to every client.',
  },
  {
    stat: '120+',
    label: 'Lender relationships',
    detail: 'From big banks to credit unions, monoline, and alternative lenders — we find the right fit for your situation, not just the easiest one.',
  },
  {
    stat: '15+',
    label: 'Years in Alberta real estate',
    detail: 'We know Calgary, Edmonton, and the Alberta market from the inside. That context shapes every recommendation we make.',
  },
  {
    stat: '4',
    label: 'Provinces licensed',
    detail: 'Licensed in AB, BC, SK, and ON — we can help wherever your real estate goals take you.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-spire-teal py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-4">
            spire <span className="text-white/50 font-normal normal-case tracking-normal">(noun)</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The highest point or summit of something
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            That&apos;s what we&apos;re here to help you reach — in real estate, in wealth, and in confidence about your financial future.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-4">Why Spire?</p>
              <h2 className="text-3xl font-bold text-spire-teal mb-6">Our Brand Story</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Franklin D. Roosevelt once said: <em>&ldquo;Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.&rdquo;</em>
                </p>
                <p>
                  After 15 years of investing through every kind of Alberta market, we genuinely believe that.
                </p>
                <p>
                  Think of a mountain spire — granite rock that stands firm as the sedimentary rock around it erodes away. We named ourselves Spire because that&apos;s what we want for our clients: a financial foundation strong enough to outlast economic cycles, rate changes, and life&apos;s curveballs.
                </p>
                <p>
                  Every mortgage we arrange is built with that principle in mind — not just getting you the deal, but getting you the <em>right</em> deal for where you want to go.
                </p>
              </div>
            </div>

            {/* Pull quote */}
            <div className="bg-gray-50 rounded-2xl p-10 border-l-4 border-spire-green">
              <blockquote className="text-xl text-spire-teal font-medium leading-relaxed italic">
                &ldquo;Creative mortgage solutions inSPIREd by your own story.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm text-gray-500">Spire Mortgage Team — Calgary, AB</p>
            </div>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-4">What Sets Us Apart</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-spire-teal">We&apos;re Not a Call Centre</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              We&apos;re available on personal cell phones — evenings, weekends, holidays. No appointment needed. No hold music.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <div key={item.stat} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-5xl font-bold text-spire-green mb-2">{item.stat}</p>
                <p className="text-base font-semibold text-spire-teal mb-3">{item.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-spire-teal mb-3">Proactive, not reactive</h3>
            <p className="text-gray-600 leading-relaxed">
              We don&apos;t do &ldquo;set it and forget it.&rdquo; We monitor your mortgage and reach out when a better option opens up — before you have to ask. Every client is a real person with a real situation, and we treat them that way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-spire-teal py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Meet the People Behind Spire</h2>
          <p className="text-white/75 text-lg mb-8">
            Ten experienced professionals committed to making your mortgage simple.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/team"
              className="inline-flex items-center rounded-full bg-spire-green px-8 py-3.5 text-base font-semibold text-white hover:bg-spire-green/90 transition-colors"
            >
              Meet the Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
