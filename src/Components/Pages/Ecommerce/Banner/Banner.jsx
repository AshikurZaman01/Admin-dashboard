import Button from "../../../Utils/Button/Button"

const Banner = () => {
    return (

        <div
            className='h-44 bg-white dark:bg-mainDarkBg rounded-xl w-full lg:w-80 p-8 pt-9  m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'
            style={{
                backgroundImage: 'url("https://raw.githubusercontent.com/adrianhajdin/project_syncfusion_dashboard/28bdb6cf0c3f9158ddc088ddf64e530abc1bbb20/src/data/welcome-bg.svg")', width: "100%"
            }}
        >

            <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl">$63,448.78k</p>
            </div>

            <div className="mt-6">
                <Button
                    color="white"
                    bgColor="blue"
                    text="Download"
                    borderRadius='10px'
                ></Button>
            </div>
        </div>

    )
}

export default Banner