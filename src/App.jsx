import './App.css';
import React from 'react';
import { Flot } from './components/Flot/Flot';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Entradas } from './pages/Entradas';
import { Hamburguesas } from './pages/Hamburguesas';
import { Salchipapas } from './pages/Salchipapas';
import { PerrosCalientes } from './pages/PerrosCalientes';
import { FastFood } from './pages/FastFood';
import { Gourmet } from './pages/Gourmet';
import { Desgranados } from './pages/Desgranados';
import { P404 } from './pages/P404';
import { Asados } from './pages/Asados';
import { Parrillas } from './pages/Parrillas';
import { Pastas } from './pages/Pastas';
import { MenuInfantil } from './pages/MenuInfantil';
import { Bebidas } from './pages/Bebidas';
import { Adicionales } from './pages/Adicionales';
import { Footer } from './components/Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Flot
        href="https://wa.link/rb5j56"
        src="/SCG-page/whatsapp.png"
      />
    </>
  );
}

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/SCG-page/"
          element={<Layout />}
        >
          <Route
            path="/SCG-page/"
            element={<Menu />}
          />
          <Route
            path="/SCG-page/Gourmet"
            element={<Gourmet />}
          />
          <Route
            path="/SCG-page/Gourmet/Entradas"
            element={<Entradas />}
          />
          <Route
            path="/SCG-page/Gourmet/Asados"
            element={<Asados />}
          />
          <Route
            path="/SCG-page/Gourmet/Parrillas"
            element={<Parrillas />}
          />
          <Route
            path="/SCG-page/Gourmet/Pastas"
            element={<Pastas />}
          />
          <Route
            path="/SCG-page/Gourmet/Menu-Infantil"
            element={<MenuInfantil />}
          />

          <Route
            path="/SCG-page/Comidas-Rapidas"
            element={<FastFood />}
          />
          <Route
            path="/SCG-page/Comidas-Rapidas/Hamburguesas"
            element={<Hamburguesas />}
          />
          <Route
            path="/SCG-page/Comidas-Rapidas/Salchipapas"
            element={<Salchipapas />}
          />
          <Route
            path="/SCG-page/Comidas-Rapidas/Perros-Calientes"
            element={<PerrosCalientes />}
          />
          <Route
            path="/SCG-page/Comidas-Rapidas/Desgranados"
            element={<Desgranados />}
          />
          <Route
            path="/SCG-page/Bebidas"
            element={<Bebidas />}
          />
          <Route
            path="/SCG-page/Adicionales"
            element={<Adicionales />}
          />
          <Route
            path="/SCG-page/*"
            element={<P404 />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
