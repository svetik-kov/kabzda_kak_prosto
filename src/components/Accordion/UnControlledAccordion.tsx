import React, {useState} from 'react';

type AccordionType = {
    title: string
    //collapsed:boolean
}

export function UnControlledAccordion(props: AccordionType) {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
          {/* <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {collapsed && <AccordionBody/>}
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