import { earningData, SparklineAreaData, ecomPieChartData } from '../../../../src/assets/Data/earningData.json';
import Banner from './Banner/Banner';
import CardItem from './CardItem/CardItem';

const Ecommerce = () => {

    console.log(earningData)

    return (
        <div className='mt-1'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <Banner></Banner>
            </div>

            <CardItem />



        </div>
    );
}

export default Ecommerce;
