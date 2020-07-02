import React from "react"

export default function Counter({ counter, increment, decrement }) {
    return (<>

        <h1>Hello Counter: {counter}</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>)
}