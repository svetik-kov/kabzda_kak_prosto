import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

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

export const ControlledInput=()=>{
    const [inputValue,setInputValue]=useState('')

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.currentTarget.value)
    }
   return(
       <div>
           <input value={inputValue} onChange={onChangeHandler}/>
       </div>
   )
}

export const ControlledCheckBox=()=>{
    const [inputValue,setInputValue]=useState(true)

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.currentTarget.checked)
    }
    return(
        <div>
            <input type='checkbox' checked={inputValue} onChange={onChangeHandler}/>
        </div>
    )
}

export const ControlledSelect=()=>{
    const [selectValue,setSelectValue]=useState<string|undefined>(undefined)

    const onChangeHandler=(e:FormEvent<HTMLOptionElement>)=>{
        setSelectValue(e.currentTarget.value)
    }
    return(
        <select>
            <option value={selectValue} onChange={onChangeHandler}>none</option>
            <option value={1}>Minsk</option>
            <option value={2}>Mogilev</option>
            <option value={3}>Gomel</option>
        </select>
    )

}