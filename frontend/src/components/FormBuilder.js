import React from 'react'
import renderForm from '../utils/renderForm'


function FormBuilder({uiSchema}) {
  return (
<>{renderForm(uiSchema)}</>
  )
}

export default FormBuilder