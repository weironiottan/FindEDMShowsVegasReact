import heroImage from '../../images/edm-hero-image3.jpg'
import SearchBox from '../search-box/search-box';

function Header() {

    return(
    <>
    <section className="hero-section bg-auto bg-center bg-no-repeat  h-100 w-full flex flex-col justify-end "
        style={{backgroundImage: `url(${heroImage})` }}>
        <section className="navbar h-20 px-0 bg-gray-900 bg-opacity-50  backdrop-filter backdrop-blur-sm  flex justify-center items-center">
            <SearchBox />
        </section>
    </section>
    </>
    )
}

export default Header;