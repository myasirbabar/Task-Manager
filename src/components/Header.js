import "./css/Header.css";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ currentStatus, onClickAdd }) => {

  /*
    This Header has three components
    1. Link To Main
    2. Welcome Text
    3. Button to add data

  */
  let Pname = useLocation()
  return (
 
    <nav className="navbar sticky-top navbar-dark" id="dboard">

      <div className="container-fluid">

        <a href="https://github.com/myasirbabar" className="navbar-brand"><b>Task Manager</b></a>

        <h4 style={{ color: 'white' }}>Welcome</h4>

        {Pname.pathname === '/' ? <Button onClick={onClickAdd} text = {!currentStatus ? 'Add Task' : 'Close'} /> : ""}

      </div>
    </nav>
  );
}

export default Header;
