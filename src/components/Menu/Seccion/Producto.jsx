import './Producto.css';

export function Producto({ title, desc, price }) {
  return (
    <article className="producto">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p className="precio">${price}</p>
    </article>
  );
}
