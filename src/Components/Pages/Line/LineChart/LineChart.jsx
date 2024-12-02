import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

const LineChart = () => {

    const lineChartData = [
        [
            { x: new Date(2000, 0, 1), y: 40 },
            { x: new Date(2001, 0, 1), y: 45 },
            { x: new Date(2002, 0, 1), y: 50 },
            { x: new Date(2003, 0, 1), y: 55 },
            { x: new Date(2004, 0, 1), y: 60 },
            { x: new Date(2005, 0, 1), y: 65 }
        ],
        [
            { x: new Date(2000, 0, 1), y: 35 },
            { x: new Date(2001, 0, 1), y: 40 },
            { x: new Date(2002, 0, 1), y: 45 },
            { x: new Date(2003, 0, 1), y: 50 },
            { x: new Date(2004, 0, 1), y: 55 },
            { x: new Date(2005, 0, 1), y: 60 }
        ],
        [
            { x: new Date(2000, 0, 1), y: 30 },
            { x: new Date(2001, 0, 1), y: 35 },
            { x: new Date(2002, 0, 1), y: 40 },
            { x: new Date(2003, 0, 1), y: 45 },
            { x: new Date(2004, 0, 1), y: 50 },
            { x: new Date(2005, 0, 1), y: 55 }
        ]
    ];

    const lineCustomSeries = [
        {
            dataSource: lineChartData[0],
            xName: 'x',
            yName: 'y',
            name: 'Germany',
            width: '2',
            marker: { visible: true, width: 10, height: 10 },
            type: 'Line'
        },
        {
            dataSource: lineChartData[1],
            xName: 'x',
            yName: 'y',
            name: 'England',
            width: '2',
            marker: { visible: true, width: 10, height: 10 },
            type: 'Line'
        },
        {
            dataSource: lineChartData[2],
            xName: 'x',
            yName: 'y',
            name: 'India',
            width: '2',
            marker: { visible: true, width: 10, height: 10 },
            type: 'Line'
        }
    ];

    const LinePrimaryXAxis = {
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        background: 'white',
    };

    const LinePrimaryYAxis = {
        labelFormat: '{value}%',
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
    };

    return (
        <div>
            <ChartComponent
                id="line-chart"
                height="420px"
                primaryXAxis={LinePrimaryXAxis}
                primaryYAxis={LinePrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                legendSettings={{ background: 'white' }}
            >
                <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
                <SeriesCollectionDirective>
                    {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default LineChart;
