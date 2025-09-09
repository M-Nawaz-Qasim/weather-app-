import { useEffect, useState } from 'react'
interface Weather {
    city: {
        name: string;
        country: string;
    }
    list: {
        dt_txt: null;
        main: {
            temp: number;
            presure: number;
            description: string;
            feels_like: number;
        }
        wind: {
            speed: number;
        }
        weather: {
            description: string;
            icon: string;
        }[];
    }[];
}
function Fetch() {
    const [dateTime, setDateTime] = useState(new Date());
    const [Data, SetData] = useState<Weather | null>(null);
    const [cityInput, setCityInput] = useState("");
    const [city, setCity] = useState("Mianwali");

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2ac3bbc38ab3ee9a8d356ce80137e683&units=metric`)
            .then((res) => res.json())
            .then((data) => { SetData(data), console.log(data) })
            .catch((err) => console.log(err))
    }, [city])
    return (
        <>
            <h1 className="text-4xl font-bold">Weather App by Muhammad Nawaz</h1>
            <div className="flex items-center">
                <input type="text"
                    onChange={(e) => setCityInput(e.target.value.toLowerCase())}
                    placeholder="Enter city..."
                    className="mx-2 lg:mx-10 border p-2 rounded" />

                <button className="p-2 ml-2 mt-2 rounded-2xl" onClick={() => (setCity(cityInput))}>
                    <img src="./images/search.svg" alt="search Icon" />
                </button>
            </div>

            {

                Data && Data.city ? (
                    <>
                        <div className="flex flex-wrap justify-between items-center px-2 lg:px-10">
                            <p>Result for <span className="font-bold"> {Data.city.name}</span></p>
                            <h2 className='w-60 font-bold text-xl'>{dateTime.toString().toLocaleString()}</h2>
                        </div>
                        <div className="flex items-center justify-start">
                            <img src={`http://openweathermap.org/img/wn/${Data.list[0].weather[0].icon}@2x.png`} alt="weather icon" />
                            <div className="flex flex-col">
                                <h2 className="text-6xl font-medium">{Data.list[0].main.temp}°C</h2>
                                <h3>feel like {Data.list[0].main.feels_like}</h3>
                            </div>
                        </div>
                        <p className='px-10 text-2xl pb-4'>{Data.list[0].weather[0].description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 overflow-auto px-3">
                            {Data.list.slice(0, 12)  .map((e, index) => (
                                <>
                                    <div className="flex flex-col items-center bg-gray-400 rounded-2xl px-2" key={index}>
                                        <img src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt="weather icon" />
                                        <p>{e.weather[0].description}</p>
                                        <p>{e.dt_txt}</p>
                                    </div>
                                </>
                            ))}
                        </div>
                    </>
                ) : (<p className="text-4xl">No Data Found</p>)
            }
        </>
    )
}

export default Fetch
