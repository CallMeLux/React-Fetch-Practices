import logo from './logo.svg';
import './App.css';
import Search from './components/userSearch/search';
import TodoList from './components/todoList/todoList';
import { useState } from 'react';

function App() {
 
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <Search />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
