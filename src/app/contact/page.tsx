"use client"

import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef, useState } from 'react';

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello"

  const form = useRef();
  const ENV = "process.env"

  const sendEmail = (e: any) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY).then((result) => {
      setSuccess(true)
      form.current.reset
      console.log(result.text)
    }, (error: any) => {
      setError(true)
      console.error(error.text)
    })
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 '>
        {/* TEXT CONTAINER  */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center text-6xl'>
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                {letter}

              </motion.span>
            ))}
            &nbsp;😊 😀
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form onSubmit={sendEmail} ref={form} className='h-1/2 lg:h-full lg:w-1/2 bg-blue-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'>
          <span>Hello,</span>
          <textarea name="user_message" id="" required rows="4" className='bg-transparent border-b-2 border-b-black outline-none resize-none'></textarea>
          <span>My mail address is:</span>
          <input name='user_email' type="text" required className='bg-transparent border-b-2 border-b-black outline-none' />
          <span>Regards</span>
          <button className='bg-pink-300 rounded font-semibold text-gray-700 p-4 hover:bg-pink-500'>Send</button>
          {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
          {error && <span className='text-red-600 font-semibold'>Something went wrong!!</span>}

        </form>

      </div>
    </motion.div>
  )
}

export default ContactPage