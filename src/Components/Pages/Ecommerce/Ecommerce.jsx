import Banner from './Banner/Banner';
import CardItem from './CardItem/CardItem';
import { GoProject } from 'react-icons/go';
import RevenueUpdates from './RevenueUpdates/RevenueUpdates';

const Ecommerce = () => {


    return (
        <div className='mt-1'>

            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <Banner></Banner>
            </div>

            <CardItem />


            <div className='flex gap-10 flex-wrap justify-center'>

                <div className="flex justify-between w-full px-20 mt-10 ">
                    <p className="font-semibold text-xl text-green-600">Revenue Updates</p>

                    <div className="flex items-center gap-4 ">
                        <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                            <span>
                                <GoProject />
                            </span>
                            <span className='text-green-600 font-semibold'>Expense</span>
                        </p>

                        <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                            <span>
                                <GoProject />
                            </span>
                            <span className='text-green-600 font-semibold'>Budget</span>
                        </p>
                    </div>
                </div>

                <div className='bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-880 '>

                    <RevenueUpdates />

                </div>
            </div>

        </div>
    );
}

export default Ecommerce;
