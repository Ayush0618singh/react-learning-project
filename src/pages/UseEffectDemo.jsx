import { useEffect } from "react";

function UseEffectDemo() {
    useEffect(() => {
        alert("Welcome Ayush!");
    },
    []);

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2>useEffect Demo</h2>

                <p>Check what happens when this opens.</p>

            </div>
        </div>
    );
}

export default UseEffectDemo;