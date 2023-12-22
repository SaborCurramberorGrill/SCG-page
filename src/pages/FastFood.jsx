import { Card } from '../components/Card/Card';

export function FastFood() {
  return (
    <div>
      <h1>Comidas Rapidas</h1>

      <div className="container-menu">
        <Card
          to={'/Comidas-Rapidas/Hamburguesas'}
          title="Hamburguesas"
          src={'Portadas secciones/Hamburguesas.webp'}
        />

        <Card
          to={'/Comidas-Rapidas/Salchipapas'}
          title="Salchipapas"
          src={'Portadas secciones/Salchipapas.webp'}
        />

        <Card
          to={'/Comidas-Rapidas/Perros-Calientes'}
          title="Perros Calientes"
          src={'Portadas secciones/Perros-Calientes.webp'}
        />

        <Card
          to={'/Comidas-Rapidas/Desgranados'}
          title="Desgranados"
          src={'Portadas secciones/Desgranados.webp'}
        />
      </div>
    </div>
  );
}
