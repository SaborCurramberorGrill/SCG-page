import React, { useState, useEffect } from 'react';
import { Producto } from '../components/Menu/Seccion/Producto';
import { Seccion } from '../components/Menu/Seccion/Seccion';

export function PerrosCalientes() {
  const [perrosCalientes, setPerrosCalientes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/SCG-page/Menu json/perrosCalientes.json'
        );

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setPerrosCalientes(data.perros_calientes);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Perros Calientes"
      img={'/Portadas secciones/Perros-Calientes.webp'}
    >
      {perrosCalientes.map((perroCaliente) => (
        <Producto
          key={perroCaliente.id}
          title={perroCaliente.title}
          desc={perroCaliente.desc}
          price={perroCaliente.price}
        />
      ))}
    </Seccion>
  );
}
