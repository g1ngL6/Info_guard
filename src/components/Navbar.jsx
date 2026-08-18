import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Bell, User, ShieldCheck } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg text-ign-navy">
              <ShieldCheck className="text-ign-navy" />
              INFOGUARD
            </Link>
            <div className="hidden md:flex items-center gap-4 ml-6">
              <Link to="/" className="text-slate-600 hover:text-slate-900">Home</Link>
              <Link to="/fact-check" className="text-slate-600 hover:text-slate-900">Fact Check</Link>
              <Link to="/learn" className="text-slate-600 hover:text-slate-900">Learn</Link>
              <Link to="/community" className="text-slate-600 hover:text-slate-900">Community</Link>
              <Link to="/about" className="text-slate-600 hover:text-slate-900">About</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center p-2 rounded-md hover:bg-slate-100"><Bell/></button>
            <div className="hidden md:flex items-center gap-2">
              <img src="https://i.pravatar.cc/40" alt="avatar" className="w-8 h-8 rounded-full" />
            </div>
            <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)}><Menu/></button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block">Home</Link>
            <Link to="/fact-check" className="block">Fact Check</Link>
            <Link to="/learn" className="block">Learn</Link>
            <Link to="/community" className="block">Community</Link>
            <Link to="/about" className="block">About</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
