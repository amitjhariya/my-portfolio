import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import Particles from './../Particles/particles'

const Layout = ({ children,open}) => {
  const [responsiveLoaded, setResponsiveLoaded] = useState(false)

useEffect(() => {
  setResponsiveLoaded(true);
}, []);

  return (
    <>
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: responsiveLoaded ? 0 : 300, opacity:  responsiveLoaded ? 1 : 0 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={open ? "absolute top-0 left-72  w-5/6  " :'absolute top-0 left-16 lg:w-[95%] sm:w-[90%] z-0'}
      
    >
      {children}
      
    </motion.div>
    <Particles id="tsparticles" />
  
     
  </>
  )
}
  

export default Layout;
