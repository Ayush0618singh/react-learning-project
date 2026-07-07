import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    function handleLogin() {
        if(username === "Ayush" && password === "12345") {
            setIsLoggedIn(true);
            alert("Login Successful");
            navigate("/dashboard");

        }
        else {
            alert("Invalid username or Password");
        }
    }
    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="mb-4">Login</h2>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    className="from-control mb-3"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Login

                </button>
            </div>
        </div>
    );
}

export default Login;