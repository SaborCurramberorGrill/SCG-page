import { Seccion } from '../components/Menu/Seccion/Seccion';
import { Producto } from '../components/Menu/Seccion/Producto';
import { useState, useEffect } from 'react';

export function Asados() {
  const [asados, setAsados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/asados.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setAsados(data.asados);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Asados"
      img={'/Portadas secciones/Asados.webp'}
    >
      {asados.map((asado) => (
        <Producto
          key={asado.id}
          title={asado.title}
          desc={asado.desc}
          price={asado.price}
        />
      ))}
    </Seccion>
  );
}
