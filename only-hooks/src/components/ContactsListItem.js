import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ContactsListItem = ({user, deleteContact}) => {
    const initials = user.name.split(' ').map(el => el[0]).join('')
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