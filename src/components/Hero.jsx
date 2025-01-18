import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/AduwaProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="pb-16 font-thin tracking-tight lg:mt-16 whitespace-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Aduwa Geethanjana
            </motion.h1>
            <motion.span
            variants={container(1)}
            initial="hidden"
            animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-transparent">
              Software Engineer
            </motion.span>
            <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
  {HERO_CONTENT}
</motion.p>

          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end items-center">
          <motion.img
          initial={{ x: 100, opacity: 0}}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: 1, delay: 1.5}}
            src={profilePic}
            alt="Aduwa Geethanjana"
            className="rounded-lg shadow-lg max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
