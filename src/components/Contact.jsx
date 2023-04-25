import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, hashnode, linkedin, yt} from "../assets";

// w-20 h-20 sm:w-5 sm:h:5

const Contact = () => {
  
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 overflow-hidden`}
    >
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='p-10 rounded-2xl flex gap-10 justify-spaced-apart'
      >
        <p className={styles.sectionSubText}>Get in touch...</p>
        {/* <h3 className={styles.sectionHeadText}>Contact.</h3> */}
        <div
              onClick={() => window.open("https://www.github.com/YashV1729", "_blank")}
              className="swhite-gradient w-20 h-20  rounded-full flex justify-center items-center hover:-translate-y-8 
                         cursor-pointer transform ease-in-out transition duration-200 "
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open("https:www.linkedin.com/in/yashrv", "_blank")}
              className="swhite-gradient w-20 h-20 rounded-full flex justify-center items-center hover:-translate-y-8 
                         cursor-pointer transform transition ease-in-out duration-200 "
            >
              <img
                src={linkedin}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open("https://yashrv.hashnode.dev", "_blank")}
              className="swhite-gradient w-20 h-20 rounded-full flex justify-center items-center hover:-translate-y-8
                         cursor-pointer transform transition ease-in-out duration-200 "
            >
              <img
                src={hashnode}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div> 

            <div
              onClick={() => window.open("https://www.youtube.com/@yashrv", "_blank")}
              className="swhite-gradient w-20 h-20 rounded-full flex justify-center items-center hover:-translate-y-8
                         cursor-pointer transform transition ease-in-out duration-200 "
            >
              <img
                src={yt}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
        
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");