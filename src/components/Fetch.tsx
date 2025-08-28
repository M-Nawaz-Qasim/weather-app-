import { useEffect, useState } from 'react'
interface Weather {
    city: {
        name: string;
        country: string;
    }
    list: {
        dt: number;
        main: {
            temp: number;
            presure: number;
            description: string;
        }
        wind: {
            speed: number;
        }
    }[];
}
function Fetch() {
    const [Data, SetData] = useState<Weather | null>(null);
    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Mianwali&appid=2ac3bbc38ab3ee9a8d356ce80137e683&units=metric")
            .then((res) => res.json())
            .then((data) => { SetData(data), console.log(data) })
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            {
                Data ? (
                    <>
                        <p>{Data.city.name}</p>
                        {Data.list.map((e, index) => (<p key={index}>{e.dt}</p>))}
                    </>
                ) : (<p className="text-4xl">Yarr thora sa Sabar kr lo, mei Data leina gya hoa houn Weather Website keh Server sy, thora sa wait kr lo bas</p>)
            }
        </>
    )
}

export default Fetch
