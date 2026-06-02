'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    group: 'Principal',
    links: [
      { href: '/', label: 'Inicio', icon: '⬡' },
    ],
  },
  {
    group: 'Documentación',
    links: [
      { href: '/docs/prompts',      label: 'Prompts',       icon: '◈' },
      { href: '/docs/architecture', label: 'Arquitectura',  icon: '◇' },
      { href: '/docs/strategy',     label: 'Estrategia',    icon: '◉' },
      { href: '/docs/roadmap',      label: 'Roadmap',       icon: '◎' },
      { href: '/docs/products',     label: 'Productos',     icon: '◆' },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-[260px] flex flex-col z-40"
      style={{ background: '#060D1A', borderRight: '1px solid rgba(201,168,76,0.12)' }}
    >
      {/* Brand */}
      <div className="px-6 py-6">
        <Link href="/" className="flex flex-col gap-1 group">
          <span
            className="font-mono font-semibold tracking-[0.18em] text-xl transition-colors"
            style={{ color: '#E8EDF5' }}
          >
            CORE
          </span>
          <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: 'rgba(201,168,76,0.6)' }}>
            Biblioteca Interna
          </span>
        </Link>
      </div>

      {/* Gold rule */}
      <div className="gold-rule mx-6 mb-5" />

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 space-y-5">
        {navItems.map((section) => (
          <div key={section.group}>
            <p
              className="px-3 mb-1.5 text-[10px] font-medium tracking-[0.14em] uppercase"
              style={{ color: 'rgba(232,237,245,0.3)' }}
            >
              {section.group}
            </p>
            <ul className="space-y-0.5">
              {section.links.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                        isActive
                          ? 'text-white'
                          : 'hover:text-white'
                      }`}
                      style={{
                        background: isActive ? 'rgba(201,168,76,0.1)' : 'transparent',
                        color: isActive ? '#E8EDF5' : 'rgba(232,237,245,0.5)',
                        borderLeft: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                      }}
                    >
                      <span className="text-[13px]" style={{ color: isActive ? '#C9A84C' : 'rgba(201,168,76,0.4)' }}>
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
        <p className="text-[10px]" style={{ color: 'rgba(232,237,245,0.25)' }}>
          v1.0 · Mayo 2026
        </p>
        <p className="text-[10px]" style={{ color: 'rgba(232,237,245,0.2)' }}>
          Confidencial — Uso interno
        </p>
      </div>
    </aside>
  )
}
