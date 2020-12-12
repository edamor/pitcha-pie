import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};


export const SlideShow = (props) => {

  const { images } = props;

  const [[page, direction], setPage] = useState([0, 0]);
  
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // <div className="slider-buttons">
  //   <i className="mdi mdi-chevron-left slider-button" ></i>

  //   <i className="mdi mdi-chevron-right slider-button"></i>
  // </div>

  return (
    <>
          
      <div className="slider-buttons">
        <i 
          className="mdi mdi-chevron-left slider-button" 
          onClick={() => paginate(-1)}
          ></i>

        <i 
          className="mdi mdi-chevron-right slider-button"
          onClick={() => paginate(1)}></i>
      </div>
      <AnimatePresence initial={false} custom={direction}>
            <motion.img
              style={{
                objectFit: "scale-down",
                height: "100%",
                width: "100%",
              }}
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
      {/* <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div> */}
    </>
  )
}