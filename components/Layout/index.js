import { motion } from "framer-motion";
import Particles from "../Particles/particles";
import { useState, useEffect } from "react";

const Layout = ({ children, open }) => {
  const [responsiveLoaded, setResponsiveLoaded] = useState(false);

  useEffect(() => {
    setResponsiveLoaded(true);
  }, []);
  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={
          open
            ? "absolute top-0 left-72  w-5/6  "
            : "absolute top-0 left-16 lg:w-[95%] sm:w-[90%] z-0"
        }
      >
        {children}
      </motion.div>
    </>
  );
};
export default Layout;
