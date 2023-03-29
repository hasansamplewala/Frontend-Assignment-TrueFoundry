import { Box, Stack, TextField } from "@mui/material"
import { useState } from "react"
import MyTooltip from "./Tooltip";
import { useFormValues } from "../context/FormContext";

const RenderInput = ({ item }) => {
    const { formValues, handleChange } = useFormValues()
    const { label, description, validate, jsonKey, placeholder } = item;
    const { required, immutable, pattern } = validate;

    let isDescriptionEmpty = description.length === 0 ? true : false
    let isPatternEmpty = (pattern) ? true : false
    let isRequired = required
    let isEditable = !immutable

    return (
        <Box key={jsonKey}>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>
                <label>{label}:</label>
                {!isDescriptionEmpty && <MyTooltip text={description} />}
                <TextField
                    value={formValues[jsonKey]}
                    onChange={(event) => { handleChange(jsonKey, event.target.value) }}
                    placeholder={placeholder}
                    required={required}
                    readOnly={immutable}
                    pattern={pattern}
                />
            </Stack>
        </Box>
    )
}

export default RenderInput