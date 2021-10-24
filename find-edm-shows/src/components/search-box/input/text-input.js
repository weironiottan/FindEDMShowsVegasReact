import { useEffect, useState } from "react";

function TextInput({ textInputProp, textValueChangedProp }) {   

    const [textInputValue, setTextInputValue] = useState('');

    useEffect(() => {
        setTextInputValue('');
    }, [ textInputProp ])

    useEffect(() => {
        textValueChangedProp(textInputValue)
    }, [ textValueChangedProp, textInputValue ])

    return(
        <>
            <input className="artist-name mx-2 sm:mx-0 sm:ml-7 text-2xl flex-grow rounded-xl bg-opacity-60 bg-gray-800
            placeholder-coolGray-300 border-transparent font-semibold capitalize
            transition duration-500 ease-in-out 
            hover:bg-opacity-80 hover:text-coolGray-100
            focus:bg-opacity-90 focus:ring focus:border-transparent focus:ring-coolGray-600"                 
            type="text" name="artist-name" id="artist-name" value={textInputValue}
            onChange={ e => setTextInputValue(e.target.value.toLowerCase()) } placeholder={textInputProp} />
        </>
    )

}

export default TextInput