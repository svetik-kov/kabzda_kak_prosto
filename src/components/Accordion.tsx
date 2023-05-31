import React from "react";

type AccordionType={
    title:string
    collapsed:boolean
}
export function Accordion(props:AccordionType) {
    /*if (props.collapsed===true){
        return (
            <div>

                <AccordionTitle title={props.title} />
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.title} />
                <AccordionBody />
            </div>
        );
    }*/
    return (
        <div>
            <AccordionTitle title={props.title} />
            {!props.collapsed && <AccordionBody />}
        </div>
    );


}

type AccordionTitleType={
    title:string
}
function AccordionTitle(props:AccordionTitleType) {
    return <h1> {props.title}</h1>
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