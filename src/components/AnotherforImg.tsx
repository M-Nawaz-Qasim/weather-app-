import { useEffect, useState } from 'react'
interface cat {
  id: number;
  url: string;
}
function AnotherforImg() {
  const [Data, FitData] = useState<cat[]>([]);
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(res => res.json())
      .then((set) => { FitData(set) })
      .catch(err => console.log("Bhai Error mjh sy to yeh " + err + " handle nhi ho rha,"))
  }, [])
  return (
    <>
      <h2>Data coming from Dog Api</h2>
      {Data.length > 0 ?
        Data.map((item) => {
          return <img key={item.id} src={item.url} alt="images of the cat" width="280px" height="300px" style={{ border: "2px solid green", margin: "10px" }} />
        }) : (
          <p>Bhai Thora sa wait kr lo Data aa rha hay</p>)
      }
    </>
  )
}

export default AnotherforImg    