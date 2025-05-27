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
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10 space-y-6">
            <h1 className="text-2xl font-bold text-center text-indigo-700">🎉 Party Guest List</h1>
            <form onSubmit={handleForm} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="enter name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Enter message"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                </div>
                <button
                    type="submit"
                    className={`w-full px-4 py-2 font-semibold text-white rounded ${
                        isValid
                          ? 'bg-indigo-600 hover:bg-indigo-700'
                          : 'bg-gray-300 cursor-not-allowed'
                      }`}
                >Add Guest</button>
            </form>

            <GuestList guestNames={guestNames} removeGuest={ removeGuest} />
        </div>
    )
}


export default GuestInput;

