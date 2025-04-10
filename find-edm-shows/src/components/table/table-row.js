import axios from 'axios';
import { useQuery } from "react-query";
import { useContext } from 'react';
import { SearchBoxContext } from '../../contexts/searchBoxContext';
import EventData from './event-data';
import {Bars} from "react-loader-spinner";


const getEDMEventsResults = async () => {
    const { data } = await axios.get(`https://edm-events-las-vegas-api-223895091580.us-central1.run.app/find-edm/all-events`);
    return data    
}

function TableRow() {
    let filteredEventData = '';

    const { searchValue } = useContext(SearchBoxContext);
    const { selectedSearchValue } = useContext(SearchBoxContext);

    const { isLoading, isError, data, error } = useQuery("edmEventsResults", getEDMEventsResults);
    

    if (isLoading) {
        return   <div className="flex justify-center items-center pt-20">
            <Bars type="Bars" color="#eeeeee" height={100}width={100} />
        </div>
        
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }

      if (!!searchValue) {
          switch (selectedSearchValue) {
              case 'club name':
                filteredEventData = data.filter((eventData) => eventData.ClubName.includes(searchValue))
                  break;
              case 'date':
                filteredEventData = data.filter(eventData => Date.parse(eventData.EventDate) >= Date.parse(searchValue))
                  break;

              default:
                filteredEventData = data.filter((eventData) => eventData.ArtistName.includes(searchValue))
                  break;

          }
      }
    return(
    <>
        {!searchValue ? data.map( (eventData,index) => (
            <EventData key={index} eventData={eventData} />
        ))
        : filteredEventData.map( (eventData,index) => (

            <EventData key={index} eventData={eventData} />
        ) ) }
    </>
    )
}

export default TableRow;