import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Header.css"

function Header() {

    return (<div className="div1">

        <h1>Travel</h1> <h1> Destination</h1>
        <nav className="header-nav">
            <Link to='/' >Home</Link>
            &nbsp;&nbsp;
            <Link to='/city/:id'>Content</Link>
        </nav>
        {/* <Footer /> */}

    </div>);
}

export default Header;