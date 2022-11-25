import { useState, useEffect } from "react";

const State = () => {
    const [state, setState] = useState(0);

    useEffect(()=>{
        console.log(state)
    }, [])

    const handleClick = () => {
        setState(state + 1);
    };

    return (
        <div>
            <h1 className="container text-center">useEffect</h1>
            <hr />
            Cuenta: {state}
            <button onClick={handleClick}>+1</button>
        </div>
    );
};

export default State;
