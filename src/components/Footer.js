import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div style={{"paddingTop":20, "paddingBottom":50 ,"textAlign":'center'}}>
        <h3>Made by Yasir</h3>
        <h4><Link to="/about">About</Link> </h4>
    </div>
  )
}

export default Footer