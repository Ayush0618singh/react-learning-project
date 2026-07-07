import useCounter from "../hooks/useCounter";
function Counter()
{
    const {
        count,
        increment,
        decrement,
        reset

    } =useCounter();

    return(
        <div className="container mt-5">
            <div className="card shadow p-5 text-center">

                <h2 className="mb-4">React Counter App</h2>

                <h1 className="display-3">{count}</h1>

                <div className="mt-4">
                
                    <button
                        className="btn btn-success me-2"
                        onClick={increment}
                    
                    >
                        Increase

                    </button>
                    
                    <button 
                        className="btn btn-danger me-2"
                        onClick={decrement}
                        
                    >
                        Decrease

                    </button>
                        
                    <button 
                        className="btn btn-warning"
                        onClick={reset}
                        
                    >
                        Reset

                    </button>

                </div>

            </div>

        </div>
    );
}

export default Counter;

                