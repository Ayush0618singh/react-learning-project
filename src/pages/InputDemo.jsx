import { useState } from "react";

function InputDemo() {
    const[name, setName] = useState("");
    const[email, setEmail]= useState("");
    const[college, setCollegeName]= useState("");

    return(
        <div className="container mt-5">
            <div className="card shadow p-5">
                <h2 className="mb-4">React Input Demo</h2>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    className="form-control mt-3"
                    placeholder="Enter Your E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="college"
                    className="form-control mt-3"
                    placeholder="Enter Your College Name"
                    onChange={(e) => setCollegeName(e.target.value)}
                />

                <h4 className="mt-3">Name : {name}</h4>
                <h4 className="mt-3">Email : {email}</h4>
                <h4 className="mt-3">College Name : {college}</h4>

            </div>

        </div>
    );
}

export default InputDemo;