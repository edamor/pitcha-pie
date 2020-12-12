

export const Footer = () => {



  return (
    <footer className="bg-footer">
      <span>
        <a href="#home">
          <i className="mdi mdi-chevron-double-up page-link" dest="home"></i>
        </a>
      </span>

      <div className="icon-wrap flex row">
        <a href="https://www.linkedin.com/in/ed-louise-amor-577a99196/">
          <div className="flex icon" title="LinkedIn" id="icon-2" >
            <i className="mdi mdi-linkedin"></i>
          </div>
        </a>
        <a href="mailto:amor.edlouise@gmail.com?subject=INQUIRY">
          <div className="flex icon" title="Gmail: amor.edlouise@gmail.com" id="icon-2">
            <i className="mdi mdi-email"></i>
          </div>
        </a>
        <a href="https://www.facebook.com/ed.amor.31">
          <div className="flex icon" title="Facebook" id="icon-3">
            <i className="mdi mdi-facebook"></i>
          </div>
        </a>
        <a href="https://github.com/edamor">
          <div className="flex icon" title="GitHub" id="icon-4">
            <i className="mdi mdi-github"></i>
          </div>
        </a>
        <a href="https://codepen.io/edamor">
          <div className="flex icon" title="CodePen" id="icon-5">
            <i className="mdi mdi-codepen"></i>
          </div>
        </a>
      </div>
      <div className="info-box">
        <div className="footnote">
          ED LOUISE AMOR <span className="highlight">© {(new Date()).getFullYear()} </span>
        </div>
      </div>
    </footer>    
  )
}