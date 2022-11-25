import React from "react";
import useMemorize from "../hooks/useMemorize";
import Btn from "./Btn";
import Dato from "./Dato";

const Memorize = () => {
    
    const [counter, pesadoMemo, add, hide] = useMemorize();
    return (
        <>
            <h1>
                Memorizes: <Dato value={counter} />
            </h1>
            <hr />
            <p>{pesadoMemo}</p>
            <Btn add={add}/>
            <button onClick={hide}>Ver/Quitar</button>
        </>
    );
};

export default Memorize;
