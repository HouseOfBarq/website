import React, { useState } from 'react';

import './Search.css';
import { TestUsers } from './TestUsers.js';

import SearchTable from '../components/SearchTable.jsx';

import SignUpBanner from '../components/SignUpBanner';

function Search() {

    const [query,setQuery] = useState("");

    const search = (data) => {
        return data.filter(
            (item) =>
                item.first_name.toLowerCase().includes(query) ||
                item.last_name.toLowerCase().includes(query) ||
                item.email.toLowerCase().includes(query)
        );

    };

    return (

        <main>
            <div className="cSearchPage">

                <input 
                        type="text"
                        placeholder="Search..." 
                        className="search" 
                        onChange={e=> setQuery(e.target.value)}
                />
                <ul className="list">
                    {TestUsers.filter(user=>user.first_name.toLowerCase().includes(query)
                    ).map((user) => 
                        
                    (
                        <li key={user.id} className="listItem">{user.first_name}</li>
                    ))}

                    <SearchTable data={search(TestUsers)} />
                    
                </ul>







            </div>

        
        
        
        <SignUpBanner />
        </main>
   
    )
}

export default Search