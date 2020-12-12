


export const Hexagons = () => {

  return (
    <div className="flex row label-wrap">
      <div className="flex row-gt-sm">

        <div className="flex bullet-wrap">
          <div className="hex-wrap animated flip-in-x">
            <div className="hexagon">
              <i className="mdi mdi-speedometer" />
            </div>
          </div>
          <div className="animated fade-in">
            <div className="label bold">Fast</div>
            <div className="hexagon-text">
              Fast load times and lag free experiences.
            </div>
          </div>
        </div>

        <div className="flex bullet-wrap">
          <div className="hex-wrap animated flip-in-x">
            <div className="hexagon">
              <i className="mdi mdi-cellphone-link" />
            </div>
          </div>
          <div className="animated fade-in">
            <div className="label bold">Responsive</div>
            <div className="hexagon-text">
              Layouts that will adapt to device's screen size
            </div>
          </div>
        </div>

        <div className="flex bullet-wrap">
          <div className="hex-wrap animated flip-in-x">
            <div className="hexagon">
              <i className="mdi mdi-lightbulb-outline" />
            </div>
          </div>
          <div className="animated fade-in">
            <div className="label bold">Intuitive</div>
            <div className="hexagon-text">
              Modern UI/UX designs that are familiar and easy to use
            </div>
          </div>
        </div>

        <div className="flex bullet-wrap">
          <div className="hex-wrap animated flip-in-x">
            <div className="hexagon">
              <i className="mdi mdi-rocket" />
            </div>
          </div>
          <div className="animated fade-in">
            <div className="label bold">Dynamic</div>
            <div className="hexagon-text">
              Integrations with online web apps will make your website feel alive
            </div>
          </div>
        </div>

      </div>
    </div>    
  )
}