


export const Contact = () => {

  return (
    <section id="contact" className=" bg-contact contact-page">
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="#F5F5F5" stroke="#F5F5F5"></path>
      </svg>
      <div className="container flex">
        <div className="header waypoint animated slide-in-left text-white" >
          CONTACT
        </div>
        <div className="header-bar waypoint animated slide-in-right"  data-delay=".25s" style={{animationDelay: "0.25s"}}></div>
        <div className="highlight waypoint animated slide-in-right"  data-delay=".5s" style={{animationDelay: "0.5s"}}>
          Have a question or want to work together?
        </div>
        <form className="waypoint animated pop-in" data-delay=".5s" id="contact-form" style={{animationDelay: "0.5s"}}>
          <input placeholder="Name" type="text" name="name" required="" />
          <input placeholder="Enter email" type="email" name="email" required="" />
          <textarea placeholder="Your Message" type="text" name="message"></textarea>
          <div id="success">
            <div>
              Your message was sent successfully. Thanks!<span id="close" className="mdi mdi-close"></span>
            </div>
          </div>
          <button className="button" type="button" id="submit" >
            SUBMIT
          </button>
        </form>
      </div>
  </section>    
  )
}