import BannerImage from '../assets/Hero Section 1.png';

const Banner = () => {
    return (
  <div className='text-center bg-gray-200'>
         <div className=' mx-auto py-6'>
            <h1 className="text-6xl font-bold ">Freshness <span className="text-green-500">You Can <br />
                Count</span> On, Prices You’ll Love!</h1>
            <p className='max-w-[40%] mx-auto py-6'>Shop your daily essentials at unbeatable prices. From fresh produce to pantry staples, we’ve got you covered every day!</p>
            
        </div>
        <img src={BannerImage} className='mx-auto max-w-[450] md:max-w-[920px] h-auto' alt="Banner" />
  </div>
    )
}
export default Banner;