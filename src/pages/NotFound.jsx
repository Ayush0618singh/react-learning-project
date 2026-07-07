import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container mt-5 text-center">
            <div className="card shadow p-5">
                <h1 className="display-3 text-danger">
                    404
                </h1>

                <h2>Page Not Found</h2>
                <p>
                    Sorry! The page you are looking for does not exist.
                </p>

                <Link
                    to="/"
                    classname="btn btn-primary mt-3"
                >
                    Go To Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;