import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);
    
    const implement = () => {
        setCount(count + 1)
    };

    return (
        <div className={classes.button}>
            <h1>{count}</h1>
            <button onClick={implement}>implement</button>
        </div>
    );
};
