import { useNavigate } from "react-router-dom";

function Dashboard({ setIsLoggedIn }) {
     const navigate = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
        navigate("/login");
    }

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 text-center">
                <h2>Welcome Ayush 🎉</h2>
                <p>You re successfully logged in.</p>

                <button
                    className="btn btn-danger"
                    onClick={handleLogout}
                >
                    Logout

                </button>
            </div>
        </div>
    );
}

export default Dashboard;