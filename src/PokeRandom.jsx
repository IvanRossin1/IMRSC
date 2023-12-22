const getData= async ()=>{
    try{
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
        const data2 = await data.json()
        return data2;
    }catch (error){
        console.log(error);
    }
}
const pokemon= await getData();

const img=pokemon.sprites.front_default;
const nombre=pokemon.species.name;
const hp=pokemon.stats[0].base_stat;
const tipo=pokemon.types[0].type.name;
const altura=pokemon.height;
const ancho=pokemon.weight;
const habilidad=pokemon.abilities;
const id=pokemon.id;

export function idRandom(id){
    return Math.random()
}
var random=idRandom(id);
console.log(random);
export function PokeRandom(){
    return(
        <>
        <div className="contenedor1">
            <div className="contenedor2">
                <div className="titulo">{nombre}</div>
                <div className="vida">{hp} HP</div>
            </div>
            <div className="imagen">
                <img id="gif" src={img} />
            </div>
            <div className="contenedor3">
                <div className="tipo">Type: {tipo}</div>
                <div className="altura">Height: {altura}</div>
                <div className="ancho">Widht: {ancho}</div>
            </div>
            <div className="contenedor4">
                <div className="icono">
                    <img src={"normal.png"}/>
                </div>
                <div className="contenido">
                    <div className="titulo2">Ability: </div>
                    <div className="efecto">
                        {habilidad.map((hab,index)=>{
                            return(
                                <p index={index}>
                                {hab.ability.name}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>           
        </>
    )
}


