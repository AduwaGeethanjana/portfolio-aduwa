import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { FcAndroidOs } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

         <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-yellow-500"/>
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-sky-700"/>
            </motion.div>

            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-700"/>
            </motion.div>

            <motion.div
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-7xl text-yellow-300"/>
            </motion.div>
            
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFlutter className="text-7xl text-sky-400 "/>
            </motion.div>

            <motion.div
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div
             variants={iconVariants(7)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAngular className="text-7xl text-red-700"/>
            </motion.div>

            <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-7xl text-green-400"/>
            </motion.div>


        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4 py-10">
            


            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiVisualstudio className="text-7xl text-sky-500"/>
            </motion.div>

            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcAndroidOs className="text-7xl text-green"/>
            </motion.div>

            <motion.div
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-purple-800"/>
            </motion.div>

            <motion.div
             variants={iconVariants(7)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl text-sky-600"/>
            </motion.div>

            <motion.div
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJira className="text-7xl text-sky-700"/>
            </motion.div>

            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl "/>
            </motion.div>

            <motion.div
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcLinux className="text-7xl "/>
            </motion.div>

            <motion.div
             variants={iconVariants(7)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-sky-700 "/>
            </motion.div>

        </motion.div>
        </div>
  );
};

export default Technologies