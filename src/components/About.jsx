import aboutImg from "../assets/about.png";
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3, ABOUT_TEXT_4 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <ul className="my-2 max-w-xl py-6 space-y-4">
            <li className="list-disc text-justify">{ABOUT_TEXT_1}</li>
            <li className="list-disc text-justify">{ABOUT_TEXT_2}</li>
            <li className="list-disc text-justify">{ABOUT_TEXT_3}</li>
            <li className="list-disc text-justify">{ABOUT_TEXT_4}</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
