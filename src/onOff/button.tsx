import React, {useState} from 'react';
import classes from "./button-style.module.css";

export const EasyButton = (props: TickOfButtonsOnOffType) => {
    let on = props.value
    // useState()
    return (
        <div >
            <TickOfButtonsOn  value={on} />
        </div>
    )
}

type TickOfButtonsOnOffType = {
    value: boolean
}

const TickOfButtonsOn = (props: TickOfButtonsOnOffType) => {
    let [onOff, setOnOff] = useState(props.value)
    if (onOff){
        return (
            <div className={`${classes.easyButtons}`}>
                <div className={`${classes.easyButton} ${classes.easyButton__left} ${classes.easyButton__leftOn}`} >on</div>
                <div className={`${classes.easyButton} ${classes.easyButton__right}`} onClick={()=>{setOnOff(!onOff)}}>off</div>

                <div className={`${classes.lamp} ${classes.lampOn}`}></div>
            </div>
        )
    } else {
        return (
            <div className={`${classes.easyButtons}`}>
                <div className={`${classes.easyButton} ${classes.easyButton__left}`} onClick={()=>{setOnOff(!onOff)}}>on</div>
                <div className={`${classes.easyButton} ${classes.easyButton__right} ${classes.easyButton__rightOn}` }>off</div>

                <div className={`${classes.lamp} ${classes.lampOff}`}></div>
            </div>
    )
    }
}
