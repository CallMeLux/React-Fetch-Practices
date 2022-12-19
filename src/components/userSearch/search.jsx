import { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

//the component function
const Search = () => {
    const [user, setUser] = useState([])
    const id = useRef()

    //I need to now grab user input to place into id to load that particular user.

    {/*this is how a comment is done in a jsx file*/}


    //the actual function that will do the search
    const fetchUsers = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${id.current.value}`)
        .then(response => {
            setUser(response.data)
        })
    }


    //for page refresh
    useEffect(() => {
       
    }, [])

    return (
        //attempting to style and format the information

        <>
            <input placeholder="1-10" ref={id}></input>
            <button onClick={fetchUsers}>Search Users</button>
            {user.length > 0 && (
                <ul>
                    {user.map(user => (
                        <li key = {user.id}> 
                            
                            <tr><th>{user.name}</th></tr>
                        
                            <td>{user.address.street}</td>
                            <td>{user.email}</td>
                            
                        </li>
                ))}
                </ul>
            )}
        </>
    )

}

//search component complete, need to learn to style it better.


export default Search