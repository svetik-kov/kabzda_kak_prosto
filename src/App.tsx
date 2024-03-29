import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingType, RatingValueType} from './components/Rating/Rating';
import {UnControlledOnOff} from './components/OnOff/UnControlledOnOff';
import {UnControlledAccordion} from './components/Accordion/UnControlledAccordion';
import {UnControlledRating} from './components/Rating/UnControlledRating';
import {OnOff} from './components/OnOff/OnOff';
import {ControlledSelect, GetValueOfUnControlledInputByButton, UnControlledInput} from './components/Input';
import {Select} from './components/Select/Select';
import {Example} from './components/ReactMemo';
import {DifficultCountingExample, HelpForReactMemoExample} from './components/UseMemo';
import {LikeUseCallback} from './components/LikeUseCallback';
import {Example1} from './components/UseState';
import {SetTimeOutExample, SimpleExample} from './components/UseEffect';
import {Clock} from './components/Clock/Clock';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState(false)
    const [value, setValue] = useState(1)

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
            <div>/////////////////////////////////////////////////</div>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            Article 2

            {/*    <UnControlledOnOff />
            <UnControlledOnOff/>
            <UnControlledOnOff/>*/}


            <UnControlledAccordion title={'Menu'}/>
            <UnControlledAccordion title={'Users'}/>
            <div>/////////////////////////////////////////////////</div>
            <UnControlledRating onChange={onChangeHandler}/>
            <div>/////////////////////////////////////////////////</div>
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <div>/////////////////////////////////////////////////</div>
            <div><UnControlledInput/></div>
            <GetValueOfUnControlledInputByButton/>
            <div>/////////////////////////////////////////////////</div>
            <div>
                <ControlledSelect/>
            </div>
            <div><Select
                value={value}
                onChange={(value: any) => {
                    setValue(value)
                }}
                item={
                    [{title: 'Minsk', value: 1},
                        {title: 'Kiev', value: 2},
                        {title: 'Brest', value: 3},]
                }/></div>
            <div>/////////////////////////////////////////////////</div>
            <div><Example/></div>
            <div>/////////////////////////////////////////////////</div>
            <div>< DifficultCountingExample/></div>
            <div>/////////////////////////////////////////////////</div>
            <div><HelpForReactMemoExample/></div>
            <div>/////////////////////////////////////////////////</div>
            <div><LikeUseCallback/></div>

            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////
            <div>
                <Example1/>
            </div>
            //////////////////////////////////////////////////
            <div>
                <SimpleExample/>
            </div>
            ////////////////////////////////////////////////
            <div>
                <SetTimeOutExample/>
            </div>
            //////////////////////
            <div>
                < Clock mode={'digital'} />
            </div>
            <div>
                < Clock mode={'analog'}/>
            </div>
        </div>

    );
}
/////
type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <div>{props.title}</div>
}


export default App;
