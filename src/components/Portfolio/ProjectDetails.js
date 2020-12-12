import { SlideShow } from "./Slideshow";



export const ProjectDetails = (props) => {

  const { project, backToGallery } = props;



  return (
    <div 
      style={{
        backgroundColor: "#fff",
        width: "80%",
        margin: "0 auto",
        padding: "1rem"
      }}
    >
      <div className="project-details-page" >
        <div className="project-img-slider" >
          {
            project?.images.length > 0 ?
            <SlideShow images={project.images} />
            :
            <div className="slider-buttons">
              <i className="mdi mdi-chevron-left slider-button" ></i>
              <img 
                src={"https://via.placeholder.com/640x360.jpg"}
                alt="..."
              />
              <i className="mdi mdi-chevron-right slider-button"></i>
            </div>
          }
        </div>
        <div className="project-content">
          <div className="project-title"> {project?.name || ""} </div>
          <div className="project-tag">Subtitle</div>
          <div className="project-description">
            {project?.description &&
              project.description.map((item,index) => (
                <p 
                  key={index}
                >
                  {item}
                </p>
              ))
            }
          </div>
        </div>
        <div
          className="project-footer"
        >
          <div className="project-button">
            <i className="mdi mdi-open-in-new"></i>VIEW SITE
          </div>
          <div
            className="project-button-close"
            onClick={backToGallery}
          >
            <i className="close mdi mdi-close"></i>
          </div>
        </div>
      </div>
    </div> 
  )
}