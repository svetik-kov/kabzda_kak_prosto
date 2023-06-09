import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingType, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/Accordion/UnControlledAccordion';
import {UnControlledRating} from './components/Rating/UnControlledRating';

function App() {
    const [ratingValue,setRatingValue]=useState<RatingValueType>(0)
    return (
        <div className="App">
            <PageTitle title={'This is App'}/>
            Article 1
            <Rating value={ratingValue}  onClick={setRatingValue}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>


            Article 2
          {/*  <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            {/*<OnOff on={true}/>
            <OnOff on={false}/>
            <OnOff on={true}/>*/}
            <OnOff/>
            <OnOff/>
            <OnOff/>

            <UnControlledAccordion title={'Menu'} />
            <UnControlledAccordion title={'Users'} />
            <UnControlledRating/>


        </div>
    );
}
type PageTitleType={
    title:string
}
function PageTitle(props:PageTitleType) {
    return <div>{props.title}</div>
}



export default App;
