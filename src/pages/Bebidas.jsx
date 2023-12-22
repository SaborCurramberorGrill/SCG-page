import { Seccion } from '../components/Menu/Seccion/Seccion';
import { Producto } from '../components/Menu/Seccion/Producto';
import { useState, useEffect } from 'react';

export function Bebidas() {
  const [limonadas, setLimonadas] = useState([]);
  const [cocteles, setCocteles] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/bebidas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setLimonadas(data.limonadas);
        setCocteles(data.cocteles);
        console.log(data.cocteles);
        setBebidas(data.bebidas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Bebidas"
      img={'/Portadas secciones/bebidas.webp'}
    >
      {limonadas.map((limonada) => (
        <Producto
          key={limonada.id}
          title={limonada.title}
          price={limonada.price}
        />
      ))}
      {cocteles.map((coctel) => (
        <Producto
          key={coctel.id}
          title={coctel.title}
          desc={coctel.ingredientes}
          price={coctel.price}
        />
      ))}
      {bebidas.map((bebida) => (
        <Producto
          key={bebida.id}
          title={bebida.title}
          price={bebida.price}
        />
      ))}
    </Seccion>
  );
}
