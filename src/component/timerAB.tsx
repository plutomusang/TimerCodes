import React from 'react';
import './timer.css';
import {useState} from "react"

export interface timerState {
    running:boolean ;
    paused:boolean;
    delay:number;
    datePaused:number;
    dateStart: number;
}

export const TimerAB: React.FC<timerState> =({ running, paused, delay, datePaused, dateStart}) => {
    const[timer, timerSet] = useState(setInterval(() => {},0))
    const Util = new Utilities({ running, paused, delay, datePaused, dateStart});

    return (
        <div>
            Hello  {timer}
            <button className="play-btn"  onClick ={() => Util.router()}>
                Start
            </button>
        </div>        
    )
}

class Utilities {
    public timeState: timerState;
    public timer: NodeJS.Timeout;
    
    constructor (mState: timerState) {
        mState.running = true;
        this.timeState = mState;
        this.timer= setInterval(() => {},0) ;
    }
    router = () => {
        // this.timeState.running = true;
        alert(this.timeState.running );
    }
}