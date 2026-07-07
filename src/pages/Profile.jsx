import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const user = useContext(UserContext);
    return (
        <div className="container m-5">
            <div className="card shadow p-4">
                <h2>Profile</h2>
                <h4>Name : {user.name}</h4>
                <h4>College : {user.college}</h4>
                <h4>Course : {user.course}</h4>
                <h4>Tech : {user.tech}</h4>
                <h4>City : {user.city}</h4>
                <h4>Email : {user.email}</h4>
                <h4>Mobile : {user.mobile}</h4>
            </div>
        </div>
    );
}

export default Profile;