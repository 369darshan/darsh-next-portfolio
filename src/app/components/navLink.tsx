"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion';
import React from 'react'

interface NavLinkProps {
  link: {
    url: string;
    title: string;
  }
}

const NavLink = ({ link }: NavLinkProps) => {
    const pathName = usePathname();
    const isActive = pathName === link.url;
    
    return (
        <Link href={link.url}>
            <motion.span 
                className={`rounded-lg px-4 py-2 relative ${
                    isActive 
                        ? "bg-white/10 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                        : "text-white hover:text-blue-200"
                } transition-colors duration-300`}
                whileHover={{ y: -2 }}
                style={{ display: 'inline-block' }}
            >
                {link.title}
                {isActive && (
                    <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                        layoutId="underline"
                        transition={{ type: "spring", bounce: 0.3 }}
                    />
                )}
            </motion.span>
        </Link>
    )
}

export default NavLink
