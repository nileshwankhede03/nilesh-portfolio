import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Stack', '#stack'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={close} aria-label="Nilesh Wankhede home">
          <span className="brand-mark">NW</span>
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </div>
        <a className="nav-resume" href="/Nilesh-Wankhede-Resume.pdf" target="_blank" rel="noreferrer">
          Resume <ArrowUpRight size={15} />
        </a>
        <button className="mobile-menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        {open && (
          <div className="mobile-menu">
            {links.map(([label, href]) => <a href={href} key={label} onClick={close}>{label}</a>)}
            <a href="/Nilesh-Wankhede-Resume.pdf" target="_blank" rel="noreferrer" onClick={close}>Download resume <ArrowUpRight size={15} /></a>
          </div>
        )}
      </nav>
    </header>
  )
}
