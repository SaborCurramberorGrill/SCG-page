export function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="logo.webp"
          className="logo"
          alt="logo"
        />
        <div>
          <p className="pc">Lunes a Domingo</p>
          <p className="pc">4pm a 11pm</p>
        </div>
      </div>

      <div className="nav">
        <a
          href="#"
          className="nav-link"
        >
          Inicio
        </a>

        <a
          href="#"
          className="nav-link"
        >
          Contacto
        </a>

        <a
          href="#"
          className="nav-link"
        >
          <img
            className="icono"
            src="facebook.png"
            alt=""
          />
        </a>

        <a
          href="https://www.instagram.com/saborcurramberogrill/"
          className="nav-link"
        >
          <img
            className="icono"
            src="instagram.png"
            alt=""
          />
          <p>@saborcurramberogrill</p>
        </a>
      </div>
      <div></div>
    </header>
  );
}
