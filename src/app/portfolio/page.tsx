"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';


const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  // const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

  const items = [
    {
      id: 1,
      color: "from-pink-300 to-blue-300",
      title: "Visutation",
      desc: "Visutation is a Sorting Visualizer.It shows visually working of diffrent Sorting Algorithms.",
      img: require("../../../public/projects/darsh-visutation 2024-04-05 17-46-28.png"),
      link: "https://darsh-visutation.vercel.app/",
    },
    {
      id: 2,
      color: "from-red-300 to-blue-300",
      title: "NextJs eCommerce",
      desc: "This Ecommerce website made using NextJS,TailwindCss and Stripe for payment",
      img: require("../../../public/projects/Client Home 2023-08-24 08-14-51.png"),
      link: "#",
    },
    {
      id: 3,
      color: "from-blue-300 to-violet-300",
      title: "Next.js Admin",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: require("../../../public/projects/Admin Product Edit 2023-08-24 08-12-43.png"),
      link: "#",
    },
    {
      id: 4,
      color: "from-violet-300 to-purple-300",
      title: "Vanilla Book App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: require("../../../public/projects/Client Home 2023-08-24 08-14-51.png"),
      link: "#",
    },
    {
      id: 5,
      color: "from-purple-300 to-red-300",
      title: "App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: require("../../../public/projects/Client Home 2023-08-24 08-14-51.png"),
      link: "#",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600'>My Works</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x: x }} className='flex'>
            <div className='h-screen w-screen items-center flex justify-center bg-gradient-to-r from-purple-400 to-pink-300' />
            {items.map((item) => (
              <div key={item.id} className={`h-screen w-screen items-center flex justify-center bg-gradient-to-r ${item.color}`}>
                <div className='flex flex-col gap-4 p-4 justify-center items-center  md:h-full md:w-full  '>
                  <h1 className="md:mt-10 text-xl  font-bold md:text-4xl  lg:text-4xl xl:text-2xl xl:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">{item.title}</h1>
                  <div className='flex  h-[500px] md:h-[600px] md:w-[800px] lg:w-[950px] lg:h-[1350px] xl:w-[1300px] xl:h-auto'>
                    <Image className="xl:h-auto lg:h-auto  md:h-[500px] md:w-auto m-auto" src={item.img} alt='img' />
                  </div >
                  <p className="w-auto md:w-auto lg:w-auto lg:text-lg xl:w-[800px]">{item.desc}</p>
                  <Link href={item.link} className="flex justify-end mb-16">
                    <button className="p-1 text-sm md:p-2 md:text-md lg:p-4 lg:text-md bg-black text-white font-semibold m-1 rounded hover:text-pink-500">see Demo</button>
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
          <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} viewBox='0 0 300 300' className='w-64 h-64 md:h-[500px] md:w-[500px]'>
            <defs>
              <path
                id='circlePath'
                d='M 150,150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0'
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>Full-stack Developer and UI Designer</textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className='w-16 h-16 md:h-28 md:w-28 absolute top-0 bottom-0 left-0 right-0 m-auto bg-black text-white rounded-full items-center flex justify-center  text-center hover:bg-white hover:text-black transition'>Hire Me</Link>
        </div>
      </div>

    </motion.div>
  )
}

export default PortfolioPage