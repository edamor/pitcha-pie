import "./style.css";



export const FeaturedCard = (props) => {
  const { project } = props;

  const bgImage = { backgroundImage: `url(${project.displayImg})`};

  const tags = project.stack.map((item, index) => (
    <li key={index}>
      <span>
        {item}
      </span>
    </li>
  ))


  return (
    <div className={`blog-card ${props.alt ? "alt" : ""}`} style={{ marginBottom: "4rem" }}>
      <div className="meta">
        <div 
          className="photo" 
          style={bgImage} ></div>
        <ul className="details">
          <li className="tags">
            <ul>
              {tags}
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1> {project.title} </h1>
        <h2> {project.subtitle} </h2>
        <p> {project.shortDescription} </p>
        <div className="read-more">
          <span>Read More</span>
        </div>
      </div>
    </div>   
  )
}