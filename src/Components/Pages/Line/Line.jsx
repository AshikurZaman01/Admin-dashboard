import PageHeaders from '../../Utils/PageHeaders/PageHeaders'
import LineChart from './LineChart/LineChart'

const Line = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">

            {/* Page Header */}
            <PageHeaders category={"Chart"} title={"Line Chart"} />

            <div className="w-full">
                <LineChart />
            </div>
        </div>
    )
}

export default Line