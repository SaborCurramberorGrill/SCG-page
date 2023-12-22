import { Link } from 'react-router-dom';

export function P404() {
  return (
    <div>
      <h1>404</h1>
      <p>Esta página no existe</p>
      <Link to="/SCG-page/">Vuelve al menú</Link>
    </div>
  );
}
