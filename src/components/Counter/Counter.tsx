import React, {useState} from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,decrementByAmount } from '../../features/counter/counterSlice'
import {render} from "@testing-library/react";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
const [inputValueState,setInputValueState]=useState(0)
    console.log("render")
    return (
        <div className="wrapper">
            <div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >+
                </button>
                <div>
                    <input
                        type="text"
                        value={inputValueState}
                        onChange={(e) => setInputValueState(+e.target.value)}
                    />
                    <button onClick={() => dispatch(incrementByAmount(inputValueState))}>
                        ADD
                    </button>
                </div>
                <div>
                    <input
                        type="text"
                        value={inputValueState}
                        onChange={(e) => setInputValueState(+e.target.value)}
                    />
                    <button onClick={() => dispatch(decrementByAmount(inputValueState))}>
                        put away
                    </button>
                </div>
            </div>
        </div>
    )
}