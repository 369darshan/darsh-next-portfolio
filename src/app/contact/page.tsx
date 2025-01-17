"use client"

import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef, useState, Suspense, useCallback, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { debounce } from 'lodash';

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY!);

const Contact3D = dynamic(() => import('../components/canvas/Contact3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" aria-label="Loading 3D model">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
});

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const resetForm = useCallback(() => {
    setSuccess(false);
    setError(false);
    setIsLoading(false);
    setErrorMessage('');
  }, []);

  const debouncedSendEmail = useMemo(
    () =>
      debounce(async (currentForm: HTMLFormElement) => {
        try {
          if (!process.env.NEXT_PUBLIC_SERVICE_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID || !process.env.NEXT_PUBLIC_PUBLIC_KEY) {
            throw new Error('EmailJS configuration is missing');
          }

          const result = await emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            currentForm,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          );
          
          setSuccess(true);
          currentForm.reset();
          console.log('Email sent successfully:', result.text);
        } catch (error: any) {
          setError(true);
          console.error('Failed to send email:', error.message || error.text);
          // Show more specific error message to the user
          setErrorMessage(error.message || 'Failed to send email. Please try again later.');
        } finally {
          setIsLoading(false);
        }
      }, 500),
    []
  );

  const sendEmail = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
    setIsLoading(true);

    const currentForm = form.current;
    if (!currentForm) {
      console.error('Form reference is null');
      setError(true);
      setIsLoading(false);
      return;
    }

    debouncedSendEmail(currentForm);
  }, [debouncedSendEmail, resetForm]);

  const Title = useMemo(() => (
    <motion.h1 
      initial={{ rotateX: 90 }}
      animate={{ rotateX: 0 }}
      transition={{
        duration: 1,
        delay: 0.3,
        type: "spring",
        stiffness: 100
      }}
      className="text-5xl lg:text-7xl font-bold relative z-10 transform-style-3d"
      style={{
        textShadow: `
          0 0 2px #4fc3dc,
          0 0 4px #4fc3dc,
          0 0 8px #4fc3dc,
          0 0 12px #4fc3dc
        `,
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      <span 
        className="inline-block transform-style-3d hover:scale-105 transition-transform duration-300 gradient-animate"
        style={{
          transform: 'translateZ(30px)',
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        Let&apos;s Connect
      </span>
    </motion.h1>
  ), []);

  return (
    <motion.main
      className="h-full relative overflow-hidden bg-gradient-to-br from-blue-50/10 via-transparent to-purple-50/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="main"
      aria-label="Contact page"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Contact3D />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center relative perspective-[2000px]"
          >
            {Title}
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mt-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              Have a project in mind? Let&apos;s bring it to life together.
            </motion.p>
          </motion.div>
        </div>

        {/* FORM CONTAINER */}
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl text-xl flex flex-col gap-8 justify-center p-8 lg:p-12 shadow-xl border border-white/20"
        >
          <div className="relative">
            <input
              name="user_name"
              type="text"
              required
              className="w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 outline-none p-2 transition-all text-gray-800 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Your Name"
            />
          </div>

          <div className="relative">
            <input
              name="user_email"
              type="email"
              required
              className="w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 outline-none p-2 transition-all text-gray-800 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Your Email"
            />
          </div>

          <div className="relative">
            <textarea
              name="user_message"
              required
              rows={4}
              className="w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 outline-none p-2 resize-none transition-all text-gray-800 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Your Message"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            className={`py-4 px-8 rounded-xl text-white font-semibold ${
              isLoading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/25'
            } transition-all duration-300`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>

          {/* Success/Error Messages */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 text-center text-sm"
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-center text-sm"
            >
              {errorMessage}
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.main>
  );
};

export default ContactPage;