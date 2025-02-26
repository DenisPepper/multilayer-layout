import './app.css';
import React from "react";
import cloud from '../../assets/tmp.png';
import konyashik from '../../assets/tmp2.png';
import earth from '../../assets/earth.jpg';
import song from '../../assets/Lifting-the-Veil-from-the-Braille.mp3';

const BALLS = Array.from({length: 30});

export const App = () => {

    const getStyle = () => ({animationDuration: `${10 / Math.random()}s`} as React.CSSProperties);

    const getClassName = () => Math.random() > 0.5 ? 'ball_option' : 'ball';

    return (
        <div className='app'>
            <h1 className='app__title'>
                <span>Наташа!</span>
                <span>Поздравляю с ДР!</span>
            </h1>
            <div className='cloud'>
                <img src={cloud} alt="cloud"/>
            </div>
            <div className='konyashik'>
                <img src={konyashik} alt="konyashik"/>
            </div>
            <div className='earth'>
                <img src={earth} alt="earth"/>
            </div>
            <ul className='sun'>
                <li className='sun__ray'></li>
                <li className='sun__ray'></li>
                <li className='sun__ray'></li>
                <li className='sun__ray'></li>
                <li className='sun__ray'></li>
                <li className='sun__ray'></li>
                <li className='sun__ray'></li>
                <li className='sun__ray'></li>
            </ul>
            <div className='balls'>
                {BALLS.map((n, i) => <span key={i} className={getClassName()} style={getStyle()}></span>)}
            </div>
            <div className='audio'>
                <audio controls>
                    <source src={song} type='audio/mpeg'/>
                </audio>
            </div>
        </div>
    )

}
