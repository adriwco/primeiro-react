import { useEffect, useState } from "react";

const minhaLista = [
  { id: "1", value: "Fruta" },
  { id: "2", value: "Legumea" },
  { id: "3", value: "Carne" },
];
export default function ListasReact() {
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if(pesquisa){
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    }else{
      setProdutos(minhaLista);
    }
  }, [pesquisa]);

  return (
    <div>
      <h3>Efeito Colateral (useEffect e useState)</h3>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="pesquise aqui"
      />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.value}</li>
          </div>
        );
      })}
    </div>
  );
}
