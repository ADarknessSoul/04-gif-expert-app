import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category, newLimit) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async() => {
        const newImages = await getGifs( category, newLimit );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {

        // getGifs(category, newLimit)
        // .then( newImages => setImages(newImages));
        // setIsLoading(false);

        getImages();

    }, [newLimit]);



    return {
        images,
        isLoading
    }

}
