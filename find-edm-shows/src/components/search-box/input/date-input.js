import { useEffect, useState } from "react";

function DateInput({ dateInputProp,  dateValueChangedProp}) {
    const [dateInputValue, setDateInputValue] = useState('');

    useEffect(() => {
        setDateInputValue('');
    }, [ dateInputProp ])

    useEffect(() => {
        dateValueChangedProp(dateInputValue);
    }, [ dateValueChangedProp, dateInputValue ])


    return(
        <>
            <input className="artist-name flex-grow ml-7 text-2xl rounded-xl bg-opacity-60 bg-gray-800
            placeholder-coolGray-300 border-transparent font-semibold uppercase
            transition duration-500 ease-in-out 
            hover:bg-opacity-80 hover:text-coolGray-100
            focus:bg-opacity-90 focus:ring focus:border-transparent focus:ring-coolGray-600
            "                 
            type="date" name="date" id="date" value={dateInputValue}
            onChange={ e => setDateInputValue(e.target.value) } placeholder={dateInputProp} />
        </>
    )
}

export default DateInput;