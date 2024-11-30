import { earningData, SparklineAreaData, ecomPieChartData } from '../../../../src/assets/Data/earningData.json';
import Banner from './Banner/Banner';

const Ecommerce = () => {
    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <Banner></Banner>
            </div>
        </div>
    );
}

export default Ecommerce;
