import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Meet the Team | Spire Mortgage Team',
  description: 'Meet the Calgary mortgage professionals behind Spire Mortgage Team — 10 experienced brokers and specialists ready to find your perfect mortgage.',
}

const team = [
  {
    name: 'Renée Huse',
    title: 'Founder & Mortgage Broker',
    bio: 'With 10+ years in global trading and 15+ years in Alberta real estate, Renée has funded over 1,750 mortgages and personally holds 26 rental properties across Western Canada. She specializes in first-time buyers, investors, refinancing, and life-change scenarios.',
    photo: null, // TODO: add "/team/renee.png" when photo is available
    initials: 'RH',
    featured: true,
  },
  {
    name: 'Sherri Bureyko',
    title: 'Operations Manager & Underwriter',
    bio: '20+ years of experience in administrative management. Sherri keeps the team running smoothly and ensures every file is handled with care.',
    photo: null, // TODO: add photo path
    initials: 'SB',
  },
  {
    name: 'Prashant Chudasama',
    title: 'Underwriting Manager',
    bio: 'Passionate about assisting clients and looking out for their best interests. Prashant brings a client-first approach to every file he touches.',
    photo: null,
    initials: 'PC',
  },
  {
    name: 'Danielle Della Siega',
    title: 'Underwriter',
    bio: 'With over 20 years of experience across public, private, and non-profit sectors, Danielle brings creative solutions and fresh insight to complex mortgage situations.',
    photo: null,
    initials: 'DD',
  },
  {
    name: 'Lindsay Maides',
    title: 'Fulfillment Specialist',
    bio: 'Over a decade of admin experience and three years in the mortgage industry. Lindsay keeps files moving and clients informed throughout the process.',
    photo: null,
    initials: 'LM',
  },
  {
    name: 'Jacalyn Cook',
    title: 'Fulfillment Specialist',
    bio: '16 years in the industry. Jacalyn is known for her reliability, attention to detail, and calm under pressure.',
    photo: null,
    initials: 'JC',
  },
  {
    name: 'Kristin Stringer',
    title: 'Executive Assistant',
    bio: 'Over 20 years of experience in admin and customer support. Kristin is often the first voice you hear and ensures every interaction with Spire is a great one.',
    photo: null,
    initials: 'KS',
  },
  {
    name: 'Riley Watson',
    title: 'Marketing Manager',
    bio: '5+ years of marketing and communications experience. Riley shapes how Spire tells its story and connects with clients across every channel.',
    photo: null,
    initials: 'RW',
  },
  {
    name: 'Paul de Andrade',
    title: 'Mortgage Professional',
    bio: 'Paul brings a holistic and down-to-earth approach to every client conversation — focused on the full financial picture, not just the rate.',
    photo: null,
    initials: 'PA',
  },
  {
    name: 'Adam King',
    title: 'Mortgage Professional',
    bio: 'After nearly 20 years in Alberta\'s oil & gas sector, Adam understands how income variability, contract work, and industry cycles affect mortgage qualification.',
    photo: null,
    initials: 'AK',
  },
]

function Avatar({ member }: { member: typeof team[0] }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt={member.name}
        width={120}
        height={120}
        className="h-28 w-28 rounded-full object-cover object-top"
      />
    )
  }
  return (
    <div className="h-28 w-28 rounded-full bg-spire-teal/10 flex items-center justify-center">
      <span className="text-2xl font-bold text-spire-teal">{member.initials}</span>
    </div>
  )
}

export default function TeamPage() {
  const [renee, ...rest] = team

  return (
    <>
      {/* Hero */}
      <section className="bg-spire-teal py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-4">Our People</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Meet the Team</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Ten experienced mortgage professionals — available on cell, evenings and weekends — ready to simplify your mortgage.
          </p>
        </div>
      </section>

      {/* Renée — featured */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex justify-center">
              <div className="h-64 w-64 rounded-2xl bg-spire-teal/10 flex items-center justify-center overflow-hidden">
                {renee.photo ? (
                  <Image src={renee.photo} alt={renee.name} width={256} height={256} className="object-cover object-top h-full w-full" />
                ) : (
                  <span className="text-6xl font-bold text-spire-teal">{renee.initials}</span>
                )}
              </div>
            </div>
            <div>
              <p className="text-spire-green font-semibold text-sm uppercase tracking-widest mb-2">Founder</p>
              <h2 className="text-3xl font-bold text-spire-teal mb-1">{renee.name}</h2>
              <p className="text-base text-gray-500 mb-5">{renee.title}</p>
              <p className="text-gray-600 leading-relaxed">{renee.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of team grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-start gap-4">
                <Avatar member={member} />
                <div>
                  <h3 className="text-lg font-bold text-spire-teal">{member.name}</h3>
                  <p className="text-sm text-spire-green font-medium mb-3">{member.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-spire-green py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join the Team?</h2>
          <p className="text-white/85 text-lg mb-8">
            We&apos;re always looking for great mortgage professionals who share our values.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-spire-green hover:bg-white/90 transition-colors"
          >
            See Open Roles
          </Link>
        </div>
      </section>
    </>
  )
}
