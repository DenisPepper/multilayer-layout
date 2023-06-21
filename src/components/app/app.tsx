import './app.css';
import React from "react";
import cloud from '../../assets/tmp.png';

const BALLS = Array.from({length: 30});

export const App = () => {

    const getStyle = () => ({animationDuration: `${10 / Math.random()}s`} as React.CSSProperties);

    const getClassName = () => Math.random() > 0.5 ? 'ball_option' : 'ball';

    return (
        <div className='app'>
            <h1 className='app__title'>{'Танюша,\n с Днем Рождения!'}</h1>
            <ul className='sun'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='cloud'>
                <img src={cloud} alt="cloud"/>
            </div>
            <div className='balls'>
                {BALLS.map((n, i) => <span key={i} className={getClassName()} style={getStyle()}></span>)}
            </div>
        </div>
    )

}
