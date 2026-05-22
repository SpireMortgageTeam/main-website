'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type NavLink = { label: string; href: string }
type DropdownGroup = { type: 'dropdown'; label: string; items: NavLink[] }
type LinkItem = { type: 'link'; label: string; href: string }
type NavItem = DropdownGroup | LinkItem

const nav: NavItem[] = [
  {
    type: 'dropdown',
    label: 'Mortgage Solutions',
    items: [
      { label: 'First-Time Home Buyers', href: '/first-time-buyers' },
      { label: 'Real Estate Investors', href: '/investors' },
      { label: 'Mortgage Renewals', href: '/renewals' },
      { label: 'New Build Mortgages', href: '/new-build' },
      { label: 'New Immigrants', href: '/new-immigrants' },
      { label: 'Divorce', href: '/divorce' },
      { label: 'Second Mortgages', href: '/second-mortgages' },
      { label: 'Bad Credit Mortgages', href: '/bad-credit' },
      { label: 'Reverse Mortgages', href: '/reverse-mortgages' },
      { label: 'Home Renovation', href: '/home-renovation' },
      { label: 'No Down Payment', href: '/no-down-payment' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Partnerships',
    items: [
      { label: 'REALTOR® Partnerships', href: '/realtors' },
      { label: 'Builder Partnerships', href: '/builders' },
    ],
  },
  { type: 'link', label: 'Calculators', href: '/calculators' },
  {
    type: 'dropdown',
    label: 'Rates',
    items: [
      { label: 'Calgary Mortgage Rates', href: '/rates/calgary' },
      { label: 'Edmonton Mortgage Rates', href: '/rates/edmonton' },
      { label: 'New Build Rates', href: '/rates/new-build' },
      { label: 'Acreage Mortgage Rates', href: '/rates/acreage' },
    ],
  },
  { type: 'link', label: 'Blog', href: '/blog' },
  {
    type: 'dropdown',
    label: 'About',
    items: [
      { label: 'Meet The Team', href: '/team' },
      { label: 'Our Story', href: '/about' },
      { label: 'Join The Team', href: '/join' },
    ],
  },
  { type: 'link', label: 'Connect', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  function toggleSection(label: string) {
    setOpenSection(prev => (prev === label ? null : label))
  }

  return (
    <header className="bg-spire-teal sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/brand/logo-white.png"
              alt="Spire Mortgage Team"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(item =>
              item.type === 'link' ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
                    {item.label}
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute top-full left-0 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50">
                    <div className="py-1">
                      {item.items.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-spire-teal transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          {/* Apply Now CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/apply"
              className="hidden sm:inline-flex items-center rounded-full bg-spire-green px-5 py-2 text-sm font-semibold text-white hover:bg-spire-green/90 transition-colors"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-spire-teal">
          <div className="px-4 pb-4 pt-2 space-y-1">
            {nav.map(item =>
              item.type === 'link' ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-white/90 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <button
                    onClick={() => toggleSection(item.label)}
                    className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-white/90 hover:text-white"
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${openSection === item.label ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSection === item.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.items.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-3 py-1.5 text-sm text-white/75 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <Link
              href="/apply"
              className="mt-3 block rounded-full bg-spire-green px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
