

const About = () =>  {

    return(
        <div className="shadow-2xl bg-gray-400 bg-opacity-20 space-y-8 rounded-xl p-4 h-full w-full overflow-y-auto
            flex flex-col text-coolGray-300 font-semibold text-lg tracking-wider">

            <div className="">
                Find EDM Shows Vegas will display all of the EDM shows that are upcoming in
                Las Vegas. Currently it pulls EDM Shows from day and night clubs that are specifically playing 
                Dance Music. In no particular order this includes:
            </div>

            <div className="">
                <ul className="px-4 list-disc">
                    <li>Ayu Dayclub</li>
                    <li>Ayu Nights</li>
                    <li>Zouk</li>
                    <li>Moonbeam</li>
                    <li>XS</li>
                    <li>Encore Beach Club</li>
                    <li>EBC At Night</li>
                    <li>Hakassan</li>
                    <li>Omnia</li>
                    <li>Jewel</li>
                    <li>Marquee</li>
                    <li>Wet Republic</li>
                </ul>
            </div>

            <div className="">
                From my own research that covers all of the day/night clubs that play Dance Music. However
                if you feel like I missed a particular club that consistently plays Dance Music, contact me
                and I will get it added to the list, All event information is updated every 24 hours to make 
                sure this site has the most up to date information.
            </div>

            <div className="">
                This website or specifically web app was created out of a combination of my love for Dance
                Music and my love for software design and programming and a problem I was encountering.
            </div>

            <div className="">
                I live fairly close to Las Vegas, and tend to go every two or three months to see various EDM
                DJs. One thing that I quickly realized is that the websites that aggregate EDM shows in Las Vegas
                either don't collect all of the events from all the clubs or don't have the most up to date event
                information. I ended up looking up every club site in vegas in order to figure out what EDM show 
                to go to next. There had to be a better way, so I built it. If you are curious about the technical
                implementation it is listed here: 
                <a href="https://github.com/weironiottan/FindEDMShowsVegasReact" target="_blank" rel="noreferrer" 
                className="block transition duration-500 ease-in-out hover:text-coolGray-50 transform hover:-translate-y-1"
                >Github Repository</a>
            </div>

            <div className="">
                Don't be shy, if you like it, contact me! If you don't like it, contact me! for anything else, 
                contact me!
            </div>

            <div className="">
                    That's it! Good Luck and remember be safe out there and have fun!
            </div>

        </div>
    )
}

export default About;