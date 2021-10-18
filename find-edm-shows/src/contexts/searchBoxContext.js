import { createContext, useState } from "react";

export const SearchBoxContext = createContext()


const SearchBoxContextProvider = (props) => {

    const [searchValue, setSearchValue] = useState()
    const [selectedSearchValue, setSelectedSearchValue] = useState()

    const addUserSearchInput = (searchValue) => {
        setSearchValue(searchValue)
    }

    const addUserSelectedSearchTerm = (selectedSearchValue) => {
        setSelectedSearchValue(selectedSearchValue)
    }

    return (
        <SearchBoxContext.Provider value={{ searchValue, selectedSearchValue, addUserSearchInput, addUserSelectedSearchTerm }}>
            { props.children }
        </SearchBoxContext.Provider>
    )
}

export default SearchBoxContextProvider;