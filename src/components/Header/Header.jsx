export function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="../../../public/logo.png"
          className="logo"
          alt="logo"
        />
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
            src="../../../public/facebook.png"
            alt=""
          />
        </a>

        <a
          href="https://www.instagram.com/saborcurramberogrill/"
          className="nav-link"
        >
          <img
            className="icono"
            src="../../../public/instagram.png"
            alt=""
          />
        </a>
      </div>
      <div></div>
    </header>
  );
}
