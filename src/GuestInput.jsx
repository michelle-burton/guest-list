import { useState } from 'react';
import { useFormValidator } from './useFormValidator';

// Goal: Build a form that lets users add names to a guest list and displays them below.

const GuestList = ({ guestNames, removeGuest}) => {
    
    return(
        <div>
            <ul>
                { 
                    guestNames.map((guest) => (
                        <li key={guest.id}>
                            👤 {guest.name} {guest.text}
                            <button onClick={ () => removeGuest(guest.id)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}



const GuestInput = () => {
    // Validation function
    const validate = (values) => {
        const errors = {};
        if (!values.name.trim()) errors.name = "Name is required";
        if (!values.message.trim()) errors.message = "Message is required";
        return errors    
    };

    // Hook from custom validator
    const {
        values,
        errors,
        isValid,
        handleChange,
        setValues,
        setErrors
    } = useFormValidator({name: '', message: ''}, validate)

    const [guestNames, setGuestNames] = useState([]);

    const handleForm = (e) => { 
        e.preventDefault()

        // Gather Error messages
        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const newGuestNames = {
            id:  guestNames.length + 1 ,
            name:  values.name ,
            text: values.message
        }

        setGuestNames([...guestNames, newGuestNames]);

        // clear form
        setValues({ name: '', message: '' });
        setErrors({});
    }

    const removeGuest = (idToRemove) => {
        const updatedList = guestNames.filter((guest) => 
            (guest.id !== idToRemove )
        )
        setGuestNames(updatedList);
    }

    return (
        <div>
             <h1>🎉 Party Guest List</h1>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="enter name"
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <input
                    type="text"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Enter message"
                />
                {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                <button type="submit" disabled={!isValid}>Add Guest</button>
            </form>

            <GuestList guestNames={guestNames} removeGuest={ removeGuest} />
        </div>
    )
}


export default GuestInput;

