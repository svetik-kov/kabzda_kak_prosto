import React, {useReducer} from 'react';
import {reducer} from './Reducer';

type AccordionType = {
    title: string
    //collapsed:boolean
}

export function UnControlledAccordion(props: AccordionType) {
    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatchCollapsed] = useReducer(reducer, {collapsed:false})
    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.title} onClick={() => dispatchCollapsed({type:'TOGGLE-COLLAPSED'})}/>
          {/* <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    );


}

type AccordionTitleType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitleType) {
    return <h1 onClick={props.onClick}> {props.title}</h1>
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}