import heroImage from '../../images/edm-hero-image3.jpg'
import SearchBox from '../search-box/search-box';
import HamburgerMenu from "../hamburger-menu/hamburger-menu";
import { Link} from "react-router-dom";

function Header() {

    return(
    <>
    <section className="hero-section bg-cover bg-center bg-no-repeat  h-2/5 w-full flex flex-col justify-between"
        style={{backgroundImage: `url(${heroImage})` }}>
            <div className="w-full h-12 flex bg-gray-900 bg-opacity-50  backdrop-filter backdrop-blur-sm  text-coolGray-300 justify-between items-center
                    font-semibold text-xl capitalize">
                <Link to="/"><div className="capitalize px-4 
                    transition duration-500 ease-in-out transform
                    hover:text-coolGray-50 hover:-translate-y-1
                    ">find EDM shows vegas</div></Link>
                <div className="hidden sm:flex sm:gap-x-4 px-4">
                    <Link to="/about"><div className="transition duration-500 ease-in-out hover:text-coolGray-50 transform hover:-translate-y-1">about</div></Link>
                    <Link to="/"><div className="mx-4 transition duration-500 ease-in-out hover:text-coolGray-50 transform hover:-translate-y-1">find EDM shows</div></Link>
                    <Link to="/contact"><div className="transition duration-500 ease-in-out hover:text-coolGray-50 transform hover:-translate-y-1">contact</div></Link>
                </div>
                <div className="hidden lg:flex invisible w-3/12">Invisble Element</div>
                <div className="sm:hidden">
                < HamburgerMenu />
                </div>
            </div>
        <section className="navbar sm:h-20 px-0  bg-gray-900 bg-opacity-50  backdrop-filter backdrop-blur-sm  flex flex-col sm:flex-row sm:justify-center sm:items-center"> 
            <div className="w-full sm:flex sm:w-9/12 sm:items-center">
                <SearchBox />
            </div>
        </section>
    </section>
    </>
    )
}

export default Header;