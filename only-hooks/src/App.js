import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import AddContact from "./components/AddContact";

const App = () => {
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([])
    const [showAddContact, setShowAddContact] = useState(false)

    useEffect(() => {
        axios('https://6076ba351ed0ae0017d69a16.mockapi.io/contacts')
            .then(({data}) => setContacts(data))
    },[])

    function deleteContact (id) {
        axios.delete(`https://6076ba351ed0ae0017d69a16.mockapi.io/contacts/${id}`)
            .then(({data}) => {
                setContacts(contacts.filter(el => el.id !== data.id))
                console.log('Deleted contact: ', data)
            })
    }

    function addNewContact (newContact) {
        axios.post('https://6076ba351ed0ae0017d69a16.mockapi.io/contacts', newContact)
            .then(({data}) => {
                setContacts([...contacts, data])
                console.log('New contact: ', data)
            })
    }

    return (
        <div className="w-1/3 mx-auto my-4">
            <Header setSearch={setSearch} setShowAddContact={setShowAddContact} showAddContact={showAddContact}/>
            {showAddContact && <AddContact addNewContact={addNewContact} setShowAddContact={setShowAddContact}/>}
            <ContactsList contacts={contacts} search={search} deleteContact={deleteContact}/>
        </div>
    );
};

export default App;