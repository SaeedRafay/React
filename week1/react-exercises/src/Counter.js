import React, {useState} from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
    const [count, setCount] = useState(0);
    const feedback = (count > 10) ? "It's higher than 10!" : "Keep counting...";
    return (
        <div className="Counter">
            <p>{feedback}</p>
            <Count count={count} />
            <Button count={count} setCount={setCount} />
        </div>
    )
}

export default Counter;
