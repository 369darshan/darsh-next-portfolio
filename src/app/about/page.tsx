"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Brain from "../components/brain";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >

      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col  md:w-[450px] lg:w-[650px] sm:w-auto gap-8 justify-center  ">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src='/profile.png'
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover ring-1 ring-black"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl text-white">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className=" items-center text-xl justify-center md:text-base text-center text-white sm:w-auto sm:text-sm max-sm:text-sm max-sm:w-auto md:w-auto lg:w-full">
              &quot; Immersed at the nexus of technology and creativity, I sculpt digital experiences infused with authenticity and innovation. With an artistic flair and technological prowess, I redefine the digital landscape one project at a time. Each endeavor blends aesthetics and functionality, weaving tales of excellence in every pixel.
              Driven by curiosity and a relentless pursuit of perfection, I navigate digital complexities with finesse. Whether crafting intuitive interfaces or engineering immersive ecosystems, I push boundaries with determination. Inspired by nature&apos;s harmony, my designs evolve, reflecting the fusion of innovation and creativity.
              Welcome to my digital realm, where imagination thrives and possibilities abound.&quot;
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">

            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end h-4 w-4 md:mr-40 sm:mr-52 max-sm:w-4 max-lg:w-[490px] ">
              <svg width="170" height="50" viewBox="0 0 272 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88 35.9998C93.5215 42.7484 93.311 56.2869 93.7778 64.2221C94.768 81.0568 92.8704 98.1893 89.4444 114.667C86.5764 128.46 79.7498 142.082 72 153.778C68.3301 159.316 63.4511 166.627 56 167C53.3154 167.134 51.7162 165.773 49.6667 164.111C40.9433 157.035 33.5591 148.658 27 139.555C12.2662 119.109 -3.62307 91.3974 4.44443 65.3332C10.8537 44.6263 27.6415 31.8403 46.2222 22.2221C65.9936 11.9875 86.7886 3.35795 109.222 2.22206C122.286 1.56062 132.272 12.6553 139.889 22.111C152.72 38.039 157.451 60.5608 152.556 80.3332C146.325 105.499 130.331 131.541 104.444 139.778C87.6425 145.124 69.5124 142.34 52.2222 145.222C46.9242 146.105 37.8409 149.028 35 154C32.0729 159.122 33.1647 163.862 34 169.5C34.7711 174.705 36.4745 180.13 39.5 184.5C43.7127 190.585 47.7502 186.687 52.9444 182.555C79.2919 161.597 98.0327 137.136 113.5 107.333C122.753 89.5046 130.746 71.0228 139.944 53.1665C143.418 46.424 147.051 36.6703 154.611 33.4998C158.504 31.8675 165.221 28.111 169.556 28.111C175.166 28.111 179.324 39.0372 180.444 43.111C187.028 67.053 167.093 88.3651 145.944 96.0554C136.357 99.5416 124.304 104.097 117.167 111.444C109.301 119.541 104.745 128.484 101.611 139.278C97.1692 154.578 111.24 164 124.778 164C142.92 164 170.861 143.743 152.667 126.222C146.971 120.738 134.263 154.971 137.222 162C142.045 173.454 157.207 154.956 161.778 150.222C164.5 147.402 174.366 138.917 171.778 134C166.25 123.497 164.863 151.702 165 155.667C165.316 164.834 177.91 147.905 179.556 145.889C185.265 138.893 189.284 134.575 190.778 125.444C192.643 114.046 190 101.734 190 90.2221C190 89.6583 189.598 83.5799 188 85.4443C180.657 94.0116 180.462 110.766 179 121C177.912 128.614 175.179 138.195 178 145.778C178.804 147.939 179.555 153.166 182.056 154C194.401 158.115 207.71 161.344 214.389 146.444C216.75 141.176 219.207 122.397 208.611 130.5C201.013 136.311 200.849 153.849 207.5 160.5C211.035 164.035 212.039 162.398 216.5 158.944C226.17 151.458 233.27 139.628 237.889 128.5C243.121 115.896 245.919 102.206 249.389 89.0554C253.138 74.8496 252.706 60.9655 259.056 47.3332C263.643 37.4841 267.589 27.101 269.944 16.4998C270.216 15.2783 269.412 14.2646 268.5 13.5554C266.002 11.6121 263.435 18.4445 262.944 19.5554C253.185 41.6771 250.823 67.6405 245.056 90.9998C242.353 101.944 242 111.617 242 122.833C242 131.001 246.416 142.056 249.944 149.333C252.067 153.711 253.984 161.322 258 164" stroke="blue" stroke-width="3" stroke-linecap="round" />
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
                stroke="white"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-white"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded ring-1 ring-yellow-300  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>

              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>

              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>

              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded ring-1 ring-yellow-300 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
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
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
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
              className="font-bold text-2xl"
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
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-white">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-yellow-400 text-sm font-semibold">
                    2021 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Freelancer
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}

                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm text-white italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-yellow-400 text-sm font-semibold">
                    2019 - 2021{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    CometDigisol
                  </div>
                </div>

              </div>
              {/* EXPERIENCE LIST ITEM */}

            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;