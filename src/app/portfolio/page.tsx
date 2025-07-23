"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { useRef, Suspense } from 'react';

const items = [
  {
    id: 1,
    color: "from-pink-300 to-blue-300",
    title: "Visutation",
    desc: "Visutation is a Sorting Visualizer. It shows visually working of different Sorting Algorithms.",
    img: "/projects/Visutation/darsh-visutation.png",
    link: "https://darsh-visutation.vercel.app/",
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "NextJs eCommerce",
    desc: "A modern eCommerce platform built with Next.js, featuring a responsive design, dynamic product catalog, and secure payment integration with Stripe.",
    img: "/projects/client-ecommerce/client-home.png",
    link: "",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Admin Dashboard",
    desc: "A comprehensive admin dashboard with advanced analytics, user management, and real-time data visualization built using Next.js and TailwindCSS.",
    img: "/projects/Admin-ecommerce/admin-Product-Edit.png",
    link: "",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Agency Project Tracker",
    desc: "A comprehensive project management system for agencies, featuring user roles, project tracking, and detailed analytics.",
    img: "/projects/Agency-project-tracker/home.png",
    link: "",
  },
  {
    id: 5,
    color: "from-purple-300 to-pink-300",
    title: "Agency Project Tracker-Dashboard",
    desc: "A dynamic dashboard interface for the Agency Project Tracker, providing real-time analytics, customizable widgets, and interactive data visualizations for project performance monitoring.",
    img: "/projects/Agency-project-tracker-Dashboard/dashboard.png",
    link: "",
  },
  {
    id: 6,
    color: "from-purple-300 to-pink-300",
    title: "agriKart-Admin",
    desc: "A comprehensive e-commerce admin dashboard for managing an agricultural products marketplace, with complete control over products, orders, and users.",
    img: "/projects/agriadmin/01-dashboard.png",
    link: "",
  },
  {
    id: 7,
    color: "from-purple-300 to-pink-300",
    title: "agriKart-User",
    desc: "A comprehensive e-commerce platform for buying and selling agricultural products, featuring user roles, project tracking, and detailed analytics.",
    img: "/projects/agriuser/01-home.png",
    link: "",
  }
];

const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.main
      className="h-full bg-black text-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      role="main"
      aria-label="Portfolio page"
    >
      <div className='h-[600vh] relative' ref={ref}>
        <h1 className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600'>
          My Works
        </h1>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen items-center flex justify-center bg-gradient-to-r from-purple-400 to-pink-300' />
            {items.map((item) => (
              <div 
                key={item.id} 
                className={`h-screen w-screen items-center flex justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className='flex flex-col gap-8 p-8 justify-center items-center md:h-full md:w-full max-w-7xl mx-auto'>
                  <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
                    {item.title}
                  </h2>
                  <div className='relative w-full aspect-video max-w-5xl mx-auto group'>
                    <Link href={`/project/${item.id}`} className='block w-full h-full'>
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image 
                          src={item.img}
                          alt={`${item.title} project screenshot`}
                          fill
                          className="object-contain rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          priority={item.id === 1}
                          loading={item.id === 1 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-white/99 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                          <span className="sr-only">View {item.title} project details</span>
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-center max-w-3xl">
                    {item.desc}
                  </p>
                  <Link 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4"
                    onClick={(e) => {
                      if (item.link === "#" || !item.link) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <motion.button 
                      className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 border ${
                        item.link === "#" || !item.link 
                          ? "bg-gray-400 text-gray-200 border-gray-400 cursor-not-allowed"
                          : "bg-black text-white border-black hover:bg-white hover:text-black"
                      }`}
                      disabled={item.link === "#" || !item.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.link === "#" || !item.link ? "Coming Soon" : "See Demo"}
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
            <div className='h-screen w-screen items-center flex justify-center bg-gradient-to-r from-purple-300 to-red-600' />
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-r from-blue-400 to-pink-500'>
        <h1 className='text-8xl'>Do you have a project?</h1>
        <div className='relative'>
          <motion.svg 
            animate={{ rotate: 360 }} 
            transition={{ duration: 8, ease: "linear", repeat: Infinity }} 
            viewBox='0 0 300 300' 
            className='w-64 h-64 md:h-[500px] md:w-[500px]'
          >
            <defs>
              <path
                id='circlePath'
                d='M 150,150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0'
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact">
            <motion.div 
              className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Hire Me
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default PortfolioPage;