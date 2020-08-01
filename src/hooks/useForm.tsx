import React, { useState } from 'react';

export default function useForm(defaultValues: any) {
  const [values, setValues] = useState<any>(defaultValues);
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

  function clearForm() {
    setValues(defaultValues)
  }

  return { values, clearForm, handleChange };
}