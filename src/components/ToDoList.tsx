// Importing the TodoItem component to render each todo item in the list
import TodoItem from "./ToDoItem";

// Importing CSS styles for the TodoList component
import "../ToDoApp.css";

// Defining the structure of a TodoItem object
interface TodoItem {
  text: string;
  completed: boolean;
}

// Defining the props expected by the TodoList component
interface TodoListProps {
  items: TodoItem[];
  onComplete: (index: number) => void;
  onDelete: (index: number) => void;
}

// The TodoList functional component displays a list of todo items
export default function TodoList({
  items,
  onComplete,
  onDelete,
}: TodoListProps) {
  // Rendering the list of todo items as an unordered list (<ul>)
  return (
    <ul>
      {items.map((item: TodoItem, index: number) => (
        <TodoItem
          key={index}
          item={item}
          onComplete={() => onComplete(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}
