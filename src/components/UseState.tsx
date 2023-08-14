import {memo, useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    return 21889378738
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
//const initialValue=useMemo(generateData,[])
    const changer=(state:number)=>state+1
    return <>

        <button onClick={() => setCounter(changer)}>+</button>
        {counter}

    </>
}