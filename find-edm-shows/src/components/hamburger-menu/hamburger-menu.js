import { useState } from "react"
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>

    <div className="  py-6 flex flex-col justify-center sm:py-12  sm:h-12 sm:w-12">
        <div className="relative py-3 sm:max-w-xl mx-auto">
            <nav>
                <button className="relative  w-10 h-10 rounded
                bg-opacity-60 bg-gray-900 text-coolGray-300
                transition duration-500 ease-in-out 
                hover:bg-opacity-80 hover:text-coolGray-100
                focus:border-transparent
                transform hover:-translate-y-1
                " 
                onClick={() => setIsOpen(!isOpen)}>
                    <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45" : '-translate-y-1.5'}` }></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen && "opacity-0"}` }></span>
                        <span aria-hidden="true" className= {`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}` }></span>
                    </div>

                    {isOpen && (
                    <div className="absolute mt-2 py-2 px-4 top-10 right-0 bg-opacity-80 flex flex-col items-end
                    bg-gray-800 text-coolGray-300 rounded-xl font-semibold text-lg capitalize" onClick={() => setIsOpen(!isOpen)}>
                        <Link to="/"><div className="block ">home</div></Link>
                        <Link to="/about"><div className="block">about</div></Link>
                        <Link to="/contact"><div className="block">contact</div></Link>
                    </div>
                )}
                </button>
            </nav>
        </div>
    </div>
        
    </>
    )
}

export default HamburgerMenu;

