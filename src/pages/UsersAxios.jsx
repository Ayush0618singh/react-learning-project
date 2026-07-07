import { useEffect, useState } from "react";
import axios from "axios";

function UsersAxios() {
    const[users, setUsers] = useState([]);
    const[loading, setLoading] =useState(true);
    const[error, setError] = useState("");

    useEffect(() => {
        axios .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch(() => {
            setError("Something Went Wrong!");
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary"></div>
                <p className="mt-3">Loading...</p>

            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5 text-center">
                <h2 className="text-danger">{error}</h2>

            </div>
        );
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Users Using Axios</h2>
            <div className="row">
                {
                    users.map((user) => (
                        <div className="col-md-4 mb-3" key={user.id}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4>{user.name}</h4>
                                    <p>{user.email}</p>
                                    <p>{user.phone}</p>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UsersAxios;