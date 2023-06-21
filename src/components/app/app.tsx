import './app.css';
import React from "react";

const BALLS = Array.from({length: 40});

export const App = () => {

    const getStyle = () => ({animationDuration: `${20 / Math.random()}s`} as React.CSSProperties);

    const getClassName = () => Math.random() > 0.5 ? 'ball_option' : 'ball';

    return (
        <div className='app'>
            <div className='balls'>
                {BALLS.map((n, i) => <span key={i} className={getClassName()} style={getStyle()}></span>)}
            </div>
        </div>
    )

}
