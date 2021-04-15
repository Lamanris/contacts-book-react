import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import AddContact from "./components/AddContact";

const App = () => {
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const [showAddContact, setShowAddContact] = useState(false)

    const notify = (status) => {
        toast.success(`🦄 Successfully ${status ? 'added' : 'deleted'}!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    const toastContainer =  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>

    useEffect(() => {
        axios('https://6076ba351ed0ae0017d69a16.mockapi.io/contacts')
            .then(({data}) => {
                setContacts(data)
                setIsFetched(true)
            })
    },[])

    function deleteContact (id) {
        axios.delete(`https://6076ba351ed0ae0017d69a16.mockapi.io/contacts/${id}`)
            .then(({data}) => {
                setContacts(contacts.filter(el => el.id !== data.id))
                console.log('Deleted contact: ', data)
                notify(false)
            })
    }

    function addNewContact (newContact) {
        axios.post('https://6076ba351ed0ae0017d69a16.mockapi.io/contacts', newContact)
            .then(({data}) => {
                setContacts([...contacts, data])
                console.log('New contact: ', data)
                notify(true)
            })
    }

    return (
        <div className="w-1/3 mx-auto my-4">
            <Header setSearch={setSearch} setShowAddContact={setShowAddContact} showAddContact={showAddContact}/>
            {showAddContact && <AddContact addNewContact={addNewContact} setShowAddContact={setShowAddContact}/>}
            <ContactsList contacts={contacts} search={search} deleteContact={deleteContact} isFetched={isFetched}/>
            {toastContainer}
        </div>
    );
};

export default App;