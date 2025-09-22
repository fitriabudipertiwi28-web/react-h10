import { useState } from "react";

const Counter =()=>{
    //let count=0
    const[count, setCount] =useState(0)
    const handleDecrement=()=>{
        setCount(count-1);
    }
    const handleIncrement=()=>{
        setCount(count +1);
    }
    const handleResetCounter=()=>{
        setCount(0);
    }
   return(
    <div style={{
        display: "flex",
        gap: "16px"
    }}>
    <button onClick={handleDecrement} >Kurang </button>
    <p>{count}</p>
    <button onClick={handleIncrement} >Tambah </button>
    <button onClick={handleResetCounter} >Reset </button>

    </div>
   )
}
export default Counter;