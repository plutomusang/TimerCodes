import React from 'react';
import './App.css';
import CustomHookComponent from './component/CustomHookComponent';
import {TimerAB} from './component/timerAB';
import timerAContext from './component/timerAC';
import TimerADContext from './component/timerAD';
import TimerBSContext from './component/timerBS';
import TimerClass from './component/timerclass';
import UseContextComponent from './component/UseContextComponent';
import UseEffectComponent from './component/useEffectComponent';
import UseStateComponent from './component/UseStateComponent';
// function App() {
//   return (
//     <div className="App">
//         <Timer />
//     </div>
//   );
// }


const App: React.FC = () => {
  return (
    <div>
      <h1>Use Use Effect</h1>
      <UseEffectComponent />
      <h1>Use State</h1>      
      <UseStateComponent />
      <TimerClass   />
      <h1>Use Effect Fetch</h1>
      <h1>Use Context</h1>
      <UseContextComponent />
      <h1>Custom Hook</h1>
      <CustomHookComponent />
      <h1>Timer AB</h1>
      {/* <TimerAB text="false" /> */}
      <TimerAB 
        running={false} 
        paused={false} 
        delay={0}
        datePaused={0}
        dateStart={0}
        />
        <h1>Timer AD</h1>
        <TimerADContext />
        <h1>Timer BS</h1>
        <TimerBSContext />
    </div>
  )
}

export default App;
