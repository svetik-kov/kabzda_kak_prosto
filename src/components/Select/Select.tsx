import React from 'react';

type ItemType = {
    title: string,
    value: number
}

type SelectType={
    value:string
    onChange:()=>void
    item: ItemType[]
}
export const Select:React.FC<SelectType> = (props) => {
    return (
        <div>
            {props.item.map(i=><div> {i.title}</div>)}
        </div>
    );
};

