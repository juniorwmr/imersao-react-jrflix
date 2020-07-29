import React from 'react';

import PageDefault from '../../components/PageDefault';
// import Button from '../../components/Button';

const CadastroCategoria: React.FC = () => {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <div>
        <label>Nome: </label>
        <input style={{ color: "black", backgroundColor: "white" }} />
      </div>
      {/* <Button  name='Cadastrar Categoria' url='/cadastro/categoria' backgroundColor='var(--primary)' /> */}
      <button>Cadastrar Categoria</button>
    </PageDefault>
  );
}

export default CadastroCategoria;