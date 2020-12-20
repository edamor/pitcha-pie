import { motion } from "framer-motion";
import { useRef, useState } from "react"
import { doSubmitContactForm } from "./ContactFormService";


const toastVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: 0.2
  },
  visible: {
    opacity: 1,
    height: 36,
    transition: 0.2
  }
};

const toastStyles = [
  {
    background: "#db3d21",
    border: "1px solid #7c1515",
    color: "#FFFFFF"
  },
  {
    background: "#19996e",
    border: "1px solid #157c59",
    color: "#FFFFFF"
  }
];


export const ContactForm = () => {

  const textAreaRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const [toastStat, setToastStat] = useState({
    show: false,
    style: 1
  });

  const [message, setMessage] = useState({
    fromName: "",
    fromEmail: "",
    textBody: ""
  });


  function submitContactForm() {
    setIsLoading(true);
    doSubmitContactForm(message)
      .then(res => {
        if (res === "SENT") {
          setIsLoading(false);
          setMessage({
            fromName: "",
            fromEmail: "",
            textBody: ""
          })
          setToastStat({
            show: true,
            style: 1
          })
        } else {
          setIsLoading(false);
          console.log(res);
          setToastStat({
            show: true,
            style: 0
          })
        }
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
        setToastStat({
            show: true,
            style: 0
          })
      })
  };


  return (
    <form className="waypoint animated pop-in" data-delay=".5s" id="contact-form" style={{animationDelay: "0.5s"}}>
      <input 
        placeholder="Name (optional)" 
        type="text" 
        name="name"
        value={message.fromName || ""}
        onChange={(e) => {
          setMessage({
            ...message,
            fromName: e.target.value
          })
        }}
        disabled={isLoading}

      />
      <input 
        placeholder="Email" 
        type="email" 
        name="email"
        value={message.fromEmail || ""}
        onChange={(e) => {
          setMessage({
            ...message,
            fromEmail: e.target.value
          })
        }}
        disabled={isLoading}
      />
      <textarea 
        placeholder="Your Message" 
        type="text" 
        name="message" 
        maxLength={300} 
        ref={textAreaRef}
        value={message.textBody || ""}
        onChange={(e) => {
          setMessage({
            ...message,
            textBody: e.target.value
          })
        }}
        disabled={isLoading}
      >
      </textarea>
      <div style={{
        textAlign: "right"
      }}>
        {`${textAreaRef.current?.maxLength - message.textBody.length || 0}
        /${textAreaRef.current?.maxLength || "300"} 
        ${message.textBody.length === textAreaRef.current?.maxLength - 1 ? "character" : "characters"} left`}
      </div>
      <motion.div
        className="toast"
        initial={false}
        animate={toastStat.show ? "visible" : "hidden"}
        variants={toastVariants}
      >
        <motion.div
          style={toastStyles[toastStat.style]}
        >
          {toastStat.style === 1 ? "Success! I'll be back with a response shortly." : "An error occurred. Review the form and try again."}
          <span className="mdi mdi-close toast-close" onClick={() => {setToastStat({...toastStat,show: false})}}></span>
        </motion.div>
      </motion.div>
      <button 
        className="button" 
        type="button" 
        id="submit"
        onClick={submitContactForm} 
        // onClick={() => {setToastStat({
        //   show: !toastStat.show,
        //   style: 1
        // })
        // setIsLoading(!isLoading)
        // }}
        disabled={isLoading} 
      >
          SUBMIT
        {/* <a href="mailto:amor.edlouise@gmail.com?subject=INQUIRY">
        </a> */}
      </button>
    </form>
  )
}