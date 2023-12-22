const getData= async ()=>{
    try{
        let destino="tortuguitas"
        const api_key='1921d672f0msh158bf6c5a88f0c3p1ff286jsnda79e05415c5';
        const data = await fetch(`https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${destino}&language=es`);
        const dataObject=await data.json();
        return dataObject;
    }catch (error){
        console.log(error);
    }
}
const data2= await getData();
console.log(data[0]);
export function Api(){
    return(
        <>
        {data}
        </>
    )
}

