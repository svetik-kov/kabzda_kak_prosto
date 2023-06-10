import React from "react";

type AccordionType={
    title:string
    collapsed:boolean
    onChange:()=>void
}
export function Accordion(props:AccordionType) {

    return (
        <div>
            <AccordionTitle title={props.title}  onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    );


}

type AccordionTitleType={
    title:string
    onChange:()=>void
}
function AccordionTitle(props:AccordionTitleType) {
    return <h1 onClick={props.onChange}> {props.title}</h1>
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