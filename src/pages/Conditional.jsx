import { useState} from "react";

function Conditional() {
    const[isLogin, setIsLogin] = useState(false);

    return (
        <div className="container mt-5">
            <div className="card shadow p-5 text-center">
                <h2>Conditional Rendering</h2>

                {
                    isLogin ? (
                    
                    <h3 className="text-success">Welcome Ayush 😊</h3>

                ) : (

                        <h3 className="text-danger">Please Login</h3>
                    )

                }
                
                <button 
                    className={isLogin ? "btn btn-primary mt-3" : "btn btn-success mt-3"}
                    onClick={() => setIsLogin(!isLogin)}

                >
                    {isLogin ? "Logout" : "Login"}

                </button>

            </div>

        </div>
    );
}

export default Conditional;