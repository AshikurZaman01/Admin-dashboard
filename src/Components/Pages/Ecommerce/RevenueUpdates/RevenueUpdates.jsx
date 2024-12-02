import Button from "../../../Utils/Button/Button"
import SparkLine from "./SparkLine"
import Stacked from "./Stacked"

const RevenueUpdates = () => {
    return (
        <div>
            <div className="-mt-10 flex gap-0 flex-wrap justify-center">

                <div className='border-r-1 border-color m-4 pr-10'>

                    <div>
                        <p>
                            <span className="text-3xl font-semibold">$93,438</span>
                            <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                23%
                            </span>
                        </p>
                        <p className="text-gray-500 mt-1">Budget</p>
                    </div>

                    <div className="mt-8">
                        <p className="text-3xl font-semibold">$48,487</p>

                        <p className="text-gray-500 mt-1">Expense</p>
                    </div>



                    <div className='mt-5'>
                        <SparkLine
                            currentColor="blue"
                            id="line-sparkLine"
                            type="Line"
                            height="80px"
                            width="350px"
                            color='blue'
                        />
                    </div>

                    <div className="mt-10">
                        <Button
                            color="white"
                            bgColor="blue"
                            text="Download Report"
                            borderRadius="10px"
                        />
                    </div>
                </div>

                <div>
                    <Stacked
                        width="420px"
                        height="360px"
                    />
                </div>



            </div>
        </div>
    )
}

export default RevenueUpdates