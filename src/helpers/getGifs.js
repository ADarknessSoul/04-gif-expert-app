export const getGifs = async(category, newLimit=3) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=UzO6CG640VTIloJQWmVM0pCrwFmZeIJS&q=${category}&limit=${newLimit}`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
  
    return gifs;
  }