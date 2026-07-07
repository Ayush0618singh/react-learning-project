import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                My Website
                </Link>

                <div className="navbar-nav ms-auto">
                    
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/service">Service</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>

                    <Link className="nav-link" to="/counter">Counter</Link>
                    <Link className="nav-link" to="/input">Input</Link>
                    <Link className="nav-link" to="/form">Form</Link>
                    <Link className="nav-link" to="/conditional">Conditional</Link>
                    <Link className="nav-link" to="/theme">Theme</Link>
                    <Link className="nav-link" to="/students">Students</Link>
                    <Link className="nav-link" to="/filter">Filter</Link>
                    <Link className="nav-link" to="/search">Search</Link>
                    <Link className="nav-link" to="/effect">useEffect</Link>
                    <Link className="nav-link" to="/users">Users</Link>
                    <Link className="nav-link" to="/users-axios">Axios</Link>
                      <Link className="nav-link" to="/crud">CRUD</Link>


                </div>
            </div>
        </nav>
    );
}

export default Navbar;