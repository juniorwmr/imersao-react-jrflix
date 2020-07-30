import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

interface ICategoria {
  name: string
  description: string
  color: string
}

const CadastroCategoria: React.FC = () => {
  const defaultValues = {
    name: '',
    description: '',
    color: '#000000'
  }
  const [categorias, setCategorias] = useState<ICategoria[]>();
  const [values, setValues] = useState(defaultValues as any);

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

  return (
    <PageDefault>
      <h1>Cadastro de values</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        categorias && setCategorias([...categorias, values]);
        setValues(defaultValues);
      }}>
        <FormField
          label='Nome da Categoria: '
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange} />
        <FormField
          label='Descricão:'
          type='textarea'
          name='description'
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label='Cor:'
          type='color'
          name='color'
          value={values.color}
          onChange={handleChange}
        />
        <button type='submit'>Cadastrar Categoria</button>
      </form>
      <div>
        {categorias?.map((categoria, index) => (
          <li key={index}>{categoria}</li>
        ))}
      </div>
    </PageDefault >
  );
}

export default CadastroCategoria;