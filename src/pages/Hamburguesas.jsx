import React, { useState, useEffect } from 'react';
import { Producto } from '../components/Menu/Seccion/Producto';
import { Seccion } from '../components/Menu/Seccion/Seccion';

export function Hamburguesas() {
  const [hamburguesas, setHamburguesas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/hamburguesas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setHamburguesas(data.hamburguesas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Hamburguesas"
      img={'/Portadas secciones/Hamburguesas.webp'}
    >
      {hamburguesas.map((hamburguesa) => (
        <Producto
          key={hamburguesa.id}
          title={hamburguesa.title}
          desc={hamburguesa.desc}
          price={hamburguesa.price}
        />
      ))}
    </Seccion>
  );
}
