type ActionType = {
    type: string
}
/*const reducer=(state:boolean,action:ActionType)=>{
if (action.type==='TOGGLE-COLLAPSED'){
    return !state
}
    return state
}*/

export type StateType={
    collapsed:boolean
}
export const reducer = (state:StateType, action: ActionType):StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            //return !state
            return {...state,collapsed:!state.collapsed}
        default:throw new Error(`Unknown action type: ${action.type}`);
    }
    return state
}