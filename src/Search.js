
import React, { useState } from "react";

function Search({ setSearch }) {
    const [string, setString] = useState("")

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Search"
                value={string}
                onChange={(e) => setString(e.target.value)}
            />
            <i className="search" onClick={(e) => setSearch(string)}></i>
        </div>
    );
}
export default Search