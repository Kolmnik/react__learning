import React from 'react';
import classes from "./button-style.module.css";

export const EasyButton = (props: TickOfButtonsOnOffType) => {
    return (
        <div className={`${classes.easyButtons}`}>
            <TickOfButtonsOn value={props.value}/>
            <TickOfButtonsOff value={!props.value}/>
            <LampOnOff value={props.value}/>
        </div>
    )
}

type TickOfButtonsOnOffType = {
    value: boolean
}

const TickOfButtonsOn = (props: TickOfButtonsOnOffType) => {
    if (props.value){
        return (
            <div className={`${classes.easyButton} ${classes.easyButton__left} ${classes.easyButton__leftOn}`}>on</div>
        )
    } else {
        return (
            <div className={`${classes.easyButton} ${classes.easyButton__left}`}>on</div>
        )
    }
}
const TickOfButtonsOff = (props: TickOfButtonsOnOffType) => {
    if (props.value){
        return (
            <div className={`${classes.easyButton} ${classes.easyButton__right} ${classes.easyButton__rightOn}`}>off</div>
        )
    } else {
        return (
            <div className={`${classes.easyButton} ${classes.easyButton__right}`}>off</div>

        )
    }
}
const LampOnOff = (props: TickOfButtonsOnOffType) => {
    if (props.value) {
        return (
            <div className={`${classes.lamp} ${classes.lampOn}`}></div>
        )
    } else {
        return (
            <div className={`${classes.lamp} ${classes.lampOff}`}></div>
        )
    }
}