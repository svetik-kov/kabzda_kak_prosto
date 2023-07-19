import {reducer, StateType} from './Reducer';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

test('collapsed should be true ',()=>{
    //data
const state={
    collapsed:false
}

    //action
const newState=reducer(state,{ type:'TOGGLE-COLLAPSED'})

    //expection
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false ',()=>{
    //data
    const state={
        collapsed:true
    }

    //action
    const newState=reducer(state,{ type:'TOGGLE-COLLAPSED'})

    //expection
    expect(newState.collapsed).toBe(false)
})

test('collapsed should be error ',()=>{
    //data
    const state:StateType={
        collapsed:true
    }

    //action

    expect(()=>{
        reducer(state,{ type:'FAKE'})
    }).toThrowError()
})