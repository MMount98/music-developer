import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Landing() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
          alt="landing photos"
          className="w-full h-4/6"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
          <motion.h1
            className="text-5xl text-white m-5"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Welcome To Band Bridge
          </motion.h1>
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <TypeAnimation
              className="text-2xl text-white"
              preRenderFirstString={true}
              sequence={[
                "Let Us Help you Find Your Next Show",
                1500,
                "Let Us Help you Find Your Next Opener",
                1500,
                "Let Us Help you Find Your Next Venue",
                1500,
                "Let Us Help you Find Your Next Night Out",
                1500,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <button className="btn btn-outline m-2 text-white">
              Find Local Bands
            </button>
            <button className="btn btn-outline m-2 text-white">
              Find Local Concerts
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
