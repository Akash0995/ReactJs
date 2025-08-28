import React, {useState} from 'react'

function Counter()
{
    const [count,setCount] = useState(0);
    const incrementVal = () =>
    {
        setCount(count => count+1);
        setCount(count => count+1);
        setCount(count => count+1);
    }
    const resetVal = () =>
    {
        setCount(0);
    }
    const decrementVal = () =>
    {
       setCount(count-1); 
    }
    return(
    <div className="counter-container">
        <p className="counter-display">{count}</p>
        <button className='counter-button' onClick={decrementVal}>Decrement</button>
        <button className='counter-button' onClick={resetVal}>Reset</button>
        <button className='counter-button' onClick={incrementVal}>Increment</button>
        
    </div>
    );
}
export default Counter