import { useState } from "react"; // alterar estado... rederiza todo o componente
export default function MeuContador() {
  const [contador, serContador] = useState(0);

  function aumentar() {
    serContador(contador + 1);
  }
  function diminuir() {
    serContador(contador - 1);
  }

  if(contador > 5){
    return (
      <div>
        <h2>O numero {contador} é muito alto!</h2>
        <button onClick={aumentar}>aumentar</button>
        <button onClick={diminuir}>diminuir</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={aumentar}>aumentar</button>
    </div>
  );
}
