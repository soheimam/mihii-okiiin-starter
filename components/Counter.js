import { useState } from "react";

function Counter({pageName}) {

    const [count, setCount] = useState(10);

    return (  
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl text-indigo-600'> How many clicks on { pageName } { count }</h2>
            <button onClick={() => setCount(count + 1)} className='my-6 py-2 px-4 bg-indigo-900 max-w-sm rounded-3xl text-white font-bold hover:bg-indigo-200 focus:ring focus:ring-violet-300'>
                Click me to add
            </button>
            <button onClick={() => setCount(count - 1)} className='my-6 py-2 px-4 bg-indigo-900 max-w-sm rounded-3xl text-white font-bold hover:bg-indigo-200 focus:ring focus:ring-violet-300'>
                Click me to remove
            </button>
        </div>    
    );
}

export default Counter;