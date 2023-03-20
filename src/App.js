import { useReducer } from 'react';
import './App.css';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'Increment':
        return {
          count: state.count + 1
        };
      case 'Decrement':
        return {
          count: state.count - 1
        }
      default:
        return state
    }
  }

  const initialState = {
    count: 0
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const handelCountIncrement = () => {
    dispatch({ type: 'Increment' })
  }
  const handelCountDecrement = () => {
    dispatch({ type: 'Decrement' })
  }

  return (<div>
    <h1>Counter: {state.count}</h1>
    <button onClick={handelCountIncrement}>Increment</button>
    <button onClick={handelCountDecrement}>Decrement</button>

  </div>)
}

export default App;
