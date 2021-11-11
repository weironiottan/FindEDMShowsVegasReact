import Header from './header/header';
import TableRow from './table/table-row'
import About from './about/about'
import SearchBoxContextProvider from '../contexts/searchBoxContext';
import { Route, Routes } from "react-router-dom";
import Contact from './contact/contact';

function MainLayout() {

    return (
     <>
    <section className="whole-page h-screen font-sans antialiased text-gray-800 bg-gradient-to-br from-coolGray-100 to-warmGray-900">
        <SearchBoxContextProvider>
        <Header />
        <Routes>
            <Route path="/" element={
                <section className="main-section h-3/5 p-5 mx-auto max-w-7xl text-white">
                    <div className="table h-full w-full p-5 mt-2 bg-gray-900 bg-opacity-60 ">
                        <div className="h-full overflow-y-auto">
                        <TableRow /> 
                        </div>       
                    </div>            
                </section>  
            
            }>
            </Route>
            <Route path="about" element={
                <section className="main-section h-3/5 p-5 mx-auto max-w-7xl text-white">
                    <div className="table h-full w-full p-8 mt-2 bg-gray-900 bg-opacity-60 ">
                        <About />
                    </div>
                </section>
            }>
            </Route>
            <Route path="contact" element={
                <section className="main-section h-3/5 p-5 mx-auto max-w-7xl text-white">
                    <div className="table h-full w-full p-8 mt-2 bg-gray-900 bg-opacity-60">
                        <Contact />
                    </div>
                </section>
            }>
            </Route>
        </Routes>
        </SearchBoxContextProvider>            
    </section>
    </>
    )
}
export default MainLayout;