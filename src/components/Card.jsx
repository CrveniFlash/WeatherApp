import DefaultCitiesLI from "./DefaultCities"
import Inputs from "./Inputs"
import TimeAndLocation from "./TimeAndLocation"
import TempDetails from "./TempDetails"
import Forecast from "./Forecast"
import { useEffect, useState } from "react"
import { getCurrentData, getDailyData, getHourlyData } from "../api/weatherAPI"


export default function WeatherCard() {
    const [data, setData] = useState({city: "Bihac"})
    const [hourlyData, setHourlyData] = useState([])
    const [dailyData, setDailyData] = useState([])
    const [inputData, setInputData] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const currentHourlyData = await getHourlyData(inputData)
                const currentDailyData = await getDailyData(inputData)
                const currentWeatherData = await getCurrentData(inputData)
                setData({ current: currentWeatherData })
                setHourlyData(currentHourlyData)
                setDailyData(currentDailyData)

            } catch (err) {
                console.error("Error: " + err)
                return null
            }
        }
        getData()
    }, [inputData])


    return (
        <div className="flex justify-center items-center mt-8">
            <div className="bg-[#1d2d44] rounded w-[600px] px-12 pt-12">
                <ul className="flex justify-center space-x-5">
                    <DefaultCitiesLI setInputData={setInputData} />

                </ul>
                <Inputs setInputData={setInputData} />
                {data.current &&
                    <div>
                        <TimeAndLocation weatherData={data.current} />
                        <TempDetails weatherData={data.current} />

                        <Forecast items={hourlyData} title="Hourly Forecast" />
                        <Forecast items={dailyData} title="Daily Forecast" />
                    </div>
                }
            </div>
        </div>
    )
}