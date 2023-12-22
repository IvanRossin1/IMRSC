import React, { useState } from 'react';
// import './FormularioCV.css';

const FormularioCV = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    telefono: '',
    descripcion: '',
    dni: '',
    imagenPokemon: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtener los últimos 2 números del DNI
    const dniNumeros = datos.dni.slice(-2);
    const url = `https://pokeapi.co/api/v2/pokemon/${dniNumeros}`;
    const response = await fetch(url);
    const data = await response.json();

    setDatos({
      ...datos,
      imagenPokemon: data.sprites.front_default,
    });
  };

  const mostrarCV = datos.nombre && datos.apellido && datos.fechaNacimiento && datos.telefono && datos.descripcion;

  return (
    <div className="formulario-cv">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={datos.nombre} onChange={handleChange} required />
        </label>
        <label>
          Apellido:
          <input type="text" name="apellido" value={datos.apellido} onChange={handleChange} required />
        </label>
        <label>
          Fecha de Nacimiento:
          <input type="text" name="fechaNacimiento" value={datos.fechaNacimiento} onChange={handleChange} required />
        </label>
        <label>
          Tel.:
          <input type="tel" name="telefono" value={datos.telefono} onChange={handleChange} required />
        </label>
        <label>
          Descripción:
          <textarea name="descripcion" value={datos.descripcion} onChange={handleChange} required />
        </label>
        <button type="submit">Generar CV</button>
      </form>

      {mostrarCV && (
        <div className="cv">
          <h2>CV Generado</h2>
          <img src={datos.imagenPokemon} alt="Imagen del Pokémon" />
          <p>Nombre: {datos.nombre}</p>
          <p>Apellido: {datos.apellido}</p>
          <p>Fecha de Nacimiento: {datos.fechaNacimiento}</p>
          <p>Tel.: {datos.telefono}</p>
          <p>Descripción: {datos.descripcion}</p>
        </div>
      )}
    </div>
  );
};

export default FormularioCV;
