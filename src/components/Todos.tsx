import React from "react";
import Todo from "./modes/Todo";
import TodoItem from "./TodoItem";

interface TodosProps {
  todos: Todo[];
}

const Todos = ({ todos }: TodosProps) => {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} todoText={todoItem.text} />
      ))}
    </ul>
  );
};

export default Todos;
