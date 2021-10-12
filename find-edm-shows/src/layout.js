import TableRow from './components/table/table-row'
import heroImage from './images/edm-hero-image3.jpg'
import artistMartinGarrix from './images/martin-garrix.png'

function Layout() {

    return (
        <>
        <section className="whole-page min-h-screen font-sans antialiased text-gray-800 bg-gradient-to-br from-coolGray-100 to-warmGray-900
        00">
                <section className="hero-section bg-auto bg-center bg-no-repeat  h-100 w-full flex flex-col justify-end "
                    style={{backgroundImage: `url(${heroImage})` }}>
                    <section className="navbar h-20 px-0 bg-gray-900 bg-opacity-50  backdrop-filter backdrop-blur-sm  flex justify-around items-end ">

                        <div className="h-8 w-36 text-gray-200 font-extrabold text-center text-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                            Home
                        </div>
                        <div className="h-8 w-36 text-gray-200 font-extrabold text-center text-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                            Find By Artist
                        </div>
                        <div className="h-8 w-36 text-gray-200 font-extrabold text-center text-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                            Find by Date
                        </div>
                        <div className="h-8 w-36 text-gray-200 font-extrabold text-center text-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                            Fun Things
                        </div>
                    </section>
                </section>
                <section className="main-section  w-full mx-auto max-w-7xl text-white px-5 py-5 ">
                    <div className="table  px-5 py-5  mt-2 bg-gray-900 bg-opacity-60 ">
                        <div className="h-120 overflow-y-auto">
                        <TableRow /> 
                        </div>       
                    </div>            
                </section>              
        </section>
        </>
    )

}
export default Layout;

                        {/* <div className="row bg-gray-400 bg-opacity-20 pr-1 h-20 w-full flex justify-between my-2 hover:shadow-2xl 
                            transition duration-500 ease-in-out transform hover:-translate-y-1">
                                <div className="eventDate h-full w-1/6   flex flex-col justify-center pl-5 tracking-wider">
                                        <div className="month day flex font-extrabold text-3xl">
                                            <div className="month font capitalize mr-3">oct</div>
                                            <div className="day">24</div>
                                        </div>
                                        <div className="weekday year flex items-baseline">
                                            <div className="weekday font-medium mr-3">Saturday</div>
                                            <div className="year font-light text-sm">2021</div>
                                        </div>
                                </div>
                                <div className="artistName h-full w-2/6  flex items-center pl-5">
                                        <div className="icon p-2 m-2 h-14 w-14 rounded-full bg-cover bg-center bg-no-repeat"
                                        style={{backgroundImage: `url(${artistMartinGarrix})` }}></div>
                                        <div className="name pl-5 text-2xl font-bold tracking-wider capitalize ">martin garrix 
                                    </div>
                                </div>
                                <div className="clubName h-full w-1/5  flex items-center pl-5">
                                    <div className="clubName font-semibold text-xl tracking-wider capitalize">omnia night club</div>
                                </div>

                                <div className="eventLink h-full w-28  flex items-center justify-center ">
                                    <a className="view-details rounded-full bg-gray-400 bg-opacity-50 py-2 px-2 capitalize font-semibold hover:bg-opacity-90
                                    transition duration-200 ease-in-out"
                                    >view event</a>
                                </div>
                        </div>   */}    