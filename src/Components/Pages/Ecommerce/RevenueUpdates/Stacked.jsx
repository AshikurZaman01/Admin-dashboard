import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Inject, StackingColumnSeries, Category, Tooltip, Legend } from '@syncfusion/ej2-react-charts';

const Stacked = ({ width = "100%", height = "auto" }) => {
    const stackedChartData = [
        [
            { "x": "Jan", "y": 111.1 },
            { "x": "Feb", "y": 127.3 },
            { "x": "Mar", "y": 143.4 },
            { "x": "Apr", "y": 159.9 },
            { "x": "May", "y": 159.9 },
            { "x": "Jun", "y": 159.9 },
            { "x": "July", "y": 159.9 }
        ],
        [
            { "x": "Jan", "y": 111.1 },
            { "x": "Feb", "y": 127.3 },
            { "x": "Mar", "y": 143.4 },
            { "x": "Apr", "y": 159.9 },
            { "x": "May", "y": 159.9 },
            { "x": "Jun", "y": 159.9 },
            { "x": "July", "y": 159.9 }
        ]
    ];

    return (
        <div>
            <ChartComponent
                id="stacked-chart"
                primaryXAxis={{ valueType: 'Category', title: 'Months' }}
                primaryYAxis={{ title: 'Value' }}
                tooltip={{ enable: true }}
                legendSettings={{ visible: true }}
                width={width}  // Set width dynamically
                height={height} // Set height dynamically
            >
                <Inject services={[ColumnSeries, StackingColumnSeries, Category, Tooltip, Legend]} />
                <SeriesCollectionDirective>
                    <SeriesDirective
                        dataSource={stackedChartData[0]}
                        xName="x"
                        yName="y"
                        name="Series 1"
                        type="Column"
                        stackType="Normal"
                    />
                    <SeriesDirective
                        dataSource={stackedChartData[1]}
                        xName="x"
                        yName="y"
                        name="Series 2"
                        type="Column"
                        stackType="Normal"
                    />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
}

export default Stacked;

