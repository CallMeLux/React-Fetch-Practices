import { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
import styled from 'styled-components';

//stylings

const StyledInput = styled.input`
  
  margin: 20px 20px;
  border: 1px solid lightblue;
  
`;




//the component function
const Search = () => {
    const [user, setUser] = useState([])
    const [todos,setTodos] = useState([])
    const [count, setCount] = useState(0)
    const id = useRef()

    //for todos
    

    //I need to now grab user input to place into id to load that particular user.

    {/*this is how a comment is done in a jsx file*/}


    //the actual function that will do the search
    const fetchUsers = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${id.current.value}`)
        .then(response => {
            setUser(response.data)
        })
    }
    


    //a function to fetch todos based on the current user
    const fetchTodos = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id.current.value}`)
        .then(response => {
            setTodos(response.data)
        })
    }



    //this function does not work currently.
    const countCompleted = () => {
 
        if(todos.completed === true){
            setCount(count => count + 1)
        }
    }


    //need a function to use a conditional to update count based on completed todos. 
    //or, I may need the context of the todos to get an accurante count.

    //for page refresh
    useEffect(() => {
       
    }, [])

    return (
        //attempting to style and format the information

        <>
            <StyledInput placeholder="1-10" data-testid="searchInput" ref={id} />
            <Button 
                variant="contained" 
                color ="primary" 
                size="small"
                onClick={fetchUsers} data-testid="search-user-button">Search Users
            </Button>

            {user.length > 0 && (
                
                <ul>
                    {user.map(user => (
                        <table>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            
                            <tr key = {user.id}> 
                                
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street}</td>
                                
                            </tr>
                        </table>
                ))}
                </ul>
            )}

                        {/*to be turned into a component soon */}
                        <Button
                            variant="outlined"
                            color="success"
                            size="medium"
                            onClick={fetchTodos}>Check Todos
                        </Button>

                        {todos.length > 0 && (
                            <ul>
                                {todos.map(todos => (
                                    <li key = {todos.id}>
                                        {todos.title}
                                        <span>
                                            <input type="checkbox" checked={todos.completed} />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}



        </>
        
    )

}

//search component complete, need to learn to style it better.


export default Search