import PageHeaders from "../../Utils/PageHeaders/PageHeaders"
import PieChar from "./PieChar/PieChar"

const Pie = () => {

    const pieChartData = [
        { x: 'Labour', y: 18, text: '18%' },
        { x: 'Legal', y: 8, text: '8%' },
        { x: 'Production', y: 15, text: '15%' },
        { x: 'License', y: 11, text: '11%' },
        { x: 'Facilities', y: 18, text: '18%' },
        { x: 'Taxes', y: 14, text: '14%' },
        { x: 'Insurance', y: 16, text: '16%' },
    ];

    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">

            {/* Page Header */}
            <PageHeaders category={"Chart"} title={"Inflation Rate in Percentage"} />

            <div className="w-full">
                <PieChar id="chart-pie" data={pieChartData} legendVisiblity height="full" />
            </div>

        </div>
    )
}

export default Pie