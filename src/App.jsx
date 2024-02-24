import { useState } from 'react';
import classes from './App.module.css';

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className={classes.container}>
            <h1>Webpack JS config + Jest config</h1>
            <button className={classes.button} onClick={increment}>
                Count {count}
            </button>
        </div>
    );
};

export default App;
