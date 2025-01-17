"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { useRef, Suspense } from "react";
import Brain from "../components/brain";
import dynamic from 'next/dynamic';

const ProfileImage3D = dynamic(() => import('../components/ProfileImage3D'), {
  ssr: false,
  loading: () => (
    <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
  ),
});

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.main
      className="h-full bg-black text-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      role="main"
      aria-label="About page"
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col md:w-[450px] lg:w-[650px] sm:w-auto gap-8 justify-center">
            {/* 3D Profile Image */}
            <div className="flex justify-center items-center">
              <Suspense fallback={
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
              }>
                <ProfileImage3D />
              </Suspense>
            </div>
            
            {/* BIOGRAPHY TITLE */}
            <motion.h1 
              className="font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              BIOGRAPHY
            </motion.h1>
            {/* BIOGRAPHY DESC */}
            <motion.div
              className="flex flex-col gap-4 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg text-center leading-relaxed">
                Hi, I&apos;m a Full Stack Developer with a passion for creating innovative digital solutions. I specialize in building modern web applications using cutting-edge technologies.
              </p>
              
              <div className="space-y-3 text-base">
                <p className="leading-relaxed">
                  With expertise in both front-end and back-end development, I craft seamless user experiences while ensuring robust application architecture. My tech stack includes React, Next.js, Node.js, and various modern development tools.
                </p>
                
                <p className="leading-relaxed">
                  I&apos;m dedicated to writing clean, maintainable code and following best practices in software development. My goal is to create applications that not only look great but also perform exceptionally well.
                </p>
              </div>
              
              <div className="flex justify-center gap-4 pt-4">
                {/* <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a> */}
              </div>
            </motion.div>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-center text-gray-400">
              &ldquo;Innovation distinguishes between a leader and a follower.&rdquo; - Steve Jobs
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end h-4 w-4 md:mr-40 sm:mr-52 max-sm:w-4 max-lg:w-[490px]">
              <svg width="170" height="50" viewBox="0 0 272 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88 35.9998C93.5215 42.7484 93.311 56.2869 93.7778 64.2221C94.768 81.0568 92.8704 98.1893 89.4444 114.667C86.5764 128.46 79.7498 142.082 72 153.778C68.3301 159.316 63.4511 166.627 56 167C53.3154 167.134 51.7162 165.773 49.6667 164.111C40.9433 157.035 33.5591 148.658 27 139.555C12.2662 119.109 -3.62307 91.3974 4.44443 65.3332C10.8537 44.6263 27.6415 31.8403 46.2222 22.2221C65.9936 11.9875 86.7886 3.35795 109.222 2.22206C122.286 1.56062 132.272 12.6553 139.889 22.111C152.72 38.039 157.451 60.5608 152.556 80.3332C146.325 105.499 130.331 131.541 104.444 139.778C87.6425 145.124 69.5124 142.34 52.2222 145.222C46.9242 146.105 37.8409 149.028 35 154C32.0729 159.122 33.1647 163.862 34 169.5C34.7711 174.705 36.4745 180.13 39.5 184.5C43.7127 190.585 47.7502 186.687 52.9444 182.555C79.2919 161.597 98.0327 137.136 113.5 107.333C122.753 89.5046 130.746 71.0228 139.944 53.1665C143.418 46.424 147.051 36.6703 154.611 33.4998C158.504 31.8675 165.221 28.111 169.556 28.111C175.166 28.111 179.324 39.0372 180.444 43.111C187.028 67.053 167.093 88.3651 145.944 96.0554C136.357 99.5416 124.304 104.097 117.167 111.444C109.301 119.541 104.745 128.484 101.611 139.278C97.1692 154.578 111.24 164 124.778 164C142.92 164 170.861 143.743 152.667 126.222C146.971 120.738 134.263 154.971 137.222 162C142.045 173.454 157.207 154.956 161.778 150.222C164.5 147.402 174.366 138.917 171.778 134C166.25 123.497 164.863 151.702 165 155.667C165.316 164.834 177.91 147.905 179.556 145.889C185.265 138.893 189.284 134.575 190.778 125.444C192.643 114.046 190 101.734 190 90.2221C190 89.6583 189.598 83.5799 188 85.4443C180.657 94.0116 180.462 110.766 179 121C177.912 128.614 175.179 138.195 178 145.778C178.804 147.939 179.555 153.166 182.056 154C194.401 158.115 207.71 161.344 214.389 146.444C216.75 141.176 219.207 122.397 208.611 130.5C201.013 136.311 200.849 153.849 207.5 160.5C211.035 164.035 212.039 162.398 216.5 158.944C226.17 151.458 233.27 139.628 237.889 128.5C243.121 115.896 245.919 102.206 249.389 89.0554C253.138 74.8496 252.706 60.9655 259.056 47.3332C263.643 37.4841 267.589 27.101 269.944 16.4998C270.216 15.2783 269.412 14.2646 268.5 13.5554C266.002 11.6121 263.435 18.4445 262.944 19.5554C253.185 41.6771 250.823 67.6405 245.056 90.9998C242.353 101.944 242 111.617 242 122.833C242 131.001 246.416 142.056 249.944 149.333C252.067 153.711 253.984 161.322 258 164" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="url(#paint1_linear)"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="url(#paint2_linear)" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="url(#paint3_linear)"
                strokeWidth="1"
              ></path>
              <defs>
                <linearGradient id="paint1_linear" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="paint3_linear" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-4xl text-white"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-col gap-6"
            >
              {/* Frontend */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold">Frontend</h3>
                <div className="flex gap-4 flex-wrap">
                  {[
                    "React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Three.js", "Framer Motion"
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="rounded p-2 text-sm cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold">Backend</h3>
                <div className="flex gap-4 flex-wrap">
                  {[
                    "Node.js", "Nest.js", "Express.js", "MongoDB", "PostgreSQL"
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="rounded p-2 text-sm cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Styling */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold">Styling & Design</h3>
                <div className="flex gap-4 flex-wrap">
                  {[
                    "Tailwind CSS", "SCSS", "Figma"
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="rounded p-2 text-sm cursor-pointer bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-rose-600 hover:to-red-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools & Deployment */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold">Tools & Deployment</h3>
                <div className="flex gap-4 flex-wrap">
                  {[
                    "Docker", "AWS", "Firebase", "Git", "Webpack", "Vite"
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="rounded p-2 text-sm cursor-pointer bg-gradient-to-r from-violet-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AI Technologies */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold">AI Technologies</h3>
                <div className="flex gap-4 flex-wrap">
                  {[
                    "OpenAI API", "Langchain", "Hugging Face"
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="rounded p-2 text-sm cursor-pointer bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="url(#paint4_linear)"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="url(#paint5_linear)" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="url(#paint6_linear)"
                strokeWidth="1"
              ></path>
              <defs>
                <linearGradient id="paint4_linear" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="paint5_linear" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="paint6_linear" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-4xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-2/5">
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Glow Effects */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-40 transition-all duration-500" />
                    
                    {/* Card Content */}
                    <div className="relative backdrop-blur-sm bg-black/50 border border-white/10 rounded-lg overflow-hidden">
                      {/* JOB TITLE */}
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 font-semibold text-white">
                        JavaScript Engineer
                      </div>
                      {/* JOB DESC */}
                      <div className="p-3 text-sm italic text-gray-300">
                        I provided web solutions, applying a range of technologies to address client requirements.
                      </div>
                      {/* JOB DATE */}
                      <div className="p-3 text-yellow-400 text-sm font-semibold">
                        2021 - Present
                      </div>
                      {/* JOB COMPANY */}
                      <div className="mx-3 mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-sm font-semibold w-fit text-white shadow-lg shadow-purple-500/25">
                        Freelancer
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* CENTER */}
                <div className="w-1/5 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-white -left-2 shadow-lg shadow-purple-500/50">
                      {/* Left Arrow */}
                      <motion.div 
                        className="absolute top-1/2 right-full w-16 h-1 bg-gradient-to-r from-transparent to-purple-500 mr-1.5"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 64, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <motion.div 
                          className="absolute right-0 -top-[5px] w-3 h-3 border-t-[3px] border-r-[3px] border-purple-500 transform rotate-45"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/5"></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-2/5"></div>
                {/* CENTER */}
                <div className="w-1/5 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-white -left-2 shadow-lg shadow-purple-500/50">
                      {/* Right Arrow */}
                      <motion.div 
                        className="absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent ml-1.5"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 64, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <motion.div 
                          className="absolute left-0 -top-[5px] w-3 h-3 border-t-[3px] border-l-[3px] border-purple-500 transform -rotate-45"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/5">
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Glow Effects */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition-all duration-500" />
                    
                    {/* Card Content */}
                    <div className="relative backdrop-blur-sm bg-black/50 border border-white/10 rounded-lg overflow-hidden">
                      {/* JOB TITLE */}
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 font-semibold text-white">
                        React Developer
                      </div>
                      {/* JOB DESC */}
                      <div className="p-3 text-sm italic text-gray-300">
                        I led the development of React-based applications, using my advanced skills.
                      </div>
                      {/* JOB DATE */}
                      <div className="p-3 text-yellow-400 text-sm font-semibold">
                        2019 - 2021
                      </div>
                      {/* JOB COMPANY */}
                      <div className="mx-3 mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-semibold w-fit text-white shadow-lg shadow-purple-500/25">
                        CometDigisol
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.main>
  );
};

export default AboutPage;