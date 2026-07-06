import { useState } from "react";

function Theme() {

    const[dark, setDark] = useState(false);

    return (

        <div className="container mt-5 p-5 text-center"
        style={{
            backgroundColor: dark ? "#212529" : "#ffffff",
            color: dark ? "#ffffff" : "#000000",
            borderRadius: "10px",
            border: "1px solid gray"
        }

        }
        >
            <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

            <button 
                className="btn btn-primary mt-3"
                onClick={() => setDark(!dark)}

            >
                {dark ? "Light Theme" : "Dark Theme"}

            </button>
        </div>
    );
}

export default Theme;