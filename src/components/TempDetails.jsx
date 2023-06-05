import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

export default function TempDetails({weatherData: {description, sunrise, sunset, temp, wind_spd, app_temp, rh, icon}}) {
    return (
        <div className='text-white flex flex-col items-center'>
            <div>
                <h1 className='text-lg text-[#4e7495]  mb-8'>{description}</h1>
            </div>
            <div className=''>
                <div className=''>
                    <div className='flex justify-between items-center w-full '>
                        {/* icon */}
                        <img src={`https://cdn.weatherbit.io/static/img/icons/${icon}.png`} className='scale-50'></img>
                        {/* temo */}
                        <h1 className='text-2xl'>{Math.round(temp) + "°C"}</h1>
                        {/* details */}
                        <div className='flex flex-col'>
                            <span> <ThermostatIcon /> Feels Like: {Math.round(app_temp)}°C</span>
                            <span> <AirIcon /> Wind: {Math.round(wind_spd)} km/h</span>
                            <span> <WaterDropIcon /> Humidity: {rh}%</span>
                        </div>
                    </div>

                </div>
                <div className='text-sm space-x-2 mt-8'>
                    <span><WbSunnyIcon /> Rise: {sunrise} </span>
                    <span>|</span>
                    <span> <WbTwilightIcon /> Set: {sunset} </span>
                    <span>|</span>
                    <span><WbSunnyIcon /> High: 38°C </span>
                    <span>|</span>
                    <span> <WbSunnyIcon /> Low: 22°C </span>

                </div>
            </div>
        </div>
    )
}