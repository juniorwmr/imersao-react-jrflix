import React from 'react';

import { Wrapper, Label, Input } from './styles';

interface IFormField {
  label: string
  type: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const FormField: React.FC<IFormField> = ({ label, type, name, value, onChange }) => {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  return (
    <Wrapper>
      <Label>
        <Input
          as={tag}
          value={value}
          name={name}
          onChange={onChange}
          type={type}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </Wrapper>
  )
};

export default FormField;