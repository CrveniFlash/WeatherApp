/* eslint-disable react/jsx-key */
export default function Forecast({ items, title }) {
    return (
        <div className="" >
            <div className="text-white mx-8 mt-4">
                <div className="border-b ">
                    <h1 className="text-xl mb-2"> {title} </h1>
                </div>
                <div className="flex justify-between my-4">
                    {
                        items.map((item, i) => {
                            return (
                                <div key={i} className="">
                                    <div className=" items-center">
                                        <span> {item.time} </span>
                                        <span>
                                            <img className="h-8" src={`https://cdn.weatherbit.io/static/img/icons/${item.icon}.png`} alt="" />
                                        </span>
                                        <span> {Math.floor(item.temp) + "°C"} </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}