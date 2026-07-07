import { useState } from "react";

function SearchStudents() {
    const[search, setSearch] = useState("");
    const students =[

        {id:1,name:"Ayush",course:"MCA"},
        {id:2,name:"Rahul",course:"B.Tech"},
        {id:3,name:"Gopal",course:"BCA"},
        {id:4,name:"Aman",course:"MCA"},
        {id:5,name:"Rohit",course:"BCA"}
    ];

    const filterStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Search Students</h2>

            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search Student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="row">
                {
                    filterStudents.map((student) => (
                        <div className="col-md-4 mb-3" key={student.id}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4>{student.name}</h4>
                                    <p>{student.course}</p>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SearchStudents;