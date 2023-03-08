import React from "react";

interface TodoItemPros {
  todoText: string;
  onRemoveTodo: () => void;
}

const TodoItem = ({ todoText, onRemoveTodo }: TodoItemPros) => {
  return <li onClick={onRemoveTodo}>{todoText}</li>;
};

export default TodoItem;
