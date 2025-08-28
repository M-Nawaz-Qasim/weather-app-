import { useEffect, useState } from 'react'

interface item {
  id: number;
  url: string;
}

function Apicallforimage() {
  const [Data, SetData] = useState<item[]>([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=10&api_key=live_UDmBEWbXwaFq2Hlou216F6VrCswj4LkEk2hn3dk4PK73AJHQh0Gie0YKgcrbfEGS")
      .then((res) => res.json())
      .then((data) => { SetData(data) })
      .catch(err => console.log("Bhai Error mjh sy to yeh " + err + " handle nhi ho rha,"))

  }, [])
  return (
    <div>
      <h2>Data coming from Dog Api</h2>
      {
        Data.length > 0 ? (
          Data.map((item) => <img key={item.id} src={item.url} alt="" width="280px" height="300px" style={{ border: "2px solid red", margin: "10px" }} />)
        ) : (
          <p>ruko zra sabr kro</p>
        )
      }
    </div>
  )
}

export default Apicallforimage