import React from 'react';

type ItemType = {
    title: string,
    value: number
}

type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
    color?: string
    item: ItemType[]
    onClick: (value: number) => void
}

export function Accordion(props: AccordionType) {

    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange} color={props.color}/>
            {!props.collapsed && <AccordionBody item={props.item} onClick={props.onClick}/>}
        </div>
    );


}

type AccordionTitleType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitleType) {
    return <h1
        style={{color: props.color ? props.color : 'black'}}
        onClick={() => props.onChange()}> {props.title}</h1>
}

type AccordionBodyType = {
    item: ItemType[]
    onClick: (value: number) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>

            {props.item.map((i, index) =>
                <li
                key={index}
                onClick={()=>props.onClick(i.value)}
                >{i.title}
              </li>
            )}

        </ul>

    )
}