import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';

type PropsType = {
    mode?: 'digital' | 'analog'
}


export const Clock: React.FC<PropsType> = ({mode, ...props}) => {
    const [data, setData] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setData(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

  const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    const secondsString = get2digitsString(data.getSeconds())
    const minutesString = get2digitsString(data.getMinutes())
    const hoursString = get2digitsString(data.getHours())

    let view
    switch (mode) {
        case 'analog':
            view = <AnalogClockView data={data}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView data={data}/>
    }
    return (
        <div>
            {view}
            {/* {mode==='digital'
                    ? <>
                        <span>{get2digitsString(date.getSeconds())}</span>
                        :
                        <span>{get2digitsString(date.getMinutes())}</span>
                        :
                        <span>{get2digitsString(date.getHours())}</span>
                    </>
                    :
                    <>ANALOG </>
            }*/}
        </div>
    );
};

export type ClockViewType={
    data:Date
}
