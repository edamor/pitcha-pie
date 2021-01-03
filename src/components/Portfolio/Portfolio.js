import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { FeaturedProjects } from "./FeaturedProjects";
import { Gallery } from "./Gallery"
import { PortfolioHeader } from "./PortfolioHeader";


const style = {
  position: "absolute",
  top: "50vh",
  zIndex: -1
}


export const Portfolio = () => {

  const { portfolioRef, setActiveNav } = useNavContext();
  const [ref, inView] = useInView();
  const location = useLocation();

  useEffect(() => {
    if (inView) {
      setActiveNav({
        navProjects: {
          featured: true
        }
      })
    }
  }, [inView, setActiveNav])

  useEffect(() => {
    if (location.state === "featuredProjects") {
      portfolioRef.current.scrollIntoView({behavior: "smooth"})
    }
  }, [portfolioRef, location.state])

  return (
    <section className="flex" id="portfolio" ref={portfolioRef} >
      <div ref={ref} style={style} />
      <PortfolioHeader />
      <div>
        {/* <Gallery /> */}
        <FeaturedProjects />
      </div>
    </section>
  )
}