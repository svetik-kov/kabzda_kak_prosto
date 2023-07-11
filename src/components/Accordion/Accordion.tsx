import React from "react";

type AccordionType={
    title:string
    collapsed:boolean
    onChange:()=>void
    color?:string
}
export function Accordion(props:AccordionType) {

    return (
        <div>
            <AccordionTitle title={props.title}  onChange={props.onChange} color={props.color}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    );


}

type AccordionTitleType={
    title:string
    onChange:()=>void
    color?:string
}
function AccordionTitle(props:AccordionTitleType) {
    return <h1
        style={{color:props.color ? props.color : 'black'}}
        onClick={()=>props.onChange()}> {props.title}</h1>
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