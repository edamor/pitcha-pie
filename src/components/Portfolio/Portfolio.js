import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { Gallery } from "./Gallery"
import { PortfolioHeader } from "./PortfolioHeader";





export const Portfolio = () => {

  const { portfolioRef, setActiveNav } = useNavContext();
  
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setActiveNav({
        navPortfolio: true
      })
    }
  }, [inView, setActiveNav])

  return (
    <section className="flex" id="portfolio" ref={portfolioRef} >
      <PortfolioHeader />
      <div ref={ref} >
        <Gallery inView={inView} />
      </div>
    </section>
  )
}