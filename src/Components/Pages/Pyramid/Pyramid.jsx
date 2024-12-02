import PageHeaders from "../../Utils/PageHeaders/PageHeaders"
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';


const Pyramid = () => {

    const PyramidData = [
        { x: 'Sweet Treats', y: 120, text: '120 cal' },
        { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
        { x: 'Vegetables', y: 470, text: '470 cal' },
        { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
        { x: 'Fruits', y: 520, text: '520 cal' },
        { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
    ];

    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">
            {/* Page Header */}
            <PageHeaders category={"Chart"} title={"Color Mapping"} />

            <div className="w-full">
                <AccumulationChartComponent
                    id="pyramid-chart"
                    legendSettings={{ background: 'white' }}
                    tooltip={{ enable: true }}
                >
                    <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            name="Food"
                            dataSource={PyramidData}
                            xName="x"
                            yName="y"
                            type="Pyramid"
                            width="45%"
                            height="80%"
                            neckWidth="15%"
                            gapRatio={0.03}
                            explode
                            emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                            dataLabel={{
                                visible: true,
                                position: 'Inside',
                                name: 'text',
                            }}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>

        </div>
    )
}

export default Pyramid