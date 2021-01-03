import { motion } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Nav } from "../../components/Nav/Nav"
import { useNavContext } from "../../contexts/NavContext/NavContext";


export const ProjectPage = (props) => {

  const { setActiveNav } = useNavContext();

  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      setActiveNav({
        navProjects: {
          all: true
        }
      })
    }
  }, [inView, setActiveNav])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      <h1 ref={ref} style={{ color: "black", marginTop: "50px"}}>projects paaaage!!</h1>
    </motion.div>
  )
}