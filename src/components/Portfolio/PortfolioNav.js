


export const PortfolioNav = (props) => {


  return (
    <div className="filter-wrap waypoint animated fade-in" data-animation="fade-in">
      <div className="flex row">
        <div className="filter" >ALL</div>
        <div className="filter" >WEBSITES</div>
        <div className="filter" >WEB APPS</div>
        <div className="filter" >SNIPPETS</div>
      </div>
      <div className="float-bar" style={{ left: "25px", width: "112px" }}>
        <div className="flex row" style={{ left: "-25px" }}>
          <div className="filter" >ALL</div>
          <div className="filter" >WEBSITES</div>
          <div className="filter" >WEB APPS</div>
          <div className="filter" >SNIPPETS</div>
        </div>
      </div>
    </div>
  )
}