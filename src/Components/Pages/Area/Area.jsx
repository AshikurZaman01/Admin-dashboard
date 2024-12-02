import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
import PageHeaders from '../../Utils/PageHeaders/PageHeaders';

const Area = () => {

    // Define your areaChartData with sample data for each country
    const areaChartData = [
        // USA Data
        [
            { x: new Date(2000, 0, 1), y: 2.3 },
            { x: new Date(2001, 0, 1), y: 1.9 },
            { x: new Date(2002, 0, 1), y: 2.0 },
            { x: new Date(2003, 0, 1), y: 1.8 },
            { x: new Date(2004, 0, 1), y: 2.5 },
            { x: new Date(2005, 0, 1), y: 3.1 },
        ],
        // France Data
        [
            { x: new Date(2000, 0, 1), y: 1.8 },
            { x: new Date(2001, 0, 1), y: 1.5 },
            { x: new Date(2002, 0, 1), y: 1.7 },
            { x: new Date(2003, 0, 1), y: 2.0 },
            { x: new Date(2004, 0, 1), y: 2.3 },
            { x: new Date(2005, 0, 1), y: 2.6 },
        ],
        // Germany Data
        [
            { x: new Date(2000, 0, 1), y: 1.5 },
            { x: new Date(2001, 0, 1), y: 1.3 },
            { x: new Date(2002, 0, 1), y: 1.6 },
            { x: new Date(2003, 0, 1), y: 1.8 },
            { x: new Date(2004, 0, 1), y: 2.0 },
            { x: new Date(2005, 0, 1), y: 2.4 },
        ]
    ];

    const areaCustomSeries = [
        {
            dataSource: areaChartData[0],
            xName: 'x',
            yName: 'y',
            name: 'USA',
            opacity: '0.8',
            type: 'SplineArea',
            width: '2',
        },
        {
            dataSource: areaChartData[1],
            xName: 'x',
            yName: 'y',
            name: 'France',
            opacity: '0.8',
            type: 'SplineArea',
            width: '2',
        },
        {
            dataSource: areaChartData[2],
            xName: 'x',
            yName: 'y',
            name: 'Germany',
            opacity: '0.8',
            type: 'SplineArea',
            width: '2',
        },
    ];

    const areaPrimaryXAxis = {
        valueType: 'DateTime',
        labelFormat: 'y',
        majorGridLines: { width: 0 },
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        labelStyle: { color: 'gray' },
    };

    const areaPrimaryYAxis = {
        labelFormat: '{value}%',
        lineStyle: { width: 0 },
        maximum: 4,
        interval: 1,
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { color: 'gray' },
    };

    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">

            {/* Page Header */}
            <PageHeaders category={"Chart"} title={"Inflation Rate in Percentage"} />

            <ChartComponent
                id="charts"
                primaryXAxis={areaPrimaryXAxis}
                primaryYAxis={areaPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                legendSettings={{ background: 'white' }}
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Area;
