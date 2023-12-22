import { Seccion } from '../components/Menu/Seccion/Seccion';
import { Producto } from '../components/Menu/Seccion/Producto';
import { useState, useEffect } from 'react';

export function Parrillas() {
  const [parrillas, setParrillas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/asados.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setParrillas(data.parrillas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Parrillas"
      img={'/Portadas secciones/Parrillas.webp'}
    >
      {parrillas.map((parrilla) => (
        <Producto
          key={parrilla.id}
          title={parrilla.title}
          desc={parrilla.desc}
          price={parrilla.price}
        />
      ))}
    </Seccion>
  );
}
