import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex border border-purple-300 bg-slate-50 p-20 rounded-lg">
        <button
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          onClick={() => dispatch(incrementByValue(5))}
        >
          Increment by 5
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
