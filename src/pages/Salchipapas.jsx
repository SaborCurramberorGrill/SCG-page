import React, { useState, useEffect } from 'react';
import { Producto } from '../components/Menu/Seccion/Producto';
import { Seccion } from '../components/Menu/Seccion/Seccion';

export function Salchipapas() {
  const [salchipapas, setSalchipapas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/salchipapas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setSalchipapas(data.salchipapas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Salchipapas"
      img={'/Portadas secciones/Salchipapas.webp'}
    >
      {salchipapas.map((salchipapa) => (
        <Producto
          key={salchipapa.id}
          title={salchipapa.title}
          desc={salchipapa.desc}
          price={salchipapa.price}
        />
      ))}
    </Seccion>
  );
}
