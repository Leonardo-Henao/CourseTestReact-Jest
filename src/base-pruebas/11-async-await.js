export const getImagen = async () => {
  try {
    // const apiKey = 'FtHW6UVj5ct6UQt9I6r1wSz5CHg2mxS2';

    // Api key para generar error
    const apiKey = 'null';

    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append( img );
    return url;
  } catch (error) {
    // manejo del error
    // console.error(error)
    return 'No se encontró imagen';
  }
};
