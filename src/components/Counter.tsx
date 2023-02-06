import { useState } from 'react';
import classes from './Counter.module.scss'

const Counter = () => {

    const [count, setCount] = useState(0)

    const setcounthandle = () => setCount(count + 1) 

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.button} onClick={setcounthandle}>plus</button>
        </div>
    );
};

export default Counter;