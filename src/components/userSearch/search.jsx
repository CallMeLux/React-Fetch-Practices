import { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Search = () => {
    const [user, setUser] = useState([])
    const id = useRef()
    

    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            setUser(response.data)
        })
    }


    useEffect(() => {
       
    }, [])

    return (
        
        <div>
            <button onClick={fetchUsers}>Search Users</button>
            {user.length > 0 && (
                <ul>
                    {user.map(user => (
                        <li key = {user.id}> 
                            <table>
                            <tr><th>{user.name}</th></tr>
                        
                            <tb>{user.address.street}</tb>
                            <td>{user.email}</td>
                            </table>
                        </li>
                ))}
                </ul>
            )}
        </div>
    )

}




export default Search