import { useEffect } from "react";
import {useState} from 'react';


function SearchSelect({ selectValueProp }) {

    const [selectValue, setSelectValue] = useState('artist name')

    useEffect(() => {
        selectValueProp(selectValue)
    },[selectValue, selectValueProp])

    return(
        <>
        <select className="text-xl rounded-xl bg-opacity-60 bg-warmGray-800 font-semibold
        transition duration-500 ease-in-out transform hover:-translate-y-1
        border-transparent 
        hover:text-coolGray-100 hover:bg-opacity-80
        focus:border-transparent focus:ring-0" 
        name="search-options" id="search-options"
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)} >
            <option value="artist name">Artist Name</option>
            <option value="club name">Club Name</option>
            <option value="date">Date </option>
        </select>
        </>
    )
}

export default SearchSelect;