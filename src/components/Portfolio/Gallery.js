import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { ProjectDetails } from "./ProjectDetails";
import { Projects } from "./Projects"






export const Gallery = (props) => {

  const { portfolioRef } = useNavContext();

  const [state, setState] = useState({
    selected: {},
    showDetails: false
  });

  function selectProject(project) {
    setState({
      selected: project,
      showDetails: true
    });
    portfolioRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  function backToGallery() {
    setState({
      selected: {},
      showDetails: false
    });
    portfolioRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  const styleHeight = {
    // height: (window.innerWidth < 600 ? "100%":"60rem"),
    height: "100%",
    width: "100vw"
  }


  return (
    <>
    <div id="myGallery" style={styleHeight} >
      
      <AnimatePresence exitBeforeEnter >
        {
          !state.showDetails && <motion.div 
            id="gallery" 
            className="container flex row wrap"
            
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: "-100vw"
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <Projects 
              selectProject={selectProject}
            />
          </motion.div>
        }
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter initial={false}>
        {
          state.showDetails && <motion.div 
            className="project-details bg-white"
            
            initial={{
              opacity: 0,
              x: "100vw"
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: "-100vw"
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <ProjectDetails
              project={state.selected} 
              backToGallery={backToGallery}
            />
          </motion.div>
        }
      </AnimatePresence>
 
    </div>   
  </>
  )
}