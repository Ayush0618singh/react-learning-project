import { useState } from "react";

function FormDemo() {

    const[name,  setName] = useState("");
    const[email, setEmail] = useState("");
    const[college, setCollegeName] = useState("");
    const[course, setCourse] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        alert(`Name : ${name}\nEmail : ${email}\nCollege Name : ${college}\nCourse : ${course}`);
    }

    return(

        <div className="container mt-5">
            <div className="card shadow p-5">
                <h2 className="mb-4">Registration Form</h2>
                
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="college"
                        className="form-control mb-3"
                        placeholder="Enter College Name"
                        onChange={(e) => setCollegeName(e.target.value)}
                    />

                    <input
                        type="course"
                        className="form-control mb-3"
                        placeholder="Enter Course"
                        onChange={(e) => setCourse(e.target.value)}
                    />

                    <button className="btn btn-primary">Submit</button>

                </form>
            </div>
        </div>
    );
}

export default FormDemo;