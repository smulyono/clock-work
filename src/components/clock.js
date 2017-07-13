import React from 'react';
import Tick from './clockTick';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hour : 0,
            minutes : 0,
            seconds : 0,
            display : ""
        };
        this.runtimer = this.runtimer.bind(this);
        this.timerObj = undefined;
        this.runtimer();
    }

    runtimer() {
        this.timerObj = setInterval(this.tickTimer.bind(this), 1000);
    }

    stoptimer() {
        clearInterval(this.timerObj);
    }

    tickTimer() {
        let {
            hour,
            minutes,
            seconds
        } = this.state;

        let current = new Date();
        hour = Math.round(((current.getHours() > 12 ? current.getHours() - 12 : current.getHours()) / 12) * 360);
        minutes = Math.round((current.getMinutes() / 60) * 360);
        seconds = Math.round((current.getSeconds() / 60) * 360);

        this.setState({
            hour : hour,
            minutes : minutes,
            seconds : seconds,
            display : current.toLocaleTimeString()
        });

    }


    render() {
        const {
            hour,
            minutes,
            seconds,
            display
        } = this.state;
        return (
            <div className='clock-container'>
                <div className='clock-display-label'>
                    {display}
                </div>
                <div className='clock-display'>
                    <Tick 
                        type='hour'
                        degree={hour} />
                    <Tick 
                        type='minute'
                        degree={minutes} />
                    <Tick 
                        type='second'
                        degree={seconds} />
                </div>
            </div>
        )
    }
}

export default Clock;