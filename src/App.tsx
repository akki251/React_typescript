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

  const removeHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <NewTodo onAddTodo={onSubmit} />
      <Todos todos={todos} onRemoveTodo={removeHandler} />
    </>
  );
}

export default App;
