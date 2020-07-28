import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
// import Button from '../../components/Button';

const CadastroVideo: React.FC = () => {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      {/* <Button  name='Cadastrar Categoria' url='/cadastro/categoria' backgroundColor='var(--primary)' /> */}
      <Link to='/cadastro/categoria'>Cadastrar Video</Link>
    </PageDefault>
  );
}

export default CadastroVideo;