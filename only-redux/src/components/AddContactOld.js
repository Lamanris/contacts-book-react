import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addContact} from "../redux/actions";

const AddContact = () => {
    const [contactInfo,  setContactInfo] = useState({name: '', phone: ''})
    const [nameError, setNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')

    const dispatch = useDispatch()

    const inputHandler = (e) => setContactInfo({...contactInfo, [e.target.name] : e.target.value})

    const formValidation = () => {
        if (!contactInfo.name) {
            setNameError('* type the name')
        } else if (contactInfo.name.length < 5) {
            setNameError('* name must be at least 5 letters')
        } else {
            setNameError('')
        } if (!contactInfo.phone) {
            setPhoneError('* type the phone')
        } else if (contactInfo.phone.length < 7) {
            setPhoneError('* phone must be at least 8 numbers')
        } else if (isNaN(contactInfo.phone)) {
            setPhoneError('* phone must includes only numbers')
        } else {
            setPhoneError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        formValidation()

        if (contactInfo.name.length && contactInfo.phone.length &&  !isNaN(contactInfo.phone) && contactInfo.name.length >= 5 && contactInfo.phone.length >= 7) {
            addContact(dispatch, contactInfo)
            setContactInfo({name: '', phone: ''})
            e.target.reset()
        }

    }

    return (
        <form className="p-4" onSubmit={handleSubmit}>
            {nameError && <span className="text-red-500 text-sm ">{nameError}</span>}
            <input type="text"
                   className="border-2 w-full mb-3 px-2 py-1 outline-none"
                   placeholder="Enter name"
                   name="name"
                   onChange={inputHandler}
            />
            {phoneError && <span className="text-red-500 text-sm ">{phoneError}</span>}
            <input type="text"
                   className="border-2 w-full mb-3 px-2 py-1 outline-none"
                   placeholder="Enter phone"
                   name="phone"
                   onChange={inputHandler}
            />
            <div className="text-right">
                <button
                    type="button"
                    className="bg-red-100 px-4 py-2 text-xs font-semibold tracking-wider text-red-600 rounded focus:outline-none mr-3"

                >Cancel</button>
                <button
                    type="submit"
                    className="bg-blue-100 px-4 py-2 text-xs font-semibold tracking-wider text-blue-600 rounded focus:outline-none"
                >Add</button>
            </div>
        </form>
    );
};

export default AddContact;