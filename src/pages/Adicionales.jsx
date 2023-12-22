import { Seccion } from '../components/Menu/Seccion/Seccion';
import { Producto } from '../components/Menu/Seccion/Producto';
import { useState, useEffect } from 'react';

export function Adicionales() {
  const [adicionales, setAdicionales] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/adiciones.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setAdicionales(data.adicionales);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Adicionales"
      img={'/Portadas secciones/Adiciones.webp'}
    >
      {adicionales.map((adicional) => (
        <Producto
          key={adicional.id}
          title={adicional.title}
          desc={adicional.desc}
          price={adicional.price}
        />
      ))}
    </Seccion>
  );
}
