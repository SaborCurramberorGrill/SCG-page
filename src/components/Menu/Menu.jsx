import './Menu.css';
import { Card } from '../Card/Card';

export function Menu() {
  return (
    <div>
      <h1>Menú</h1>
      <div className="container-menu">
        <Card
          to={'/Gourmet'}
          title="Gourmet"
          src={'Portadas secciones/Pastas.webp'}
        />
        <Card
          to={'/Comidas-Rapidas'}
          title="Comidas Rapidas"
          src={'Portadas secciones/Hamburguesas.webp'}
        />
        <Card
          to={'/Bebidas'}
          title="Bebidas"
          src={'Portadas secciones/bebidas.webp'}
        />
        <Card
          to={'/Adicionales'}
          title="Adicionales"
          src={'Portadas secciones/Adiciones.webp'}
        />
      </div>
    </div>
  );
}
