import { ChevronDoubleRight } from "../SvgIcons/SvgIcons"
import "./viewProjectsButtonStyle.css"





export const ViewProjectsButton = () => {


  return (
    <div
      className="view-projects-button"
    >
      <div className="view-projects-div">
        <span className="view-projects-text">
          View all projects
        </span>
        <div className="view-projects-arrow">
          <ChevronDoubleRight />
        </div>
      </div>
    </div>
  )
}