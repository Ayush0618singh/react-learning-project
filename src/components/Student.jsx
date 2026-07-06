function Student({name, course, tech, children}) 
{
    return(
        <div className="card shadow p-4 mb-4">

            <div className="card-body">

                <h2 className="card-title">
                    {name}

                </h2>

             <p className="card-text">
                <strong>Course :</strong> {course}
             </p>
            
             <p className="card-text"> 
                <strong>Technology :</strong> {tech}
             </p>

             <hr/>

             {children}
           
            </div>
           
        </div>
    );
}

export default Student;