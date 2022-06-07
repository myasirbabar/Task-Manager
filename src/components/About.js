import { Link } from "react-router-dom"
import Header from "./Header"

const About = () => {
  return (
    <div>
        <Header />
        <br />
        <br />
        <h2>Developed by Muhammad Yasir. Github id : @myasirbabar</h2>
        <br />
        <br />
        <hr />
        <h4 ><Link to="/">Go Back</Link></h4>
    </div>
  )
}

export default About