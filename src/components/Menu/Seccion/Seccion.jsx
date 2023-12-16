import './Seccion.css';

export function Seccion({ title, children, img }) {
  return (
    <section>
      <div className="encabezado">
        <div>
          <h2>{title}</h2>
          <img
            src={img}
            alt={title}
          />
        </div>
      </div>
      <div className="children">{children}</div>
    </section>
  );
}
