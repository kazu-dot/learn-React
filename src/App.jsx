import "./styles.css";

export default function App() {
  return (
    <>
      <div className="input-area">
        <input placeholder="todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          <li className="list-row">あああああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したtodo</p>
        <ul>
          <li className="list-row">いいいい</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
}
