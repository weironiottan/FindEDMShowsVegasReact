import artistSpecialGuest from '../../images/special-guest-omnia.jpg'
import {Months, Weekdays} from '../../models/months'
import { ArtistImages } from '../../models/artistImages'

function getFormattedMonth(wholeDateStringUTC) {
    const currentMonth = new Date(wholeDateStringUTC).getMonth()
    return Months.find((month, index) => {
        return (index === currentMonth) && month
    }) 
}

function getFormattedDay(wholeDateStringUTC) {
    const currentDay = new Date(wholeDateStringUTC).getDate()
    return currentDay;
}

function getFormattedWeekday(wholeDateStringUTC) {
    const currentWeekday = new Date(wholeDateStringUTC).getDay()
    return Weekdays.find((weekday, index) => {
        return (index === currentWeekday) && weekday
    }) 
}

function getFormattedYear(wholeDateStringUTC) {
    const currentYear = new Date(wholeDateStringUTC).getFullYear()
    return currentYear;
}

function findArtistImage(artistName) {
    const artistObject = ArtistImages().find(artist => {
        return artistName.includes(artist.name) &&  artist.image 
    })
    return !!artistObject ? artistObject.image : artistSpecialGuest
}


const EventData =({eventData}) => {

    return (
    <>
        <div key={eventData._id} className="row bg-gray-400 bg-opacity-20 p-4 sm:p-0 sm:pr-1 my-5 sm:my-2 pr-1 min-h-20 w-full flex flex-wrap sm:flex-nowrap sm:flex-row sm:justify-between hover:shadow-2xl
        items-center transition duration-500 ease-in-out transform hover:-translate-y-1">
            <div className="eventDate h-full mr-auto sm:mr-0 w-1/2 sm:w-1/6 sm:pl-5 flex flex-col sm:justify-center tracking-wider">
                    <div className="month day flex font-bold sm:font-extrabold text-2xl sm:text-3xl">
                        <div className="month font capitalize mr-3">{getFormattedMonth(eventData.eventdate)}</div>
                        <div className="day">{getFormattedDay(eventData.eventdate)}</div>
                    </div>
                    <div className="weekday year flex items-baseline">
                        <div className="weekday font-medium mr-3">{getFormattedWeekday(eventData.eventdate)}</div>
                        <div className="year font-light text-sm">{getFormattedYear(eventData.eventdate)}</div>
                    </div>
            </div>
            <div className="artistName order-first sm:order-none pb-2 sm:pb-0 h-full w-full sm:w-2/5 flex items-center">
                    <div className="hidden sm:flex icon p-4 m-2 h-14 w-14 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage: `url(${findArtistImage(eventData.artistname)})` }}></div>
                    <div className="name sm:pl-5 text-3xl sm:text-2xl font-extrabold sm:font-bold tracking-wider capitalize ">{eventData.artistname} 
                </div>
            </div>
            <div className="hidden sm:flex clubName h-full w-1/5 items-center pl-5">
                <div className="clubName font-semibold text-xl tracking-wider capitalize">{eventData.clubname}</div>
            </div>

            <div className="eventLink h-full w-28  flex items-center justify-center ">
                <a className="view-details sm:rounded-full bg-gray-400 bg-opacity-50 py-2 px-2 capitalize font-semibold hover:bg-opacity-90
                transition duration-200 ease-in-out"
                href={eventData.ticketurl} target="_blank" rel="noreferrer">view event</a>
            </div>
        </div>    
    </>

    )
}

export default EventData;