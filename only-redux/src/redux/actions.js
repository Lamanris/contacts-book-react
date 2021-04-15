import axios from "axios";
import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, SET_IS_FETCHED, SET_SEARCH, SHOW_ADD_CONTACT} from "./constants";
import {toast} from "react-toastify";

export const getContacts = (dispatch) => {
    axios('https://6076ba351ed0ae0017d69a16.mockapi.io/contacts')
        .then(({data}) => {
            dispatch({type: GET_CONTACTS, payload: data})
            dispatch(setIsFetched(true))
        })
}

export const deleteContact = (dispatch, id) => {
    axios.delete(`https://6076ba351ed0ae0017d69a16.mockapi.io/contacts/${id}`)
        .then(({data}) => {
            dispatch({type: DELETE_CONTACT, payload: data.id})
            console.log('Deleted contact: ', data)
            notify(false)
        })
}

export const addContact = (dispatch, newContact) => {
    axios.post('https://6076ba351ed0ae0017d69a16.mockapi.io/contacts', newContact)
        .then(({data}) => {
            dispatch({type: ADD_CONTACT, payload: data})
            console.log('New contact: ', data)
            notify(true)
        })
}

export const showAddContact = (status) => {
    return {
        type: SHOW_ADD_CONTACT,
        payload: status
    }
}

export const setSearch = (search) => {
    return {
        type: SET_SEARCH,
        payload: search
    }
}

export const setIsFetched = (status) => {
    return {
        type: SET_IS_FETCHED,
        payload: status
    }
}

export const notify = (status) => {
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