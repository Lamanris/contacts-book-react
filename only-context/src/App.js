import React, {useContext} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import AddContact from "./components/AddContact";
import {ContactsContext} from "./context/contacts-context";

const App = () => {
    const {isShowAddContact} = useContext(ContactsContext)

    const toastContainer =  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>

    return (
        <div className="w-1/3 mx-auto my-4">
            <Header />
            {isShowAddContact && <AddContact />}
            <ContactsList />
            {toastContainer}
        </div>
    );
};

export default App;