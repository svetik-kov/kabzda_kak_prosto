import {memo, useMemo, useState} from 'react';

export default {
    title: 'React.memo demo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result ror a:{resultA}
        </div>
        <div>
            Result ror b:{resultB}
        </div>
    </>
}


const UserSecret = (props: { users: Array<string> }) => {
    debugger
    console.log('UserSecret')
    return <div>
        {props.users.map((u, i) => <div key={i}> {u}</div>)}
    </div>
}
const Users = memo(UserSecret)
export const HelpForReactMemoExample = () => {
    console.log('HelpForReactMemoExample')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Masha', 'Sasha'])

const newArray=useMemo(()=>{
  return  users.filter(u => u.toLowerCase().indexOf('a') !== -1)
},[users])
    return <>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <div>
            <Users users={newArray}/>
        </div>


    </>
}