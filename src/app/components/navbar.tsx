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

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LINKS */}
      <div className='hidden md:flex gap-4 w-1/3 z-30'>
        {links.map(link => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className='md:hidden lg:flex xl:w-1/3 justify-center'>
        <Link href='/' className=' ring-1 ring-white text-sm bg-black rounded-md p-1 font-semibold flex items-center xl:justify-center'>
          <span className='text-white mr-1'>Darsh</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>
      {/* SOCIALS */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        <Link href="https://github.com/369darshan">
          <Image src='/GitHub-white.png'className='rounded-sm' alt='github' width={24} height={24} />
        </Link>
        <Link href="https://github.com/369darshan">
          <Image src='/linkedin.png' alt='github' width={24} height={24} />
        </Link>
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
              <Link href={link.url} >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>}
    </div>
  )
}

export default Navbar
