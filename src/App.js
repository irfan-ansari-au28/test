import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, setCount } from "./store/action";
import { decreaseCount } from "./store/action";
import { useState, useEffect } from "react";
import { fetchUsers } from "./store/user/userAction";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [inputValue, setInputValue] = useState(12);
  const [tc, setTc] = useState(0);
  const [users, setUsers] = useState([]);

  const countInputHandler = (event) => {
    setInputValue(parseInt(event.target.value));
  };
  const userss = useSelector((state) => state.user);
  console.log("userss: ", userss);
  // useEffect(() => {
  //   // dispatch(setCount(inputValue));
  // }, [inputValue, dispatch]);
  const submitHandler = (event) => {
    event.preventDefault();
    setTc(inputValue);
  };

  ///// requesting users

  useEffect(() => {
    const data = dispatch(fetchUsers());
    setUsers(data);
    console.log(data, "data");
  }, [dispatch, setUsers]);

  return (
    <>
      <h1>Synchronous State Manage</h1>
      <h2>Total Count </h2>
      <button
        onClick={() => {
          dispatch(increaseCount());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(decreaseCount());
        }}
      >
        Increase
      </button>
      <h3>Set total Count {tc}</h3>
      <form onSubmit={submitHandler}>
        <label>
          Reset the total count:
          <input
            type="number"
            value={inputValue}
            onChange={countInputHandler}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
