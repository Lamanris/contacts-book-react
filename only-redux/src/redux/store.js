import { createStore } from 'redux'
import contactsReducer from "./reducers/contactsReducer";


export const store = createStore(
    contactsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)