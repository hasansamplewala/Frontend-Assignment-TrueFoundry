import React, { useEffect } from 'react'
import { useFormValues } from '../context/FormContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function RenderSelect({ item }) {
  // get context values
  const { formValues, handleChange } = useFormValues()
  // destructuring the item object
  const { jsonKey, label, validate } = item;
  const { options, defaultValue } = validate;

  const currentFormValue = formValues[jsonKey] || defaultValue;
  // Adding the default value to the formValue state upon component mount
  useEffect(() => {
    handleChange(jsonKey, currentFormValue)
  }, [])

  return (
    <FormControl key={jsonKey} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={currentFormValue}
        onChange={(event) => handleChange(jsonKey, event.target.value)}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default RenderSelect