import Contactus from "@/pages/contact-us"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div className="bg-gray">
        <main >{children}</main>
        <Contactus  />
        <Footer />
        </div>
        
      </>
    )
  }
  
  export default Layout