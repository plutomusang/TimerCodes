import { useState, useContext, useEffect }  from "react";
import TMContext , {TimerState} from './timerState';

function TimerAD(){
    const tmState = useContext(TMContext);
    const [mytimer, mytimerSet] = useState(setInterval(() => {},0) );
    const [tmlabel, tmlabelSet] = useState('00:00:00');
    const router= () => { 
        if (!tmState.running) start();
        else if (tmState.paused) resume();
        else stop();
    };
    const stop= () => { 
        tmState.datePaused = Date.now();
        tmState.paused = true;
        clearInterval(mytimer);
        run();
    };
    const resume= () => { 
        tmState.paused = false;
        tmState.delay += Date.now() - tmState.datePaused
        mytimerSet(setInterval(() => {run()}, 1000));
    };
    const start= () => { 
        tmState.delay =0;
        tmState.running = true; 
        tmState.dateStart = Date.now();
        mytimerSet(setInterval(() => {run()}, 1000));
    };
    const run= () => { 
        let time = timeparser(Date.now() - tmState.dateStart - tmState.delay);
        let s = time[0] + ':' + time[1] + ':' + time[2] ;
        tmlabelSet(s);
    };  
    const timeparser= (elapsed: number):string[] => {
        let units: number[] = [3600000,60000,1000];
        let time: string[] = [];
        let index: number = 0;
        while (index < units.length) {
            let t: number = Math.floor(elapsed/units[index]);
            elapsed -= t*units[index];
            let st:string = (index > 0 && t < 10) ?  '0' + t : t.toString();
            time.push(st);
            index++;
        }
        return time;
    }  
    useEffect(() => {
        router();
    }, []);
    return (
        <div>
             <div>time: {tmlabel}</div>
             <div>delay: {tmState.delay}</div>
             <div>datePaused: {tmState.datePaused}</div>
             <div>paused: {tmState.paused}</div>
             <div>running: {tmState.running}</div>
             <div>dateStart: {tmState.dateStart}</div>
             <button className="play-btn" onClick ={() => router()}>
                Start
            </button>
        </div>
    )
}

function TimerADContext(){
    
    const[tm, tmSet] = useState<TimerState>({
        delay:0,
        datePaused: 1633947074561,
        paused: true,
        running: true,
        dateStart: 1633946836818
    });
    return (
        <TMContext.Provider value={tm}>
            <TimerAD />
        </TMContext.Provider>
    )
};

export default TimerADContext;
