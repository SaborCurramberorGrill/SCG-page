export function Menu() {
  //entradas
  const [entradas, setEntradas] = useState([]);
  useEffect(() => {
    const cargarEntradas = async () => {
      try {
        const response = await fetch('Menu json/entradas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setEntradas(data.entradas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    cargarEntradas();
  }, []);

  //hamburguesas
  const [hamburguesas, setHamburguesas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Menu json/hamburguesas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setHamburguesas(data.hamburguesas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  //salchipapas
  const [salchipapas, setSalchipapas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Menu json/salchipapas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setSalchipapas(data.salchipapas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  //perros calientes
  const [perrosCalientes, setPerrosCalientes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Menu json/perrosCalientes.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setPerrosCalientes(data.perros_calientes);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  //desgranados
  const [desgranados, setDesgranados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Menu json/desgranados.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setDesgranados(data.desgranados);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  // Asados y Parrillas
  const [asados, setAsados] = useState([]);
  const [parrillas, setParrillas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Menu json/asados.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setAsados(data.asados);
        setParrillas(data.parrillas); // Asegúrate de que los datos para parrillas estén disponibles en tu JSON
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  //Pastas y Menu Infantil
  const [pastas, setPastas] = useState([]);
  const [menuInfantil, setMenuInfantil] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Menu json/pastas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setPastas(data.pastas);
        setMenuInfantil(data.menu_infantil);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  //bebidas
  const [limonadas, setLimonadas] = useState([]);
  const [cocteles, setCocteles] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Menu json/bebidas.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setLimonadas(data.limonadas);
        setCocteles(data.cocteles);
        console.log(data.cocteles);
        setBebidas(data.bebidas);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  //Adiciones
  const [adiciones, setAdiciones] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Menu json/adiciones.json');

        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();
        setAdiciones(data.adicionales);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div>
        <Seccion
          title="Entradas"
          img={'Portadas secciones/Entradas.webp'}
        >
          {entradas.map((entrada) => (
            <Producto
              key={entrada.id}
              title={entrada.title}
              desc={entrada.desc}
              price={entrada.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Hamburguesas"
          img={'Portadas secciones/Hamburguesas.webp'}
          extra={'Puedes Agregar papas por $4000'}
        >
          {hamburguesas.map((hamburguesa) => (
            <Producto
              key={hamburguesa.id}
              title={hamburguesa.title}
              desc={hamburguesa.desc}
              price={hamburguesa.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Salchipapas"
          img={'Portadas secciones/Salchipapas.webp'}
        >
          {salchipapas.map((salchipapa) => (
            <Producto
              key={salchipapa.id}
              title={salchipapa.title}
              desc={salchipapa.desc}
              price={salchipapa.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Perros Calientes"
          img={'Portadas secciones/Perros-Calientes.webp'}
        >
          {perrosCalientes.map((perroCaliente) => (
            <Producto
              key={perroCaliente.id}
              title={perroCaliente.title}
              desc={perroCaliente.desc}
              price={perroCaliente.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Desgranados"
          img={'Portadas secciones/Desgranados.webp'}
        >
          {desgranados.map((desgranado) => (
            <Producto
              key={desgranado.id}
              title={desgranado.title}
              desc={desgranado.desc}
              price={desgranado.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Asados"
          img={'Portadas secciones/Asados.webp'}
        >
          {asados.map((asado) => (
            <Producto
              key={asado.id}
              title={asado.title}
              desc={asado.desc}
              price={asado.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Parrillas"
          img={'Portadas secciones/Parrillas.webp'}
        >
          {parrillas.map((parrilla) => (
            <Producto
              key={parrilla.id}
              title={parrilla.title}
              desc={parrilla.desc}
              price={parrilla.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Pastas"
          img={'Portadas secciones/Pastas.webp'}
        >
          {pastas.map((pasta) => (
            <Producto
              key={pasta.id}
              title={pasta.title}
              desc={pasta.desc}
              price={pasta.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Menú Infantil"
          img={'Portadas secciones/Menu-infantil.webp'}
        >
          {menuInfantil.map((menu) => (
            <Producto
              key={menu.id}
              title={menu.title}
              desc={menu.desc}
              price={menu.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Bebidas"
          img={'Portadas secciones/bebidas.webp'}
        >
          {limonadas.map((limonada) => (
            <Producto
              key={limonada.id}
              title={limonada.title}
              price={limonada.price}
            />
          ))}
          {cocteles.map((coctel) => (
            <Producto
              key={coctel.id}
              title={coctel.title}
              desc={coctel.ingredientes}
              price={coctel.price}
            />
          ))}
          {bebidas.map((bebida) => (
            <Producto
              key={bebida.id}
              title={bebida.title}
              price={bebida.price}
            />
          ))}
        </Seccion>

        <Seccion
          title="Adicionales"
          img={'Portadas secciones/Adiciones.webp'}
        >
          {adiciones.map((adicione) => (
            <Producto
              key={adicione.id}
              title={adicione.title}
              price={adicione.price}
            />
          ))}
        </Seccion>
      </div>
    </main>
  );
}
