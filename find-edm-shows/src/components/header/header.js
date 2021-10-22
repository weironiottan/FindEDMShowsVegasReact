import heroImage from '../../images/edm-hero-image3.jpg'
import SearchBox from '../search-box/search-box';

function Header() {

    return(
    <>
    <section className="hero-section bg-auto bg-center bg-no-repeat  h-390 w-full flex flex-col justify-end space-y-36"
        style={{backgroundImage: `url(${heroImage})` }}>
            <div className="self-center  p-5 bg-gray-900 bg-opacity-30 rounded-3xl backdrop-filter backdrop-blur-sm font-bold 
            filter drop-shadow-3xl text-7xl tracking-widest uppercase font-mono text-white">find edm shows in vegas</div>
        <section className="navbar h-20 px-0 bg-gray-900 bg-opacity-50  backdrop-filter backdrop-blur-sm  flex justify-center items-center">
            <SearchBox />
        </section>
    </section>
    </>
    )
}

export default Header;