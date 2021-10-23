import SearchInput from "./search-input";
import SearchSelect from "./search-select";
import {useContext, useEffect, useState} from 'react';
import { SearchBoxContext } from "../../contexts/searchBoxContext";

function SearchBox() {

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
        <div className="search-artist-name py-5 sm:py-0 w-full sm:w-6/12 sm:h-12 flex flex-col sm:flex-row sm:px-8 text-coolGray-300">
            <SearchSelect selectValueProp= {setSelectedSearchTerm} />
            <SearchInput searchValuePropInput={selectedSearchTerm} searchValuePropOutput={setSearchInputValue} />
        </div>
        </>
    )
}

export default SearchBox;