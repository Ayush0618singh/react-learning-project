function Students() {
    const students = [
        {
            id:1,
            name:"Ayush",
            course:"MCA",
            tech:"MERN Stack",
            city:"Noida",
            age: 22
        },

        {
            id: 2,
            name:"Gopal",
            course:"BCA",
            tech:"Python",
            city:"Delhi",
            age: 24


        },

        {
            id: 3,
            name:"Ankit",
            course:"B.Tech",
            tech:"Java",
            city:"Banglore",
            age: 26
        }
    ];
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Students List</h1>

            <div className="row">
                {
                    students.map((student)=> (
                        <div className="col-md-4 mb-4" key={student.id}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h3>{student.name}</h3>

                                    <p>
                                        <strong>Course :</strong> {student.course}
                                    </p>

                                    <p>
                                        <strong>Technology :</strong> {student.tech}
                                    </p>

                                    <p>
                                        <strong>City :</strong> {student.city}
                                    </p>

                                    <p>
                                        <strong>Age :</strong> {student.age}
                                    </p>

                                    <button className="btn btn-success">View Profile</button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Students;