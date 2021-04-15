import React from 'react';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {addContact, showAddContact} from "../redux/actions";

const AddContact = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const dispatch = useDispatch()

    const onSubmit = data => {
        addContact(dispatch, data)
        reset()
        dispatch(showAddContact(false))
    }
    return (
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            {errors.name && <span className="text-red-500 text-sm ">{errors.name.message}</span>}
            <input type="text"
                   className="border-2 w-full mb-3 px-2 py-1 outline-none"
                   placeholder="Enter name"
                   {...register("name",
                       { required: {value: true, message: '* type name'}, minLength: {value: 5, message: '* name must be at least 5 letters'}})}
            />
            {errors.phone && <span className="text-red-500 text-sm ">{errors.phone.message}</span>}
            <input type="text"
                   className="border-2 w-full mb-3 px-2 py-1 outline-none"
                   placeholder="Enter phone"
                   {...register("phone",
                       { pattern: {value: /^\d+$/, message: '* phone must contain only numbers'}, required: {value: true, message: '* type phone'}, minLength: {value: 8, message: '* phone must be at least 8 letters'}})}
            />
            <div className="text-right">
                <button
                    type="button"
                    className="bg-red-100 px-4 py-2 text-xs font-semibold tracking-wider text-red-600 rounded focus:outline-none mr-3"
                    onClick={() => dispatch(showAddContact(false))}
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