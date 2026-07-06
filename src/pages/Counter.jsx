import { useState } from "react";
function Counter()
{
    const [count, setCount] = useState(0);

    return(
        <div className="container mt-5">
            <div className="card shadow p-5 text-center">

                <h2 className="mb-4">React Counter App</h2>

                <h1 className="display-3">{count}</h1>

                <div className="mt-4">
                
                    <button
                        className="btn btn-success me-2"
                        onClick={() => setCount(count + 1)}
                    
                    >
                        Increase

                    </button>
                    
                    <button 
                        className="btn btn-danger me-2"
                        onClick={() => setCount(count - 1)}
                        
                    >
                        Decrease

                    </button>
                        
                    <button 
                        className="btn btn-warning"
                        onClick={() => setCount(0)}
                        
                    >
                        Reset

                    </button>

                </div>

            </div>

        </div>
    );
}

export default Counter;

                