import { useState } from "react";
import Todo from "./components/modes/Todo";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmit = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <>
      <NewTodo onAddTodo={onSubmit} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
