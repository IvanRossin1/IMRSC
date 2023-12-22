const getData= async ()=>{
    try{
        const api_key='t4zbGzJBO1FWZczQRP5X9DRtpSq9eC5p';
        const data=await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const dataObject=await data.json();
        return dataObject;
    }catch (error){
        console.log(error);
    }
}
const data= await getData();
const url=data.data.images.original.url;
console.log(url);
export function GifRandom(){
    return(
        <>
            <img id="gif" src={url} />
        </>
    )
}

