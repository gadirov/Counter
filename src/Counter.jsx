import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementX } from './Store/CounterSlice';

export default function Counter() {

    const count = useSelector(({counter}) => counter);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={() => dispatch(decrement()) }>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementX(10))}>10+</button>
        <button onClick={() => dispatch(incrementX(20))}>20+</button>
    </div>
  )
}
