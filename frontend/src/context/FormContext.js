import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value
    })
  }
  console.log('formValues', formValues)
  return (
    <FormContext.Provider
      value={{ formValues, setFormValues, handleChange }}
    >
      {children}
    </FormContext.Provider>
  );
};
// custom hook
export const useFormValues = () => {

  const contextValue = useContext(FormContext);
  if (contextValue === undefined) {
    throw new Error("useCounter must be within a FormContext");
  }

  return contextValue;
};
