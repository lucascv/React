import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default (props) => {
  const tabela = produtos.map((produto, i) => {
    return (
      <tr className={i % 2 == 0 ? 'Par' : 'Impar'}>
        <th>{produto.id}</th>
        <th>{produto.nome}</th>
        <th>R$ {produto.preco}</th>
      </tr>
    );
  })
  return (
    <div>
      <table border="1">
        <thead>
          <tr className="TabelaProdutos">
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {tabela}
        </tbody>
      </table>
    </div>
  );
}
