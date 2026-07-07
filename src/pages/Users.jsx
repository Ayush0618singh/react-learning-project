import { useEffect, useState } from "react";

function Users() {
    const[users, setUsers] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {

                setTimeout(() => {

                    setUsers(data);
                    setLoading(false);

                }, 2000);

                
            })

            .catch(() => {
                setError("Something Went Wrong!");
                setLoading(false);
            });
            
    }, []);
    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h2>Loading...</h2>

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
            <h2 className="mb-4">Users List</h2>

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

export default Users;