import './Card.css';
import { Link } from 'react-router-dom';

export function Card({ title, src, to }) {
  const toWithPrefix = `/SCG-page${to}`;

  return (
    <Link
      to={toWithPrefix}
      className="card"
    >
      <h3 id="title-card">{title}</h3>
      <img
        src={src}
        alt=""
      />
    </Link>
  );
}
