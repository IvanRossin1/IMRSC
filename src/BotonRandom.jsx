import React, { useState, useEffect } from 'react';

function getRandomPokemonId() {
  return Math.floor(Math.random() * 898) + 1; 
}

function PokemonInfo({ pokemon }) {
  if (!pokemon) return null;

  const { name, id, stats, sprites, types, height, weight, abilities } = pokemon;

  return (
            <div className="contenedor1">
            <div className="contenedor2">
                <div className="titulo">{name}</div>
                <div className="vida">{stats[0].base_stat} HP</div>
            </div>
            <div className="imagen">
                <img id="gif" src={sprites.front_default} />
            </div>
            <div className="contenedor3">
                <div className="tipo">Type: {types.map((type) => type.type.name).join(', ')}</div>
                <div className="altura">Height: {height}</div>
                <div className="ancho">Widht: {weight}</div>
            </div>
            <div className="contenedor4">
                <div className="icono">
                    <img src={"normal.png"}/>
                </div>
                <div className="contenido">
                    <div className="titulo2">Ability: </div>
                    <div className="efecto">
                      <p>{abilities.map((ability) => ability.ability.name).join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>   
  );
}

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        Array(10)
          .fill()
          .map(() => {
            const randomId = getRandomPokemonId();
            return fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
              .then((response) => response.json())
              .catch((error) => {
                console.error(error);
                return null;
              });
          })
      );

      setPokemonData(data);
    };

    fetchData();
  }, []);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <h1>Random Pokémon</h1>
      <div className="pokemon-buttons">
        {pokemonData.map((pokemon, index) => (
          <button key={index} onClick={() => handlePokemonClick(pokemon)}>
            {pokemon ? pokemon.id : 'Loading...'}
          </button>
        ))}
      </div>
      <PokemonInfo pokemon={selectedPokemon} />
    </div>
  );
} 