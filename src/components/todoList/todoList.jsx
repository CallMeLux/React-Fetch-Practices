import { useRef } from "react"
import Todo from "./todo"
import React from "react";

export default function TodoList({todos}){

    const todoInput = useRef();

   return (
    todos.map(todo => {
        return <Todo key={todo} todo = {todo} />
    })
   )

}