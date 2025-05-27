// custom useFormVlidator Hook

import { useState } from 'react';

export function useFormValidator(initialValues, validateFn) {
    const [values, setValues] = useState(initialValues); // values = { name: '', message: '' }
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target; // get input field's name + value
        const newValues = { ...values, [name]: value };
        setValues(newValues);   // update values state

        // validate immediately on change
        const validationErrors = validateFn(newValues);  // 👈 validate the updated values
        setErrors(validationErrors)  // store errors
    };

    const isValid = Object.keys(errors).length === 0;

    return {
        values,
        errors,
        isValid,
        handleChange,
        setValues,
        setErrors
    };
}
