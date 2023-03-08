import React from "react";
import Todo from "./modes/Todo";
import TodoItem from "./TodoItem";

interface TodosProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos = ({ todos, onRemoveTodo }: TodosProps) => {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoText={todoItem.text}
          onRemoveTodo={onRemoveTodo.bind(null, todoItem.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
