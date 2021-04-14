import React from 'react';
import HashLoader from "react-spinners/HashLoader";

import ContactsListItem from "./ContactsListItem";

const ContactsList = ({contacts, search, deleteContact}) => {
    const filteredList = contacts.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="shadow-md overflow-y-scroll" style={{height: '500px'}}>
            { !filteredList.length && contacts.length ? <h2 className="p-4 text-xl">Looks like there is no such contact...</h2> : null }
            {
                contacts.length > 0 ? (
                    filteredList.map(el => <ContactsListItem user={el} key={el.id} deleteContact={deleteContact}/>)
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <HashLoader size={150} color={"#60a5fa"}/>
                    </div>
                )

            }
        </div>
    );
};

export default ContactsList;