import { Seccion } from '../components/Menu/Seccion/Seccion';
import { Producto } from '../components/Menu/Seccion/Producto';
import { useState, useEffect } from 'react';

export function Desgranados() {
  const [desgranados, setDesgranados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/desgranados.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setDesgranados(data.desgranados);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Desgranados"
      img={'/Portadas secciones/Desgranados.webp'}
    >
      {desgranados.map((desgranado) => (
        <Producto
          key={desgranado.id}
          title={desgranado.title}
          desc={desgranado.desc}
          price={desgranado.price}
        />
      ))}
    </Seccion>
  );
}
