import React from "react";

const SearchBox = ({searchChange}) =>{

    return (
        <div className="pa3 tc">
            <input
                className=" f4 pa3 bg-light-green"
                type="search" 
                placeholder="Search robots"
            onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;