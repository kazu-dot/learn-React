import { useState } from "react";
import "./styles.css";

export default function App() {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, IncompleteTodos] = useState(["うううう"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="incomplete-area">
                <li className="list-row">{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したtodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div>
                <li key={todo} className="list-row">
                  {todo}
                </li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
