import { useEffect, useState } from 'react';

interface user {
    id: number;
    name: string;
    email: string;
}

function Apicall() {
    const [DATA, SETData] = useState<user[]>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => SETData(data))
            .catch(err => console.log("Bhai Error mjh sy to yeh " + err + " handle nhi ho rha,"))

    }, [])
    return (
        <div>
            <h1>Data from API of User</h1>
            <table style={{ borderCollapse: "collapse" }}>
                <tbody>
                    {DATA.map((users) => (
                        <tr key={users.id} >
                            <td style={{ padding: "12px", border: "2px solid black" }}>{users.id}</td>
                            <td style={{ padding: "12px", border: "2px solid black" }}>{users.name}</td>
                            <td style={{ padding: "12px", border: "2px solid black" }}>{users.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Apicall