"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';

const TransitionProvider = ({ children }: any) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathName}
        className="h-screen w-screen bg-gradient-to-b from-black to-slate-400">
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "circInOut" }}
        />
        <motion.div
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default bg-black z-50 w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "circInOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
