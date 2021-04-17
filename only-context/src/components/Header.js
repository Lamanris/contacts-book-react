import React, {useContext} from 'react';
import {ContactsContext} from "../context/contacts-context";

const Header = () => {
    const {isShowAddContact, showAddContact, setSearch} = useContext(ContactsContext)

    return (
        <div className="bg-blue-400 p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl text-white font-bold">Contacts Book</h2>
                <span
                    onClick={() => showAddContact(!isShowAddContact)}
                    className="text-2xl text-white font-bold cursor-pointer">+</span>
            </div>
            <input type="text"
                   onChange={(e) => setSearch(e.target.value)}
                   className="w-full px-2 py-1 outline-none"
                   placeholder="Search..." />
        </div>
    );
};

export default Header;