
import axios from 'axios';
import { useQuery } from "react-query";

const getEDMEventsResults = async () => {
      const { data } = await axios.get(`https://salty-sea-11177.herokuapp.com/find-edm/all-events`);
      return data    
  }

function EDMEventsTable({ props }) {

    const { isLoading, isError, data, error } = useQuery("edmEventsResults", getEDMEventsResults);

    if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }

    return(
        <ul>
        {data.map(todo => (
          <li key={todo._id}>{todo.clubname}: {todo.artistname} : {todo.eventdate}</li>
        ))}
      </ul>
    )

}

export default  EDMEventsTable