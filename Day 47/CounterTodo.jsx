import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { addTodo, toggleTodo } from "./todosSlice";

function CounterTodo() {
  const count = useSelector(
    (state) => state.counter.count
  );
  const todos = useSelector(
    (state) => state.todos
  );

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <hr />

      <input
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() =>
              dispatch(toggleTodo(todo.id))
            }
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CounterTodo;