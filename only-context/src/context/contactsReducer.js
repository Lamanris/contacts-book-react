import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACTS,
    SET_IS_FETCHED,
    SET_SEARCH,
    SHOW_ADD_CONTACT
} from "./constants";

export const contactsReducer = (state, action) => {
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