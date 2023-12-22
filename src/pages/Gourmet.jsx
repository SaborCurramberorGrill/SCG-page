import { Card } from '../components/Card/Card';

export function Gourmet() {
  return (
    <div>
      <h1>Gourmet</h1>
      <div className="container-menu">
        <Card
          to={'/Gourmet/Entradas'}
          title="Entradas"
          src={'Portadas secciones/Entradas.webp'}
        />
        <Card
          to={'/Gourmet/Asados'}
          title="Asados"
          src={'Portadas secciones/Asados.webp'}
        />

        <Card
          to={'/Gourmet/Parrillas'}
          title="Parrillas"
          src={'Portadas secciones/Parrillas.webp'}
        />

        <Card
          to={'/Gourmet/Pastas'}
          title="Pastas"
          src={'Portadas secciones/Pastas.webp'}
        />

        <Card
          to={'/Gourmet/Menu-Infantil'}
          title="Menu Infantil"
          src={'Portadas secciones/Menu-infantil.webp'}
        />
      </div>
    </div>
  );
}
