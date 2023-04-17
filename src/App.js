import './App.css';
import Game from './Game';
import React from 'react';

function App() {
    const [firstClick, setFirstClick] = React.useState(true)
    const [isActive, setIsActive] = React.useState(false);
    const [seconds, setSeconds] = React.useState(0);
    
    React.useEffect(() => {
        
        let timer = null;
        if(isActive){
            timer = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    });
    
    return (
        <Game 
            firstClick={firstClick}
            setFirstClick={setFirstClick}
            isActive={isActive}
            setIsActive={setIsActive}
            seconds={seconds}
            setSeconds={setSeconds}
        />
    )
}

export default App;
