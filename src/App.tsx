import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingType, RatingValueType} from './components/Rating/Rating';
import {UnControlledOnOff} from './components/OnOff/UnControlledOnOff';
import {UnControlledAccordion} from './components/Accordion/UnControlledAccordion';
import {UnControlledRating} from './components/Rating/UnControlledRating';
import {OnOff} from './components/OnOff/OnOff';
import {ControlledSelect, GetValueOfUnControlledInputByButton, UnControlledInput} from './components/Input';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState(false)

    const onChangeHandler = () => {
        setRatingValue(ratingValue)
    }


    return (
        <div className="App">
            <PageTitle title={'This is App'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'Menu'}
                       collapsed={!accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)} onClick={() => {
            }} item={[]}/>
            <Accordion title={'Users'}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       item={[
                           {title: 'Artem', value: 1},
                           {title: 'Svetlana', value: 2},
                           {title: 'Ivan', value: 3},
                           {title: 'Sasha', value: 4}]}
                       onClick={(value) => {
                           console.log(`user with ${value}`)
                       }}
            />

            <OnOff on={switchOn} onChange={setSwitchOn}/>
            Article 2

            {/*    <UnControlledOnOff />
            <UnControlledOnOff/>
            <UnControlledOnOff/>*/}


            <UnControlledAccordion title={'Menu'}/>
            <UnControlledAccordion title={'Users'}/>
            <UnControlledRating onChange={onChangeHandler}/>
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <div><UnControlledInput/></div>
            <GetValueOfUnControlledInputByButton/>
            <div>
                <ControlledSelect/>
            </div>
        </div>

    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <div>{props.title}</div>
}


export default App;
