import React from 'react';

const clockTick = ({
    type = 'hour',
    degree = 0
}) => (
    <div className={`center clock-${type}-tick clockDegree-${degree}`}>
    </div>
);

export default clockTick;