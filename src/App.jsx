import './App.css';
import { Flot } from './components/Flot/Flot';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Flot
        href="https://wa.link/rb5j56"
        src="whatsapp.png"
      />
    </>
  );
}

export default App;
