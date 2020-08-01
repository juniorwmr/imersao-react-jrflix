import React from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import { Container, Title, Form, Button } from './styles';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

const CadastroVideo: React.FC = () => {
  const defaultValues = {
    categoria: '',
    title: '',
    url: ''
  }
  const { values, handleChange, clearForm } = useForm(defaultValues);

  return (
    <PageDefault>
      <Container>
        <Title>Cadastro de Vídeo</Title>
        <Form onSubmit={(event) => {
          event.preventDefault();
          clearForm();
        }}>
          <FormField
            label='Categoria'
            type='text'
            name='categoria'
            value={values.categoria}
            onChange={handleChange}
          />
          <FormField
            label='Título do Vídeo'
            type='text'
            name='title'
            value={values.title}
            onChange={handleChange}
          />
          <FormField
            label='URL do Vídeo'
            type='text'
            name='url'
            value={values.url}
            onChange={handleChange}
          />
        </Form>
        <Button type='submit'>Cadastrar Vídeo</Button>
      </Container>
      <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;