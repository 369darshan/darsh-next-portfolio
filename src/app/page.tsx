"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Meteors } from "./components/ui/meteorss";
import { Suspense } from 'react';

// Lazy load the ComputersCanvas component
const ComputersCanvas = dynamic(
  () => import('./components/canvas').then((mod) => mod.ComputersCanvas),
  { 
    ssr: false, 
    loading: () => (
      <div className="h-full w-full flex items-center justify-center" role="status">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        <span className="sr-only">Loading 3D model</span>
      </div>
    )
  }
);

const Home = () => {
  return (
    <motion.main
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
      role="main"
      aria-label="Home page"
    >
      <div className="flex-col h-full flex lg:flex-col px-4">
        <Meteors number={50} />
        {/* IMAGE CONTAINER */}
        <div className="mt-[-100px] flex sm:h-1/2 lg:h-4/5 lg:w-full md:w-full sm:w-full relative">
          <Suspense fallback={
            <div className="h-full w-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          }>
            <ComputersCanvas />
          </Suspense>
        </div>
        {/* TEXT CONTAINER */}
        <motion.div 
          className="bg-transparent sm:h-1/2 lg:h-1/5 lg:w-full flex flex-col gap-4 items-center justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* TITLE */}
          <motion.h1 
            className="bg-transparent lg:h-30 pt-12 pb-2 text-center text-6xl md:text-4xl sm:text-2xl max-sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Architecting Tomorrow&apos;s Experiences,<br /> Empowering Connections.
          </motion.h1>

          {/* DESC */}
          <motion.p 
            className="lg:h-1 text-center md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Welcome to my digital realm, where creativity meets innovation. Explore my portfolio, where code and design converge to craft exceptional experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div 
            className="flex gap-4 pt-6 md:mt-8 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href='/portfolio' prefetch={true} aria-label="View my work">
              <motion.button 
                className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-medium transform hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-600/50 before:via-purple-600/50 before:to-blue-600/50 before:blur-xl before:opacity-0 before:hover:opacity-100 before:transition-opacity before:-z-10 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
                whileHover={{ y: -2, rotateX: 5 }}
                initial={{ perspective: 1000 }}
                aria-label="View portfolio"
              >
                View My Work
              </motion.button>
            </Link>
            <Link href='/contact' prefetch={true} aria-label="Contact me">
              <motion.button 
                className="relative px-6 py-3 rounded-xl bg-transparent border border-purple-500/30 text-white font-medium backdrop-blur-lg transform hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-purple-500/10 before:blur-xl before:opacity-0 before:hover:opacity-100 before:transition-opacity before:-z-10 shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:border-purple-500/50 hover:bg-purple-500/20"
                whileHover={{ y: -2, rotateX: 5 }}
                initial={{ perspective: 1000 }}
                aria-label="Contact page"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default Home;