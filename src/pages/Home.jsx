import Student from "../components/Student";
function Home(props) {
  return (
  
    <div className=" container mt-5">
      <h1>Students Information</h1>

      <Student
        name="Ayush"
        course="MCA"
        tech="MERN Stack"
       >

        <button className="btn btn-success">
          MERN Developer
        </button>

      </Student>


      <Student
        name="Gopal"
        course="BCA"
        tech="Python"
       >
        <button className="btn btn-primary">
          Python Developer

        </button>


      </Student>


      <Student
        name="Ankit"
        course="B.Tech"
        tech="Java"
       >
        <button className="btn btn-warning">
          Java Full Stack Developer

        </button>

      </Student>

    </div>
    
  );
}

export default Home;