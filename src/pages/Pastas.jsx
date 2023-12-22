import { Seccion } from '../components/Menu/Seccion/Seccion';
import { Producto } from '../components/Menu/Seccion/Producto';
import { useState, useEffect } from 'react';

export function Pastas() {
  const [pastas, setPastas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/pastas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setPastas(data.pastas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Pastas"
      img={'/Portadas secciones/Pastas.webp'}
    >
      {pastas.map((pasta) => (
        <Producto
          key={pasta.id}
          title={pasta.title}
          desc={pasta.desc}
          price={pasta.price}
        />
      ))}
    </Seccion>
  );
}
