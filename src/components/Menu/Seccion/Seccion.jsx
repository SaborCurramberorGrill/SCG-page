import './Seccion.css';

export function Seccion({ title, children, img, extra }) {
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
        <p>{extra}</p>
      </div>
      <div className="children">{children}</div>
    </section>
  );
}
