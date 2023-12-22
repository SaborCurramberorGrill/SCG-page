import React, { useState, useEffect } from 'react';
import { Producto } from '../components/Menu/Seccion/Producto';
import { Seccion } from '../components/Menu/Seccion/Seccion';

export function Entradas() {
  const [entradas, setEntradas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/entradas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setEntradas(data.entradas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Seccion
      title="Entradas"
      img={'/Portadas secciones/Entradas.webp'}
    >
      {entradas.map((entrada) => (
        <Producto
          key={entrada.id}
          title={entrada.title}
          desc={entrada.desc}
          price={entrada.price}
        />
      ))}
    </Seccion>
  );
}
