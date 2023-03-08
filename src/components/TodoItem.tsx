import React from "react";

interface TodoItemPros {
  todoText: string;
}

const TodoItem = ({ todoText }: TodoItemPros) => {
  return <li>{todoText}</li>;
};

export default TodoItem;
