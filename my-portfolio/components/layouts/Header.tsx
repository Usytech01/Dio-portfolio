import React from 'react'
import { motion } from "framer-motion";
import { navItems } from '../interfaces';
import Link from 'next/link';


const Header: React.FC = () => {
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
                <nav className="space-x-6 font-semibold">
                    <Link href="/" className="hover:text-gray-400 duration-300">Home</Link>
                    <Link href="/gallery" className="hover:text-gray-400 duration-300">Gallery</Link>
                    <Link href="/about" className="hover:text-gray-400 duration-300">About</Link>
                    <Link href="/contact" className="hover:text-gray-400 duration-300">Contact</Link>
                </nav>
            <button className="bg-blue-500 py-2 px-5 rounded-full text-white hover:scale-105 transition">Let's Talk</button>
            </div>
        </motion.nav>
    </header>
  )
}

export default Header;
