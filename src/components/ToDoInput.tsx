// Importing the useState hook from React for managing component state
import { useState } from "react";

// Importing CSS styles
import "../ToDoApp.css";

// Defining the props type for TodoInput component using an interface
// onAdd is a function prop for adding a new todo item
interface TodoInputProps {
  onAdd: (input: string) => void;
}

// The TodoInput functional component allows users to input new todo items
export default function TodoInput({ onAdd }: TodoInputProps) {
  // State for storing the current input value, initialized as an empty string
  const [input, setInput] = useState("");

  // Function to handle the submission of a new todo
  // It checks if the input is not just whitespace before calling onAdd and clearing the input field
  const handleSubmit = () => {
    if (input.trim() !== "") {
      onAdd(input.trim());
      setInput("");
    }
  };

  // Function to trigger handleSubmit when the "Enter" key is pressed
  // Prevents the need for a separate submit button
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  // Rendering the input field
  // onChange updates the state with the current input value
  // onKeyDown checks for the "Enter" key press to submit the input
  // The "my-input" class is applied for styling
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Add Todo..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="my-input"
      ></input>
    </div>
  );
}
