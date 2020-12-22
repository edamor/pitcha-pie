import { useInView } from "react-intersection-observer";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { Gallery } from "./Gallery"
import { PortfolioHeader } from "./PortfolioHeader";



export const Portfolio = () => {

  const { portfolioRef } = useNavContext();

  
  const [ref, inView] = useInView({threshold: 0.5});


  return (
    <section className="flex" id="portfolio" ref={portfolioRef} >
      <PortfolioHeader />
      <div ref={ref} >
        <Gallery inView={inView} />
      </div>
    </section>
  )
}