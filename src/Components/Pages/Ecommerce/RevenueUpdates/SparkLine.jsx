import React from 'react';
import { SparklineComponent, Inject, LineSeries, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, type, currentColor }) => {
    const SparklineAreaData = [
        { "x": 1, "yval": 2 },
        { "x": 2, "yval": 6 },
        { "x": 3, "yval": 8 },
        { "x": 4, "yval": 5 },
        { "x": 5, "yval": 10 }
    ];

    return (
        <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valueType='Numeric'
            fill={color}
            border={{ color: currentColor, width: 2 }}
            tooltipSettings={{
                visible: true, format: 'x: ${x} y: ${yval}',
                trackLineSettings: { visible: true }
            }}
            dataSource={SparklineAreaData}
            xName='x'
            yName='yval'
            type={type}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    );
};

export default SparkLine;
