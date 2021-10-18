import { useEffect, useState } from "react";
import DateInput from "./input/date-input";
import TextInput from "./input/text-input";

function SearchInput({ searchValuePropInput, searchValuePropOutput  }) {

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        searchValuePropOutput(searchValue)
    },[searchValue, searchValuePropOutput])



    return(
        <>
        { !!searchValuePropInput && (searchValuePropInput !== 'date' ) ? 
            <TextInput textInputProp={searchValuePropInput} textValueChangedProp={setSearchValue} />
        :
            <DateInput dateInputProp={searchValuePropInput} dateValueChangedProp={setSearchValue} />
        }
        </>
    )
}

export default SearchInput;