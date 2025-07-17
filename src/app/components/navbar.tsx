"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './navLink'

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  };
  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }

  const navItemVariants = {
    initial: { scale: 1, z: 0 },
    hover: { 
      scale: 1.1, 
      z: 20,
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className='relative h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LINKS */}
      <div className='hidden md:flex gap-4 w-1/3 z-30'>
        {links.map(link => (
          <motion.div
            key={link.title}
            variants={navItemVariants}
            initial="initial"
            whileHover="hover"
            style={{ 
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
            onHoverStart={() => setHoveredLink(link.title)}
            onHoverEnd={() => setHoveredLink("")}
            className="relative"
          >
            <div className={`absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg -z-10 transform ${hoveredLink === link.title ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`} />
            <NavLink link={link} />
          </motion.div>
        ))}
      </div>
      {/* LOGO */}
      <motion.div 
        className='md:hidden lg:flex xl:w-1/3 justify-center'
        whileHover={{ scale: 1.05, rotateY: 10 }}
        style={{ perspective: "1000px" }}
      >
        <Link href='/' className='relative ring-1 ring-white/50 text-sm bg-black/80 backdrop-blur-sm rounded-md p-1 font-semibold flex items-center xl:justify-center transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'>
          <span className='text-white mr-1 relative z-10'>Darsh</span>
          <span className='w-12 h-8 rounded bg-white/90 text-black flex items-center justify-center relative z-10'>.dev</span>
          <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-md -z-0' />
        </Link>
      </motion.div>
      {/* SOCIALS */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end relative z-50'>
        <motion.div
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          className="transition-transform cursor-pointer relative z-50"
        >
          <Link href="https://github.com/369darshan" target="_blank" rel="noopener noreferrer">
            <Image src='/GitHub-white.png' className='rounded-sm hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]' alt='github' width={24} height={24} />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotateZ: -5 }}
          className="transition-transform cursor-pointer relative z-50"
        >
          <Link href="https://linkedin.com/in/369darshan" target="_blank" rel="noopener noreferrer">
            <Image src='/linkedin.png' alt='linkedin' width={24} height={24} className='hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]' />
          </Link>
        </motion.div>
      </div>
      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        {/* MENU BUTTON */}
        <button className='w-10 h-8 flex flex-col  justify-between z-50 relative' onClick={() => setOpen(!open)}>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVariants}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
      </div>
      {/* Menu List */}
      {open &&
        <motion.div
          variants={listVariants}
          initial="closed"
          animate='opened'
          className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40' >
          {links.map((link) => (
            <motion.div
              variants={listItemVariants}
              key={link.title}>
              <Link href={link.url} className="block w-full py-4 text-center hover:text-gray-300 transition-colors border-b border-gray-700">
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>}
    </div>
  )
}

export default Navbar
