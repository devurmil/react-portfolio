import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="fixed top-1 w-full">
                <nav
                    className="grid grid-cols-3 items-center rounded-2xl max-w-6xl mx-auto px-6 py-2 bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-sm text-white"
                >
                    <div className="justify-self-start font-semibold whitespace-nowrap">
                        Urmil
                    </div>

                    <ul className='flex justify-self-center gap-6 flex-wrap'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <div className="justify-self-end">
                        <button className='border-purple-300 border-2 px-4 py-2 rounded-3xl whitespace-nowrap'>View Resume</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header