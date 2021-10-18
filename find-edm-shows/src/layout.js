import Header from './components/header/header';
import TableRow from './components/table/table-row'
import SearchBoxContextProvider from './contexts/searchBoxContext';

function Layout() {

    return (
     <>
    <section className="whole-page min-h-screen font-sans antialiased text-gray-800 bg-gradient-to-br from-coolGray-100 to-warmGray-900">
        <SearchBoxContextProvider>
        <Header />
        <section className="main-section  w-full mx-auto max-w-7xl text-white p-5 ">
            <div className="table  px-5 py-5 w-full  mt-2 bg-gray-900 bg-opacity-60 ">
                <div className="h-120 overflow-y-auto">
                <TableRow /> 
                </div>       
            </div>            
        </section>  
        </SearchBoxContextProvider>            
    </section>
    </>
    )

}
export default Layout;