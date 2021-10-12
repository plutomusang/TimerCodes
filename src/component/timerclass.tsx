import * as React from "react";


interface MyProps {
    delay?:number;
    then?: number;
}
interface MyState {
    running:boolean ;
    paused:boolean;
    delay:number;
    delayThen:number;
    then: number;
    timer: ReturnType<typeof setInterval> ;
}

class TimerClass extends React.Component <MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            running:false,
            paused:false,
            delay:0,
            delayThen:0,
            then:0,
            timer: setInterval(() => {},0) 
        }
    }
    Lib = new Util();

    reset = () =>{

    }
    run = () => {

        let time = this.Lib.parser(Date.now() - this.state.then - this.state.delay);
        let doc:any = document.getElementById('timer');
        doc.innerHTML = time[0] + ':' + time[1] + ':' + time[2];

        //alert("hit");
    }
    start = () => {
        this.setState ({
            delay: 0,
            running: true,
            then: Date.now(),
            timer:setInterval(() => {this.run()}, 1000)
        });
        
    }
    resume= () => { 
        this.setState ({
            paused: false,
            delay: Date.now() - this.state.delayThen,
            timer:setInterval(() => {this.run()}, 1000)
        });
    }
    router= () => {
        if (!this.state.running) this.start();
        else if (this.state.paused) this.resume();
        else this.stop();
    }
    stop = () =>{
        this.setState ({
            delayThen: Date.now(),
            paused: true
        });        
        clearInterval(this.state.timer);
        this.run();
    }

    render() {
        return (

        <div className="timerobj"> 	
            <div className="timernum"> 
                <time id="timer">0:00:00</time>	
            </div>		
            <button className="play-btn"  onClick ={() => this.router()}>
                Start
            </button>
        </div>

        )   
    }
}


class  Util {
    public  parser(elapsed: number) :string[] {
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
    start = (main:any) => {
        main.setState ({
            delay: 0,
            running: true,
            then: Date.now(),
            timer:setInterval(() => {this.run(main)}, 1000)
        });        
    }
    run = (main:any) => {
        let time = this.parser(Date.now() - main.state.then - main.state.delay);
        let doc:any = document.getElementById('timer');
        doc.innerHTML = time[0] + ':' + time[1] + ':' + time[2] +'s';
    }    
    resume= (main:any) => { 
        main.setState ({
            paused: false,
            delay: Date.now() - main.state.delayThen,
            timer:setInterval(() => {this.run(main)}, 1000)
        });
    }
    router= (main:any) => {
        if (!main.state.running) this.start(main);
        else if (main.state.paused) this.resume(main);
        else this.stop(main);
    }    
    stop = (main:any) =>{
        main.setState ({
            delayThen: Date.now(),
            paused: true
        });        
        clearInterval(main.state.timer);
        this.run(main);
    }
}

export default TimerClass;
