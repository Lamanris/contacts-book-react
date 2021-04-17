import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.css'
import ContactsContextProvider from "./context/contacts-context";

ReactDOM.render(
<ContactsContextProvider>
    <App />
</ContactsContextProvider>,
  document.getElementById('root')
)

