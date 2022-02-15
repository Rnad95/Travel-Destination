import { Link } from "react-router-dom";

function Navbar() {
    return (

        <>
            <nav className="header-nav">
                <Link to='/' >Home</Link>
                &nbsp;&nbsp;
                <Link to='/city/:id'>Details</Link>
            </nav>

        </>
    );
}

export default Navbar;