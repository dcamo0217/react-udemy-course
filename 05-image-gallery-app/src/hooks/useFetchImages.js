import { useCallback, useEffect, useState } from "react";

export const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);

    const peticion = useCallback(async () => {
        const key = "client_id=g2WugAasnv0bp-EKYbeClHuqI96xvYzywkGpYMbTdx0";
        let route = `https://api.unsplash.com/photos/?${key}`;

        if (input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
                input
            )}&${key}`;
        }

        setLoading(true);

        const resp = await fetch(route);
        const data = await resp.json();
        if (data.results) {
            setImages(data.results);
        } else {
            setImages(data);
        }
        setLoading(false);
        // console.log(data);
    }, [input]);
    useEffect(() => {
        peticion();
    }, [peticion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;

        setInput(text);
    };

    return [images, loading, handleSubmit];
};
