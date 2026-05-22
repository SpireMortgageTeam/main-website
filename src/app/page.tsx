import Link from 'next/link'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    heading: 'Get Your Mortgage Quickly',
    subheading: 'Personalized mortgage solutions without the wait.',
    body: 'There are a lot of things to worry about when buying a home, and getting a mortgage in time shouldn\'t be one of them. Our online application tool allows you to apply for your mortgage instantly and from anywhere.',
    // TODO: swap src to "/images/Spire-Step1.png" when Drive files are synced
  },
  {
    number: '02',
    heading: 'Get the Best Mortgage Rates Available',
    subheading: 'Navigate Alberta mortgage rates with ease.',
    body: 'We work with a variety of Alberta mortgage lenders, so we can connect you with the right lender. Knowing what rates each lender offers allows you to make an informed decision about your mortgage rate, type, term, and more.',
    // TODO: swap src to "/images/Spire-Step2.png" when Drive files are synced
  },
  {
    number: '03',
    heading: 'Get Personalized Advice',
    subheading: 'Make the right decisions for you.',
    body: 'As Alberta mortgage brokers, we know what it\'s like to buy a home in Calgary, Edmonton, and across Alberta. You can trust our mortgage advice and experience. Negotiate your home purchase with confidence using our personalized mortgage recommendations.',
    // TODO: swap src to "/images/Spire-Step3.png" when Drive files are synced
  },
]

const solutions = [
  {
    title: 'Realtors',
    description: 'Help your clients find the right mortgage, no matter their credit.',
    href: '/realtors',
    // TODO: image "/images/Realtor.png"
  },
  {
    title: 'Builders',
    description: 'Get innovative solutions and long-term rate holds.',
    href: '/builders',
    // TODO: image "/images/Builder.png"
  },
  {
    title: 'Investors',
    description: 'Expand your real estate portfolio with the right mortgage.',
    href: '/investors',
    // TODO: image "/images/Investor.png"
  },
  {
    title: 'Home Buyers',
    description: 'Mortgages for everyone, from first-time buyers to second mortgages.',
    href: '/first-time-buyers',
    // TODO: image "/images/Couple-Canada-Spire.png"
  },
  {
    title: 'Consolidating Debt',
    description: 'See if you qualify for a new mortgage at a lower interest rate.',
    href: '/second-mortgages',
    // TODO: image "/images/Debt.png"
  },
  {
    title: 'Renovators',
    description: 'Get funds to start or complete your renovation projects.',
    href: '/home-renovation',
    // TODO: image "/images/Renovate.png"
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-spire-teal overflow-hidden">
        {/* Decorative mark */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-5 pointer-events-none select-none flex items-center justify-end pr-8">
          <Image
            src="/brand/logo-mark-white.png"
            alt=""
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-4">
              Alberta Mortgage Brokers
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Mortgage Solutions <span className="text-spire-green">InSPIREd</span> by You
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Find the right mortgage lender and rate in Alberta. With access to 120+ lenders, we match you with the mortgage that fits your life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center rounded-full bg-spire-green px-8 py-3.5 text-base font-semibold text-white hover:bg-spire-green/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Talk to a Broker
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-step process ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-spire-teal">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="text-5xl font-bold text-spire-green/20 leading-none">{step.number}</span>
                <h3 className="text-xl font-bold text-spire-teal">{step.heading}</h3>
                <p className="text-base font-medium text-gray-700">{step.subheading}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPIRE Advantage ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-4">
            The SPIRE Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-spire-teal mb-6">
            Your Trusted Mortgage Partner
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            With a business rooted in honesty and integrity, it&apos;s our goal to be the mortgage and lending partner you trust with your family, friends, and community. With access to over 120 Alberta mortgage lenders, we offer mortgages that fit your needs and your budget.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <p className="text-5xl font-bold text-spire-teal">120+</p>
              <p className="text-sm text-gray-500 mt-1">Lender relationships</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-spire-teal">1,750+</p>
              <p className="text-sm text-gray-500 mt-1">Mortgages funded</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-spire-teal">4</p>
              <p className="text-sm text-gray-500 mt-1">Provinces licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions grid ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-4">
              Mortgages for Every Situation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-spire-teal">
              We Have a Mortgage for You
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl bg-spire-teal p-8 text-white transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Decorative circle */}
                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors" />
                <h3 className="text-xl font-bold mb-3 relative">{card.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed relative">{card.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-spire-green group-hover:gap-2 transition-all relative">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-spire-green py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Find Your Mortgage?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Calgary-based mortgage professionals simplifying and de-stressing the mortgage process for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-spire-green hover:bg-white/90 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/calculators"
              className="inline-flex items-center rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Try the Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
