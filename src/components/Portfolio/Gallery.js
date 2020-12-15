import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react"
import { ProjectDetails } from "./ProjectDetails";
import { Projects } from "./Projects"






export const Gallery = (props) => {

  const { inView } = props;

  const galleryRef = useRef(null);

  const [state, setState] = useState({
    selected: {},
    showDetails: false
  });

  function selectProject(project) {
    setState({
      selected: project,
      showDetails: true
    });
    galleryRef.current.scrollIntoView({behavior: "smooth"});
  };

  function backToGallery() {
    setState({
      selected: {},
      showDetails: false
    });
    galleryRef.current.scrollIntoView({behavior: "smooth"});
  };

  const styleHeight = {
    height: (window.innerWidth < 600 ? "100%":"60rem"),
    width: "100vw"
  }


  return (
    <>
    <div id="myGallery" style={styleHeight} ref={galleryRef}>
      
      <AnimatePresence exitBeforeEnter >
        {
          !state.showDetails && <motion.div 
            id="gallery" 
            className="container flex row wrap animated"
            
            initial={{
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0
            }}
            transition={{
              duration: 0.5
            }}
          >
            <Projects 
              selectProject={selectProject}
              inView={inView}
            />
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter initial={false}>
        {
          state.showDetails && <motion.div 
            className="project-details bg-white"
            
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0
            }}
            transition={{
              duration: 0.8
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