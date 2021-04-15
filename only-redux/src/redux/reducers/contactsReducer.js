import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, SHOW_ADD_CONTACT, SET_SEARCH, SET_IS_FETCHED} from "../constants";

const initialState = {
    contacts: [],
    isShowAddContact : false,
    search: '',
    isFetched: false
}


const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state, contacts: action.payload }
        case DELETE_CONTACT:
            return { ...state, contacts: state.contacts.filter(el => el.id !== action.payload) }
        case ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, action.payload]}
        case SHOW_ADD_CONTACT:
            return { ...state, isShowAddContact: action.payload}
        case SET_SEARCH:
            return { ...state, search: action.payload}
        case SET_IS_FETCHED:
            return { ...state, isFetched: action.payload}
        default:
            return state
    }
}

export default contactsReducer