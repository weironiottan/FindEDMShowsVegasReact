
const Contact = () => {
    return(
    <>
        <div className="">
            <form name="contact" method="post" netlify onSubmit="submit">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col  text-coolGray-300 font-semibold text-xl capitalize space-y-5">
                <div className="normal-case">
                    Please contact me if you think I am missing a club, There is a bug or something not working right.
                    If you want a feature added let me know! Currently this is a hobby project, so I will try to get 
                    to it as soon as possible!
                </div>
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
    </>
    )
}

export default Contact;