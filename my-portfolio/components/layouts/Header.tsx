import React from 'react'
import { motion } from "framer-motion";
import { navItems } from '../interfaces';
import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-600 border-b border-white/10">
        <motion.nav
            initial={{y: -80, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ duration:0.6 }}
            className=''
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 ">
                <Link href="#"><h1 className="text-white font-bold text-xl ">USMAN</h1></Link>
                <Link href="#">
                    <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 ">
                        {navItems.map(item =>(
                        <li key={item} className="hover:text-white transition">
                            {item}
                        </li>
                        ))}
                    </ul>
                </Link>
                    
                <button className="bg-blue-500 py-2 px-5 rounded-full text-white hover:scale-105 transition">Let's Talk</button>
            </div>
        </motion.nav>
    </header>
  )
}

export default Header;
