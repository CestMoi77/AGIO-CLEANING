import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Diensten', path: '/diensten' },
  { label: 'Particulier', path: '/particulier' },
  { label: 'Zakelijk', path: '/zakelijk' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'}`}>
      {/* Topbar */}
      <div className="bg-primary-700 text-white text-sm py-2 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <span>Professionele reiniging voor particulieren en bedrijven</span>
          {/* TELEFOONNUMMER: Vervang het nummer hieronder */}
          <a href="tel:+31VERVANGTELEFOON" className="flex items-center gap-1 hover:text-primary-200 transition-colors">
            <Phone size={14} />
            <span>+31 (0)6 – VERVANG NUMMER</span>
          </a>
        </div>
      </div>

      {/* Hoofdnavigatie */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO: Vervang dit blok met je eigen logo-afbeelding */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">A</div>
            <div className="leading-tight">
              <div className="font-bold text-gray-900 text-lg">Agion</div>
              <div className="text-primary-600 font-semibold text-xs tracking-widest uppercase -mt-0.5">Cleaning</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              Offerte aanvragen
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Menu openen"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary text-sm mt-2 justify-center">
              Offerte aanvragen
            </Link>
            {/* TELEFOONNUMMER: Vervang het nummer hieronder */}
            <a href="tel:+31VERVANGTELEFOON" className="flex items-center justify-center gap-2 py-3 text-sm text-gray-600">
              <Phone size={14} />
              +31 (0)6 – VERVANG NUMMER
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
