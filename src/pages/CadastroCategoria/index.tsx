import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import { Container, Title, Form, Button } from './styles';

interface ICategoria {
  id: number
  name: string
  description: string
  color: string
}

const CadastroCategoria: React.FC = () => {
  const defaultValues = {
    id: 0,
    name: '',
    description: '',
    color: '#000000'
  }
  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [values, setValues] = useState<ICategoria>(defaultValues);

  // key could be: name, description or color
  function setValue(key: any, value: string) {
    setValues({
      ...values,
      // changing keys dinamically 
      [key]: value
    })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { target } = event;
    setValue(target.getAttribute('name'), target.value)
  }

  function addCategory(data: ICategoria) {
    setTimeout(() => {
      fetch('http://localhost:3333/categorias', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data),
      }).then(response => response.json()).then((responseJson) => {
        console.log(responseJson);
      })
    }, 2000)
  }

  function getCategory() {
    setTimeout(() => {
      fetch('http://localhost:3333/categorias', {
        method: 'GET',
      }).then(response => response.json()).then((responseJson) => {
        setCategorias(responseJson)
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
          setValues(defaultValues);
        }}>
          <FormField
            label='Nome da Categoria'
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange} />
          <FormField
            label='Descricão'
            type='textarea'
            name='description'
            value={values.description}
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
                {categorias?.map((categoria) => (
                  <li key={categoria.id}>{categoria.name}</li>
                ))}
              </div>
            )
        }


      </Container>
    </PageDefault >
  );
}

export default CadastroCategoria;