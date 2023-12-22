import { Seccion } from '../components/Menu/Seccion/Seccion';
import { Producto } from '../components/Menu/Seccion/Producto';
import { useState, useEffect } from 'react';

export function MenuInfantil() {
  const [menuInfantil, setMenuInfantil] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SCG-page/Menu json/pastas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setMenuInfantil(data.menu_infantil);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Seccion
      title="Menú Infantil"
      img={'/Portadas secciones/Menu-infantil.webp'}
    >
      {menuInfantil.map((menu) => (
        <Producto
          key={menu.id}
          title={menu.title}
          desc={menu.desc}
          price={menu.price}
        />
      ))}
    </Seccion>
  );
}
