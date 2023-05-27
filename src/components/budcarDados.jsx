import { useEffect, useState } from "react";

export default function BuscarDados() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return await resultado.json();
    }
    buscarDados().then((res) => setTarefas(res));
  }, []); // array de depedencias, no caso é uma arra vazio... o useEffect é executado apenas quando o meu componente app é redezidado uma unica vez, ou seja, assim que abrir o aplicativo e entrar nessa tela vai carregar os componentes e no final executara o efeito colateral que busca os dados.

  return (
    <div>
      {tarefas.map((tarefa) => {
        return (
          <div key={tarefa.id}>
            <li>
              ( {tarefa.id} ) {tarefa.title}{" "}
              {tarefa.completed ? <span>[ Tarefa Concluida ]</span> : null}
            </li>
          </div>
        );
      })}
    </div>
  );
}
