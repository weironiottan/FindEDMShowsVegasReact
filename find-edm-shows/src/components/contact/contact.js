
const Contact = () => {
    return(
    <>
        <div className="">
            <div></div>
            <form name="contact" method="post" netlify onSubmit="submit">
            
            <div className="flex flex-col  text-coolGray-300 font-semibold text-xl capitalize space-y-5">
                <label className="flex flex-col">
                    <span className="mb-3">Full name</span>
                    <input
                    type="text"
                    name="name"
                    className="
                    rounded-xl bg-opacity-60 bg-gray-800
                    placeholder-coolGray-300 border-transparent font-semibold
                    transition duration-500 ease-in-out 
                    hover:bg-opacity-80 hover:text-coolGray-100
                    focus:bg-opacity-90 focus:ring focus:border-transparent focus:ring-coolGray-600
                    "
                    placeholder="Name"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="mb-3">Email address</span>
                    <input
                        type="email"
                        name="email"
                        className="
                        rounded-xl bg-opacity-60 bg-gray-800
                        placeholder-coolGray-300 border-transparent font-semibold
                        transition duration-500 ease-in-out 
                        hover:bg-opacity-80 hover:text-coolGray-100
                        focus:bg-opacity-90 focus:ring focus:border-transparent focus:ring-coolGray-600
                        "
                        placeholder="john@example.com"
                        />
                </label>

                <label className="flex flex-col">
                    <span className="mb-3">Additional details</span>
                    <textarea
                        name="details"
                        className="
                        rounded-xl bg-opacity-60 bg-gray-800
                        placeholder-coolGray-300 border-transparent font-semibold
                        transition duration-500 ease-in-out 
                        hover:bg-opacity-80 hover:text-coolGray-100
                        focus:bg-opacity-90 focus:ring focus:border-transparent focus:ring-coolGray-600
                        "
                        rows="3"
                    ></textarea>
                </label>

                <div className="eventLink h-full w-28  flex items-center ">
                    <button className="view-details sm:rounded-full bg-gray-400 bg-opacity-50 p-4 capitalize font-semibold hover:bg-opacity-90
                    transition duration-500 ease-in-out transform hover:-translate-y-1"
                    type="submit">submit</button>
                </div>
            </div>

            </form>
        </div>
        <form name="Demo" netlify method="post">
            <input name="test" type="text" />
            <button type="submit"></button>
        </form>
    </>
    )
}

export default Contact;