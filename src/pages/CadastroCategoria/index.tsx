import React, { useState, useEffect } from 'react';

import useForm from '../../hooks/useForm';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import { Container, Title, Form, Button } from './styles';

interface ICategoria {
  id?: number
  title: string
  color: string
  description: string
  url: string
}

const CadastroCategoria: React.FC = () => {
  const defaultValues = {
    id: 0,
    title: '',
    color: '#000000',
    description: '',
    url: ''
  }
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  const { values, clearForm, handleChange } = useForm(defaultValues);

  function addCategory({ id, title, color, description, url }: ICategoria) {
    setTimeout(() => {
      fetch('http://localhost:3333/categories', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          id,
          title,
          color,
          link_extra: {
            description,
            url
          }
        }),
      }).then(response => response.json()).then((responseJson) => {
        console.log(responseJson);
      })
    }, 2000)
  }

  function getCategory() {
    setTimeout(() => {
      fetch('http://localhost:3333/categories', {
        method: 'GET',
      }).then(response => response.json()).then((responseJson) => {
        setCategorias(responseJson)
        console.log(responseJson);
      })
    }, 2000)
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <PageDefault>
      <Container>
        <Title>Cadastro de Categorias</Title>
        <Form onSubmit={(e) => {
          e.preventDefault();
          setCategorias([...categorias, values]);
          addCategory(values);
          clearForm();
        }}>
          <FormField
            label='Nome da Categoria'
            type='text'
            name='title'
            value={values.title}
            onChange={handleChange} />
          <FormField
            label='Descricão'
            type='textarea'
            name='description'
            value={values.description}
            onChange={handleChange}
          />
          <FormField
            label='URL da Categoria'
            type='text'
            name='url'
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            label='Cor'
            type='color'
            name='color'
            value={values.color}
            onChange={handleChange}
          />
          <Button type='submit'>Cadastrar Categoria</Button>
        </Form>
        {
          !categorias.length ? (
            <div>
              <h2>Loading...</h2>
            </div>
          ) : (
              <div>
                {categorias?.map((categoria, index: number) => (
                  <li key={index}>{categoria.title}</li>
                ))}
              </div>
            )
        }
      </Container>
    </PageDefault >
  );
}

export default CadastroCategoria;