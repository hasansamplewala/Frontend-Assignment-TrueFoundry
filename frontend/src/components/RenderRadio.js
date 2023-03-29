import { Box, Tab, Tabs } from "@mui/material";
import { useFormValues } from "../context/FormContext";
import { useEffect } from "react";

function RenderRadio({ item }) {
  // get context values
  const { formValues, handleChange } = useFormValues()
  // destructuring the item object
  const {
    description,
    validate,
    jsonKey,
  } = item;
  const { options, required, immutable, pattern, defaultValue } = validate;
  
  let isDescriptionEmpty = description.length === 0 ? true : false
  let isPatternEmpty = (pattern) ? true : false
  let isRequired = required
  let isEditable = !immutable
  // default value of the options
  const currentFormValue = formValues[jsonKey] || defaultValue;
  // Adding the default value to the formValue state upon component mount
  useEffect(()=>{
    handleChange(jsonKey, currentFormValue)
  },[])
  // Extract label and values from the options object
  const optionValues = options.map(({ label, value }) => {
    return { label, value }
  })

  // update the formValues state upon input change
  function handleTabChange(event, newValue) {
    handleChange(jsonKey, newValue)
  }

  return (
    <Box key={jsonKey}>
    <Tabs
      indicatorColor="primary"
      value={currentFormValue}
      onChange={handleTabChange}
      textColor="primary"
      scrollButtons="auto">
      {optionValues.map((option) =>
        <Tab key={option.value} value={option.value} label={option.label} />
      )}
    </Tabs>
    </Box>

  )
}

export default RenderRadio