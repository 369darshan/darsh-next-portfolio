"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ProfileImage3D = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30 blur-2xl group-hover:opacity-50 group-hover:scale-110 transition-all duration-500" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" />
      <div className="absolute inset-0 rounded-full bg-gradient-conic from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-lg group-hover:opacity-30 group-hover:animate-spin-slow transition-all duration-500" 
           style={{ animationDuration: '8s' }}
      />
      
      {/* Glass Morphism Container */}
      <motion.div
        className="relative w-28 h-28 transform-gpu rounded-full backdrop-blur-[2px] bg-white/5 border border-white/20 shadow-[0_0_15px_rgba(147,51,234,0.2)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] overflow-hidden"
        animate={{
          scale: isHovered ? 1.2 : 1,
          y: isHovered ? -5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15
        }}
      >
        {/* Profile Image */}
        <Image
          src="/profile.png"
          alt="profile"
          fill
          className="object-cover rounded-full p-2 group-hover:p-1 transition-all duration-300"
          priority
        />
      </motion.div>

      {/* Enhanced outer ring with glow */}
      <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.div>
  );
};

export default ProfileImage3D;
