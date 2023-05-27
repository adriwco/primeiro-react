import MeuContador from "./components/myComponents";
import ListasReact from "./components/listasReact";
import BuscarDados from "./components/budcarDados";

function App() {
  return (
    <div>
      <h1>Olá, Mundo! React *-*</h1>
      <MeuContador />

      <h2>Listas no React</h2>
      <ul>
        <ListasReact />
      </ul>

      <h2>Buscando dados com Fetch</h2>
      <ul>
        <BuscarDados />
      </ul>
    </div>
  );
}

export default App;
