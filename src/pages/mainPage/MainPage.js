import { motion } from "framer-motion"
import { About } from "../../components/About/About"
import { Contact } from "../../components/Contact/Contact"
import { Footer } from "../../components/Footer/Footer"
import { Landing } from "../../components/Landing/Landing"
import { Portfolio } from "../../components/Portfolio/Portfolio"


export const MainPage = (props) => {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Landing />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </motion.div>
  )
}