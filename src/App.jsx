import { useEffect, useRef, useState } from 'react';

import './App.css';
import Demo from './Demo';
function App() {
    // using react compiler
    'use memo';
    const ref = useRef(null);
    useEffect(() => {
        ref.current.value = 1000;
    }, []);
    const [count, setCount] = useState(0);
    return (
        <>
            <Demo placeholder={'Enter name'} ref={ref} />
            {count} <br />
            <button onClick={() => setCount((prev) => prev + 1)}>Count++</button>
        </>
    );
}

export default App;
