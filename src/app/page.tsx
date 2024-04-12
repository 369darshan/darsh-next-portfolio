"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ComputersCanvas } from './components/canvas';
import { Meteors } from "./components/ui/meteorss";



const Home = ({ link }: any) => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >

      <div className="flex-col h-full flex lg:flex-col px-4">
        <Meteors number={50} />

        {/* IMAGE CONTAINER */}
        <div className="mt-[-100px] flex sm:h-1/2 lg:h-4/5 lg:w-full md:w-full sm:w-full relative">
          {/* <Image src='/hero.png' alt="hero" fill className="object-contain" /> */}
          <ComputersCanvas />
        </div>
        {/* TEXT CONTAINER */}
        <div className="bg-transparent sm:h-1/2 lg:h-1/5 lg:w-full flex flex-col gap-2 items-center justify-center">
          {/* TITLE */}
          <h1 className="bg-transparent lg:h-30 pt-12 pb-2 text-center  text-6xl md:text-4xl sm:text-2xl max-sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-400 ">&quot;Architecting Tomorrow&apos;s Experiences,<br /> Empowering Connections.&quot;</h1>
          {/* DESC */}
          <p className="lg:h-1 text-center md:text-xl text-white">
          &quot;Embrace my digital domain, where innovation sparks with creativity. With code as my ink and design as my canvas, my portfolio paints a picture of excellence.&quot;
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4 pt-6 md:mt-8 sm:mb-6">
            <button className="p-4 rounded-lg ring-1 ring-white hover:bg-black hover:text-white transition">
              <Link href='/portfolio'>View My Work</Link>
              
            </button>
            <button className="p-4 rounded-lg  ring-1 ring-white  hover:bg-black hover:text-white transition">
              <Link href='/contact'>Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;