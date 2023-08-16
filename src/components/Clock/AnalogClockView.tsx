import React, {FC} from 'react';
import {ClockViewType} from './Clock';
import styles from './AnalogClockView.module.css'


export const AnalogClockView: FC<ClockViewType> = ({data}) => {

    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${data.getHours() * 30}deg)`
    };
    return <div className={styles["clock"]}>

        <div className={styles["analog-clock"]}>
            <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
            <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
            <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
        </div>

    </div>
}