import axios from 'axios';
import { useQuery } from "react-query";
import { useContext } from 'react';
import { SearchBoxContext } from '../../contexts/searchBoxContext';
import EventData from './event-data';


const getEDMEventsResults = async () => {
    const { data } = await axios.get(`https://salty-sea-11177.herokuapp.com/find-edm/all-events`);
    return data    
}

function TableRow() {
    let filteredEventData = '';

    const { searchValue } = useContext(SearchBoxContext);
    const { selectedSearchValue } = useContext(SearchBoxContext);

    const { isLoading, isError, data, error } = useQuery("edmEventsResults", getEDMEventsResults);

    if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }

      if (!!searchValue) {
          switch (selectedSearchValue) {
              case 'club name':
                filteredEventData = data.filter((eventData) => eventData.clubname.includes(searchValue))
                  break;
              case 'date':
                filteredEventData = data.filter(eventData => Date.parse(eventData.eventdate) >= Date.parse(searchValue)) 
                  break;

              default:
                filteredEventData = data.filter((eventData) => eventData.artistname.includes(searchValue))
                  break;

          }
      }
    return(
    <>
        {!searchValue ? data.map(eventData => (
            <EventData eventData={eventData} />
        ))
        : filteredEventData.map(eventData => (
              
            <EventData eventData={eventData} />
        ) ) }
    </>
    )
}

export default TableRow;