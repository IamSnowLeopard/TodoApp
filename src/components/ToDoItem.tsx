// Importing CSS styles for the component
import "../ToDoApp.css";

// Interface defining the props expected by the TodoItem component
// Includes the todo item object and functions for marking an item as completed and deleting an item
interface TodoItemProps {
  item: {
    text: string;
    completed: boolean;
  };
  onComplete: () => void;
  onDelete: () => void;
}

// The TodoItem functional component displays an individual todo item
// It shows the todo's text, and buttons for marking it as complete and deleting it
export default function TodoItem({
  item,
  onComplete,
  onDelete,
}: TodoItemProps) {
  return (
    // Each todo item is rendered as a list item (<li>) with a specific class for styling
    <li className="todo-item">
      <span
        className="todo-text"
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.text}
      </span>
      <div className="todo-buttons">
        <button className="complete-button" onClick={onComplete}>
          Done!
        </button>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
