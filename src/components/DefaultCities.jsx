export default function DefaultCitiesLI({setInputData}) {
    const cities = [
        {
            id: 1,
            title: "Tokyo"
        },
        {
            id: 2,
            title: "Berlin"
        },
        {
            id: 3,
            title: "New York"
        },
        {
            id: 4,
            title: "London"
        },
        {
            id: 5,
            title: "Barcelona"
        },
    ]

    return (
        cities.map(city => {
            return (
                <>
                    <li className="cursor-pointer text-white hover:scale-110 transition ease-out duration-150 "> <button onClick={() => setInputData({city: city.title})} > {city.title} </button> </li>
                </>
            )
        })

    )



}