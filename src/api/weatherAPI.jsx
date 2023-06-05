const API_URL = `https://api.weatherbit.io/v2.0/`
const API_KEY = "755dc630483445158c50fe9dfc4e6086"


function unixConvertHH_MM(time) {
    const date = new Date(time * 1000)

    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const converted = `${hours}:${minutes}`

    return converted
}
function unixConvertDD(time) {
    const date = new Date(time * 1000);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to get the correct month (January is 0-indexed)
    const day = date.getDate().toString().padStart(2, '0');
    const converted = `${month}/${day}`
    return converted;
}

function requestAPI(infoType, searchParams) {
    const url = new URL(API_URL + infoType)
    url.search = new URLSearchParams({ ...searchParams, key: API_KEY })

    return fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => err)
}
export async function getHourlyData({ city }) {
    try {
        const data = await requestAPI("forecast/hourly", { city, hours: 5 })
        return hourlyDataFormat(data)
    } catch (err) {
        console.error("Error:" + err)
    }
}
export async function getDailyData({ city }) {
    try {
        const data = await requestAPI("forecast/daily", { city, days: 5 })
        return dailyDataFormat(data)
    } catch (err) {
        console.error(err)
    }
}

export async function getCurrentData({ city }) {
    try {
        const apiData = await requestAPI("current", { city, })
        return currentDataFormat(apiData)
    } catch (err) {
        console.error(err)
        return null
    }
}

function currentDataFormat(data) {
    const {
        weather: { icon, description },
        city_name, country_code, datetime, lat, lon, sunrise, sunset, temp, app_temp, wind_spd, ob_time, rh
    } = data.data[0]

    return { icon, description, city_name, country_code, datetime, lat, lon, sunrise, sunset, temp, wind_spd, ob_time, app_temp, rh }
}

function hourlyDataFormat(data) {
    return data.data.map((e) => {
        return {
            icon: e.weather.icon,
            temp: e.temp,
            time: unixConvertHH_MM(e.ts)
        }
    })
}
function dailyDataFormat(data) {
    return data.data.map((e) => {
        return {
            icon: e.weather.icon,
            temp: e.temp,
            time: unixConvertDD(e.ts)
        }
    })
}