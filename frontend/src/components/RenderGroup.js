import { Box, FormGroup, FormLabel, Typography } from '@mui/material'
import { useFormValues } from '../context/FormContext';
import renderForm from '../utils/renderForm'
function RenderGroup({ item }) {
  // get context values
  // const { formValues, handleChange } = useFormValues()
  // destructuring the item object
  const { label, description, validate, jsonKey, placeholder, subParameters } = item;
  const { required, immutable, pattern } = validate;

  let isDescriptionEmpty = description.length === 0 ? true : false
  let isPatternEmpty = (pattern) ? true : false
  let isRequired = required
  let isEditable = !immutable

  const SubComponents = renderForm(subParameters)
  return (
    <>
      <Box>
        <FormGroup key={jsonKey} >
          <FormLabel>{label}</FormLabel>
          {SubComponents}
        </FormGroup>
      </Box>
    </>
  )
}

export default RenderGroup