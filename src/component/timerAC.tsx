import { useState, useContext }  from "react";
import TMContext , {TimerState} from './timerState';
import UserContext, {UserState} from './store';

function TimerAC(){
    const tmState = useContext(TMContext);
    const Util = new Utilities()
    return (
        <div>
             <div>delay: {tmState.delay}</div>
             <div>datePaused: {tmState.datePaused}</div>
             <div>paused: {tmState.paused}</div>
             <div>running: {tmState.running}</div>
             <div>dateStart: {tmState.dateStart}</div>
             <button className="play-btn"  onClick ={() => Util.router()}>
                Start
            </button>
        </div>
    )
}

class Utilities {
    tmState = useContext(TMContext);
    router = () => {
        this.tmState.running = true;
    }
}


function timerAContext(){
    
    const[tm, tmSet] = useState<TimerState>({
        delay:0,
        datePaused: 0,
        paused: false,
        running: false,
        dateStart: Date.now()
    });
    return (
        <TMContext.Provider value={tm}>
            <TimerAC />
        </TMContext.Provider>
    )
};

export default timerAContext;
