import { Grid } from "@mui/material"
import FormBuilder from "./FormBuilder"
import JsonEditor from "./JsonEditor"
import { useState } from "react"
import sampleSchema from '../pizza.json'
import { FormProvider } from "../context/FormContext"

function Dashboard() {
    const [uiSchema, setUiSchema] = useState(sampleSchema)
    // console.log('uiSchema', uiSchema)
  return (
    <FormProvider>
    <Grid container>
        <Grid item xs={6} lg={6}><JsonEditor uiSchema={uiSchema} setUiSchema={setUiSchema}/></Grid>
        <Grid item xs={6} lg={6}><FormBuilder uiSchema={uiSchema}/></Grid>
    </Grid>
    </FormProvider>
  )
}

export default Dashboard