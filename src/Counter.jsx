import { useState } from "react"
import "./style.css"

export default function Counter(){
    const [count, setCount]= useState(0)
    const [number,setNumber]= useState(0)

    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
    function handleNumber(e){
        console.log(e, "this is the e")
        console.log("click", e.target.value)
        setNumber(e.target.value)

    }
    function handleButton(){
        console.log(typeof number ,typeof count , "number and count ")
        setCount(parseInt(number) + count)
    }

    return (
        <div className="container">
            <h2 className="header">You clicked: {count} times</h2>
            <div>
            <input value={number} type="number" onChange={handleNumber}/>
            <button onClick={handleButton} className="addValue">Add Value</button>
            </div>
            <div className="buttons">
            <button className="but" onClick={increment}>Increase</button>
            <button className="but" onClick={decrement}>Decrease</button>
            </div>
        </div>
    )
}