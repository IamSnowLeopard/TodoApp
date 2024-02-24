// Importing the useState hook from React for state management
import { useState } from "react";

// Importing custom components for input and list display
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";

// Importing CSS styles for the app
import "./ToDoApp.css";

// Defining the shape of a single todo item using an interface
interface Todo {
  text: string;
  completed: boolean;
}

// Main functional component for the Todo application
export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]); //// State hook for managing an array of todos, initialized as an empty array

  // Function to add a new todo to the list
  // It takes the text for the todo, creates a new todo object, and updates the state
  const addTodo = (text: string) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Function to toggle the completed status of a todo item
  // It takes the index of the todo to be updated, modifies its completed status, and updates the state
  const completeTodo = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  // Function to delete a todo from the list
  // It takes the index of the todo to be deleted, filters it out from the list, and updates the state
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Rendering the Todo app
  // Includes a title, the TodoInput component for adding new todos, and the TodoList component for displaying the list
  return (
    <>
      <h1 className="todo-title">Todo App</h1>
      <div className="todo-container">
        <div className="todo-input">
          <TodoInput onAdd={addTodo} />
        </div>
        <div className="todo-list">
          <TodoList
            items={todos}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </>
  );
}
