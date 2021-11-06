import SearchInput from "./search-input";
import SearchSelect from "./search-select";
import {useContext, useEffect, useState} from 'react';
import { SearchBoxContext } from "../../contexts/searchBoxContext";
import { useLocation } from "react-router-dom";


function SearchBox() {
    const location = useLocation();

    const { addUserSelectedSearchTerm } = useContext(SearchBoxContext);
    const { addUserSearchInput } = useContext(SearchBoxContext);

    const [selectedSearchTerm, setSelectedSearchTerm] = useState();
    const [searchInputValue, setSearchInputValue] = useState();

    useEffect(() => {
        addUserSelectedSearchTerm(selectedSearchTerm)
        addUserSearchInput(searchInputValue)

    },[selectedSearchTerm, searchInputValue, addUserSearchInput, addUserSelectedSearchTerm])

    return(
        <>
        <div className="search-artist-name py-5 sm:mx-auto sm:py-0 w-full sm:w-9/12 sm:h-12 flex flex-col sm:flex-row sm:px-8 text-coolGray-300 justify-center items-center">
            {(location.pathname.includes('about') && 
            <div className="tracking-widest font-extrabold text-4xl uppercase">About</div>)
            || (location.pathname.includes('contact') && 
            <div className="tracking-widest font-extrabold text-4xl uppercase ">Contact</div>) ||(
            <>
            <SearchSelect selectValueProp= {setSelectedSearchTerm} />
            <SearchInput searchValuePropInput={selectedSearchTerm} searchValuePropOutput={setSearchInputValue} />         
            </>)}
        </div>
        </>
    )
}

export default SearchBox;