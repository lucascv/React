import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const tabela = produtos.map((produto) => {
    return (
      <tr>
        <th>{produto.id}</th>
        <th>{produto.nome}</th>
        <th>{produto.preco}</th>
      </tr>
    );
  })
  return (
    <div>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
        {tabela}
      </table>
    </div>
  );
}
