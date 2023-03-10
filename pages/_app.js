import "../styles/globals.css";
import "./../styles/index.css";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../components/Navigation/SideBar";
import { useState,useEffect } from "react";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const router =useRouter()
  useEffect(() => {
    // Close sidebar when navigating to different pages
    const handleRouteChange = () => setOpen(false);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <AnimatePresence mode="wait" initial={false} >
        <Component {...pageProps} key={router.asPath} open={open}  />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
