import React from 'react';

interface IFormField {
  name: string,
  label: string,
  type: string,
  value: string | number,
  onChange?: any | null
}

const FormField: React.FC<IFormField> = ({ name, label, type, value, onChange }) => {

  return (
    <div>
      <label htmlFor={name}> {label}
        {type === 'textarea' ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            style={{ color: "black", backgroundColor: "white" }} />
        ) : (
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              style={{ color: "black", backgroundColor: "white" }} />

          )}
      </label>
    </div>
  );
}

export default FormField;