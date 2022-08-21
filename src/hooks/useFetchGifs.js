import { useState, useMemo } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category, newLimit) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useMemo(() => {

        getGifs(category, newLimit)
        .then( newImages => setImages(newImages));
        setIsLoading(false);

    }, [newLimit])



    return {
        images,
        isLoading
    }

}
