import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";

function Counter() {
    //component can access the state by useSelector hook
    const counterValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    console.log(counterValue)
    const [range, setRange] = useState(1);
    console.log(range)

    return <>
        <div className="d-flex flex-column align-items-center justify-content-center w-100">
            <h2 className='text-primary' style={{ fontSize: '85px', color: 'black' }}>{counterValue}</h2>
            <div className="mt-5">
                <button className="btn btn-warning p-2 rounded" onClick={()=> dispatch(decrement(Number(range)))}>Decrement</button>
                <button className="btn btn-success p-2 rounded ms-3"onClick={()=> dispatch(increment(Number(range)))}>Increment</button>
                <button className="btn btn-danger p-2 rounded ms-3"onClick={()=> dispatch(reset())} style={{width:'120px'}}>Reset</button>
            </div>
        </div>
        <div><input type="text"className="form-control mt-3 w-100 border border-primary rounded" placeholder="Enter the Range" onChange={(e) => setRange(e.target.value)}/></div>
    </>;
}

export default Counter;
