import { Gallery } from "./Gallery"
import { PortfolioNav } from "./PortfolioNav"



export const Portfolio = () => {

  return (
    <section className="flex" id="portfolio">
      <div className="header animated slide-in-right">
        PROJECTS
      </div>
      <div className="header-bar animated slide-in-right" />
      {/* <PortfolioNav /> */}
      <Gallery />
    </section>
  )
}