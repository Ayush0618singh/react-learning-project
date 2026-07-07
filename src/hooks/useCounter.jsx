import { useState } from "react";
function useCounter() {
    const[count, setCount] = useState(0);

    function increment() {
        setCount((prevCount) => prevCount + 1);
    }
    function decrement() {
        setCount((prevCount) => prevCount -1);
    }
    function reset() {
        setCount(0);
    }
    return {
        count,
        increment,
        decrement,
        reset
    };
}

export default useCounter;