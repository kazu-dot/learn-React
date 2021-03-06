import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div>
              <li key={todo} className="list-row">
                {todo}
              </li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
