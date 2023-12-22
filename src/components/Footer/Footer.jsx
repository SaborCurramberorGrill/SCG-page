import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer">
          <div className="footer__info">
            <h3>Información</h3>
            <p>
              <a
                href="https://maps.app.goo.gl/now7FipK8bg2Db8f9"
                target="_blank"
                rel="noreferrer"
              >
                Calle 65b # 21b esquina, Barrio San Felipe, Barranquilla
              </a>
            </p>
            <p>
              <a
                href="https://wa.link/rb5j56"
                target="_blank"
                rel="noreferrer"
              >
                315 658 2916
              </a>
            </p>
          </div>
          <div className="footer__info">
            <h3>Horarios</h3>
            <p>Lunes a Domingo</p>
            <p>4pm a 11pm</p>
          </div>
          <div className="footer__info">
            <h3>Redes Sociales</h3>
            <a
              href="https://www.facebook.com/saborcurramberogrill"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/SCG-page/facebook.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/saborcurramberogrill/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/SCG-page/instagram.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <p>© 2023 Sabor Currambero Grill. Todos los derechos reservados.</p>
        <p>
          Desarrollado Por
          <a href="https://www.linkedin.com/in/dariojgl"> Dario Gutierrez</a>
        </p>
      </div>
    </footer>
  );
}
