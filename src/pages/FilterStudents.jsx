function FilterStudents() {
    const students = [

        {id:1,name:"Ayush",course:"MCA"},
        {id:2,name:"Gopal",course:"BCA"},
        {id:3,name:"Ankit",course:"B.Tech"},
        {id:4,name:"Aman",course:"MCA"}
           
    ];
    const mcaStudents = students.filter(
        (student) => student.course === "MCA"
    );

    return (
        <div className="container mt-5">
            <h2>MCA Students</h2>
            {
                mcaStudents.map((student)=> (
                <div key={student.id}
                    className="card p-3 mb-3 shadow"
                >

                    <h4>{student.name}</h4>

                    <p>{student.course}</p>
                </div>
                ))
            }
        </div>
    );
}

export default FilterStudents; 