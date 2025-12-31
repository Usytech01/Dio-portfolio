import React, { useState } from 'react'
import { motion } from "framer-motion";
import { navItems } from '../interfaces';
import Link from 'next/link';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState (false)
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-800 border-b border-white/10">
        <motion.nav
            initial={{y: -80, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ duration:0.6 }}
            className=''
        >
            <div className=" mx-auto flex items-center justify-between py-6 px-6 ">
                <Link href="#"><h1 className="text-white font-bold text-xl ">USM<span className="text-gray-400 hover:text-white">A</span>N</h1></Link>
                <nav className="hidden sm:block space-x-6 font-semibold">
                    <Link href="/" className="hover:text-gray-400 duration-300">Home</Link>
                    <Link href="/project" className="hover:text-gray-400 duration-300">Project</Link>
                    <Link href="/about" className="hover:text-gray-400 duration-300">About</Link>
                    <Link href="/contact" className="hover:text-gray-400 duration-300">Contact</Link>
                </nav>

                {/* Hamburger Button (Mobile) */}
                <button 
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="space-y-1.5 md:hidden">
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </div>        
                </button>
            <button className="bg-blue-500 py-2 px-5 rounded-full text-white hover:scale-105 transition">Let's Talk</button>
            </div>
        </motion.nav>
    </header>
  )
}

export default Header;
