import './App.css';
// import EDMEventsTable  from './components/table/edm-events-table';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from './layout';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        < Layout/>
        {/* < EDMEventsTable/> */}
      </>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;