"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const PortfolioPage = () => {

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "React Commerce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Next.js Medium Blog",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Vanilla Book App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
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
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>My Works</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x: x }} className='flex'>
            <div className='h-screen w-screen items-center flex justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) => (
              <div key={item.id} className={`h-screen w-screen items-center flex justify-center bg-gradient-to-r ${item.color}`}>
                <div className='flex flex-col gap-8 text-white'>
                  <h1>{item.title}</h1>
                  <div className='relative'>
                    <Image src={item.img} alt='' fill />
                  </div >
                  <p>{item.desc}</p>
                  <Link href={item.link}>
                    <button>see Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
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
              <textPath xlinkHref='#circlePath' className='text-xl'>Front-end Developer and UI Designer</textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className='w-16 h-16 md:h-28 md:w-28 absolute top-0 bottom-0 left-0 right-0 m-auto bg-black text-white rounded-full items-center flex justify-center  text-center'>Hire Me</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage