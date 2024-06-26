import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex border border-purple-300 bg-slate-50 p-20 rounded-lg">
        <button
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <h2 className="text-3xl mx-10">{count}</h2>

        <button
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
