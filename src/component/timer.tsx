import React from 'react';
import './timer.css';
import ParseTime from './ParseTime';

interface Props {
    text:string;
}

export const Timer: React.FC<Props> =() => {
    let x: number = 0;
    let p = new ParseTime();
    let dn: number = Date.now();
    let s = p.parser(dn);
    let d1: Date = new Date();
    
    return (
        <div>
            Hello Timer
        </div>
    )
}


// export default class Timer extends React.Component {
//     render() {
//         let p = new ParseTime();
//         let dn: number = Date.now();
//         let s = p.parser(dn);
//         let d1: Date = new Date();
        
//         return (
//             <div>Date {s[0]} : {s[1]} : {s[2]}  </div>
//         )
//     }
// }