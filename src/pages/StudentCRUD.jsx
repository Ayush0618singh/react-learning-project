import { useState } from "react";
function StudentCRUD() {
    const[students, setStudents] = useState([
        {id: 1, name: "Ayush", course: "MCA"},
        {id: 2, name: "Gopal", course: "B.Tech"}
    ]);
    const[name, setName] = useState("");
    const[course, setCourse] = useState("");
    
    const[editId, setEditId] = useState(null);
    const[isEditing, setIsEditing] = useState(false);

    function addStudent() {
        if(name === "" || course === "") {
            alert("please fill all fields");
            return;
        }
        if (isEditing) {
            const updatedStudents = students.map((student) => {
                if(student.id === editId) {
                    return {
                        ...student,
                        name: name,
                        course: course
                    };
                }
                return student;
            });
            setStudents(updatedStudents);

            setIsEditing(false);
            setEditId(null);

        }else {
            const newStudent = {
                id: Date.now(),
                name: name,
                course: course
            };

            setStudents([...students, newStudent]);

        }
        
        setName("");
        setCourse("");
    }

    function deleteStudent(id) {
        const updatedStudents = students.filter (
            (student) => student.id !== id
        );
        setStudents(updatedStudents);
    }

    function editStudent(student) {
        setName(student.name);
        setCourse(student.course);

        setEditId(student.id);
        setIsEditing(true);
    }

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="mb-4">Student CRUD</h2>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />

                <button
                    className="btn btn-success"
                    onClick={addStudent}
                >
                    {isEditing ? "Update Student" : "Add Student"}
                </button>

            </div>

            <table className="table table-bordered table-striped mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Action</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        students.map((student) => (
                            <tr key={student.id}>
                                
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.course}</td>

                                <td>
                                    <button 
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => editStudent(student)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteStudent(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default StudentCRUD;
