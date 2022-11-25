import React, { useState, useLayoutEffect } from "react";
import { useEffect } from "react";

const LayoutEffect = () => {
    const [data, setData] = useState([]);

    const [length, setLenght] =  useState(0);

    const newData = [
        {
            name: "Diego",
            email: "diegocamo@gmail.com",
        },
    ];

    useEffect(()=>{
        setTimeout(()=>{
            setData(newData)
        }, 5000)
    }, [newData])

    useLayoutEffect(()=>{
        const tam = data.length
       setLenght(tam)
    }, [])

    return <>
        <h1>useLayoutEffect</h1>
        <hr />
        <p>Valores {length}</p>
    </>;
};

export default LayoutEffect;
