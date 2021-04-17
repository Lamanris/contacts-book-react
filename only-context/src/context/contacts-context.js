import React, {createContext, useEffect, useReducer} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {contactsReducer} from "./contactsReducer";
import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, SET_IS_FETCHED, SET_SEARCH, SHOW_ADD_CONTACT} from "./constants";

export const ContactsContext = createContext()

const initialState = {
    contacts: [],
    isShowAddContact : false,
    search: '',
    isFetched: false
}

export const ContactsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(contactsReducer, initialState)

    useEffect(() => {
        getContacts()
    },[])

    const getContacts = () => {
        axios('https://6076ba351ed0ae0017d69a16.mockapi.io/contacts')
            .then(({data}) => {
                dispatch({type: GET_CONTACTS, payload: data})
                setIsFetched(true)
            })
    }

    const deleteContact = (id) => {
        axios.delete(`https://6076ba351ed0ae0017d69a16.mockapi.io/contacts/${id}`)
            .then(({data}) => {
                dispatch({type: DELETE_CONTACT, payload: data.id})
                console.log('Deleted contact: ', data)
                notify(false)
            })
    }

    const addContact = (newContact) => {
        axios.post('https://6076ba351ed0ae0017d69a16.mockapi.io/contacts', newContact)
            .then(({data}) => {
                dispatch({type: ADD_CONTACT, payload: data})
                console.log('New contact: ', data)
                notify(true)
            })
    }

    const showAddContact = (status) => dispatch({type: SHOW_ADD_CONTACT, payload: status})

    const setSearch = (search) => dispatch({type: SET_SEARCH, payload: search})

    const setIsFetched = (status) => dispatch({type: SET_IS_FETCHED, payload: status})

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

    const contextValues = {
        ...state,
        getContacts,
        deleteContact,
        addContact,
        showAddContact,
        setSearch,
        setIsFetched,
        notify
    }

    return (
        <ContactsContext.Provider value={contextValues}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider