export async function App() {
  const api_key = 't4zbGzJBO1FWZczQRP5X9DRtpSq9eC5p';

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const data = await response.json();
    const gifData = data.data.images.original;
    console.log(gifData.url);
    const img = document.createElement('img');
    img.src = gifData.url;
    img.width = 200;
    document.body.appendChild(img);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }

  return null;
}
