import {memo, useState} from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <span style={{padding: '5px'}}>{props.count}</span>
}

const UserSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}> {u}</div>)}
    </div>
}
const Users = memo(UserSecret)
export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Masha', 'Sasha'])
    const [title, setTitle] = useState('')
    const addUser = (title: string) => {
        const newUser = title + new Date().getTime()
        setUsers([newUser, ...users])
        setTitle('')
    }
    return <>
        <NewMessageCounter count={counter}/>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <div>
        <input value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={() => addUser(title)}>add user</button>
        <Users users={users}/>
        </div>


    </>
}