import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {ContactsContext} from "../context/contacts-context";

const ContactsListItem = ({user}) => {
    const initials = user.name.split(' ').map(el => el[0]).join('')

    const {deleteContact} = useContext(ContactsContext)

    return (
        <div className="flex items-center p-4 hover:bg-gray-100">
            <div className="bg-blue-400 rounded-full w-12 h-12 flex justify-center items-center text-white font-bold mr-4">{initials}</div>
            <div>
                <h4 className="font-bold">{user.name}</h4>
                <p className="opacity-60">{user.phone}</p>
            </div>
            <FontAwesomeIcon
                icon={faTrash}
                className="ml-auto text-red-500 cursor-pointer"
                onClick={() => deleteContact(user.id)}
            />
        </div>
    );
};

export default ContactsListItem;