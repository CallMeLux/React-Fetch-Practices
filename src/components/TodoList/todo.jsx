import React, { useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";

const Todo = (props) => {

    const id = props.userId
    const [todos,setTodos] = useState([])

    //a function to fetch todos based on the current user

    const fetchTodos = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id.current.value}`)
            .then(response => {
                setTodos(response.data)
            })
    }


    useEffect(() => {
        
    }, [])

    return (
        <>
            <Button
                variant="contained"
                sx={{m:1}}
                color="success"
                size="medium"
                onClick={fetchTodos}>Check User Todos
            </Button>

            {todos.length > 0 && (
                <ul>
                    {todos.map(todos => (
                        <li key={todos.id}>
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

export default Todo