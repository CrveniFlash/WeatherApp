

export default function TimeAndLocation({weatherData: {city_name,datetime, ob_time}}) {

    return (
        <div className="text-white flex flex-col items-center">
            <div className="flex space-x-1 items-center text-lg">
                <h1> {ob_time && `Local Time: ${ob_time}`} </h1>
            </div>
            <div>
                <h1 className="m-8 text-2xl"> {city_name}</h1>
            </div>
        </div>
    )
}