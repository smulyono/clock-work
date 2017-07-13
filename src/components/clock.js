import React from 'react';
import Tick from './clockTick';

class Clock extends React.Component {
    render() {
        return (
            <div className='clock-container'>
                <div className='clock-display'>
                    <Tick 
                        type='hour'
                        degree='0' />
                    <Tick 
                        type='minute'
                        degree='10' />
                    <Tick 
                        type='second'
                        degree='50' />
                </div>
            </div>
        )
    }
}

export default Clock;