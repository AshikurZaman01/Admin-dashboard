import PageHeaders from '../../Utils/PageHeaders/PageHeaders';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';


const ColorMapping = () => {

    const colorMappingData = [
        [
            { x: 'Jan', y: 6.96 },
            { x: 'Feb', y: 8.9 },
            { x: 'Mar', y: 12 },
            { x: 'Apr', y: 17.5 },
            { x: 'May', y: 22.1 },
            { x: 'June', y: 25 },
            { x: 'July', y: 29.4 },
            { x: 'Aug', y: 29.6 },
            { x: 'Sep', y: 25.8 },
            { x: 'Oct', y: 21.1 },
            { x: 'Nov', y: 15.5 },
            { x: 'Dec', y: 9.9 },
        ],
        ['#FFFF99'],
        ['#FFA500'],
        ['#FF4040'],
    ];

    const ColorMappingPrimaryXAxis = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        title: 'Months',
    };

    const ColorMappingPrimaryYAxis = {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}°C',
        title: 'Temperature',
    };

    const rangeColorMapping = [
        {
            label: '1°C to 10°C',
            start: '1',
            end: '10',
            colors: colorMappingData[1]
        },

        {
            label: '11°C to 20°C',
            start: '11',
            end: '20',
            colors: colorMappingData[2]
        },

        {
            label: '21°C to 30°C',
            start: '21',
            end: '30',
            colors: colorMappingData[3]
        },

    ];

    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">
            {/* Page Header */}
            <PageHeaders category={"Chart"} title={"Color Mapping"} />

            <div className="w-full">
                <ChartComponent
                    id="charts"
                    primaryXAxis={ColorMappingPrimaryXAxis}
                    primaryYAxis={ColorMappingPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    legendSettings={{ mode: 'Range', background: 'white' }}
                    tooltip={{ enable: true }}
                >
                    <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={colorMappingData[0]}
                            name="USA"
                            xName="x"
                            yName="y"
                            type="Column"
                            cornerRadius={{
                                topLeft: 10,
                                topRight: 10,
                            }}
                        />
                    </SeriesCollectionDirective>
                    <RangeColorSettingsDirective>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
                    </RangeColorSettingsDirective>
                </ChartComponent>
            </div>

        </div>
    )
}

export default ColorMapping