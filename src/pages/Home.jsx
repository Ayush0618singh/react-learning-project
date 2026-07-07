import Student from "../components/Student";
function Home(props) {
  return (
  
    <div className=" container mt-5">

    {/* Welcome Section */}
    <div className="text-center mb-5">
    <h1>Welcome to My React Learning Project 🚀</h1>

    <p className="lead mt-3">
        This project demonstrates the core concepts of React.js including Routing,
        Hooks, CRUD Operations, API Integration, Authentication and Context API.
    </p>

    <button className="btn btn-primary">
        Explore Students
    </button>
</div>
      <h2 className="mb-4">Students Information</h2>

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