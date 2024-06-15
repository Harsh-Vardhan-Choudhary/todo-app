import { useState } from 'react'
import './counter.css'
import CounterButton from './CounterButton'

import { PropTypes } from 'prop-types'

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count+by)
    }

    function decrementCounterParentFunction(by) {
        setCount(count-by)
    }

    function resetParentFunction() {
        setCount(0)
    }


    return (
        <>
        <span className="count">{count}</span>
        <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        <button className="resetButton" onClick={resetParentFunction}>Reset</button>
        </>
    )
}