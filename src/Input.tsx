import React, {ChangeEvent, useRef, useState} from 'react';

export const UnControlledInput = () => {
    const [value,setValue]=useState('')

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)}
    return (
        <>
<input onChange={onChangeHandler}/>-{value}-
        </>
    );
};

export const GetValueOfUnControlledInputByButton=()=>{
    const [value,setValue]=useState('')
    const inputRef=useRef<HTMLInputElement>(null)

    const save=()=>{
        const el=inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return(
        <>
<input ref={inputRef}/> <button onClick={save}>save</button>-actual value:{value}
        </>
    )
}
