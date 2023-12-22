import React, { useEffect, useState } from 'react';

export function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_key = 'moviesdatabase.p.rapidapi.com';
        const response = await fetch(
          `https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&limit=10&list=most_pop_movies`,
          {
            headers: {
              'X-RapidAPI-Host': api_key,
              'X-RapidAPI-Key': '1921d672f0msh158bf6c5a88f0c3p1ff286jsnda79e05415c5',
            },
          }
        );
        const dataObject = await response.json();
        setPeliculas(dataObject.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const imagenes = peliculas.length > 0 ? (
    peliculas.map((pelicula, index) => (
		
		<div className="cont-prin">
			<div key={index} className='contenedor'>
        	<img src={pelicula.primaryImage.url} alt={`Imagen de la película ${index}`} />
        	<p className='medio'>{pelicula.titleText.text}</p>
      		</div>
		</div>
      
    ))
  ) : (
    <div>No hay imagenes disponibles</div>
  );

  return (
    <>
	
      <div>
        {imagenes}
      </div>
    </>
  );
}
