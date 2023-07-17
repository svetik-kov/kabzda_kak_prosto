import React, {useEffect, useState,KeyboardEvent} from 'react';
import styles from './Select.module.css'


type ItemType = {
    title: string,
    value?: number
}

type SelectType = {
    value: any
    onChange: (value: any) => void
    item: ItemType[]
}
export const Select: React.FC<SelectType> = (props) => {

    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const [active, setActive] = useState(false)
    const selectedItem = props.item.find(el => el.value === props.value)
    const hoveredItem = props.item.find(el => el.value === hoveredElementValue)

    useEffect(()=>{
        setHoveredElementValue(props.value)
    },[props.value])

    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUpHandler = (e:KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        if (e.key==='ArrowDown' || e.key==='ArrowUp'){
            for (let i = 0; i < props.item.length; i++) {
                if (props.item[i].value === hoveredElementValue) {
                    const pretedentElement=e.key==='ArrowDown'?props.item[i + 1]:props.item[i - 1]
                    if (pretedentElement) {
                        props.onChange(pretedentElement.value)
                       return
                    }
                    //if (e.key==='')
                }
            }
           if (!selectedItem){
               setHoveredElementValue(props.item[0].value)
           }
        }
        if (e.key==='Enter' || e.key==='Escape'){
            setActive(false)
        }
    }
    return (
        <>
            {/* <select>
                <option>Minsk</option>
                <option>Kiev</option>
                <option>Brest</option>
            </select>*/}
            <div className={styles.select} onKeyUp={onKeyUpHandler} tabIndex={-1}>
                <h3 onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </h3>
                {active &&
                    <div className={styles.item}>
                        {props.item.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={` ${hoveredItem === i ? styles.selected : ''}`}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        > {i.title}</div>)}
                    </div>
                }


            </div>
        </>
    );
};

