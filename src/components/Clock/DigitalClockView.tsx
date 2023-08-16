import React, {FC} from 'react';
import {ClockViewType} from './Clock';

export const DigitalClockView: FC<ClockViewType> = ({data}) => {

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    return <>
        <span>{get2digitsString(data.getSeconds())}</span>
        :
        <span>{get2digitsString(data.getMinutes())}</span>
        :
        <span>{get2digitsString(data.getHours())}</span>
    </>
}