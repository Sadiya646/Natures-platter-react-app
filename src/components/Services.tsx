import Service from "../assets/service.png"
import Delivery from "../assets/delivery.png"
import Product from "../assets/products.png"
const Services =()=>{
return(
   <div className="max-w-7xl mx-auto px-6  py-20">
    <h2 className="pb-4 font-serif text-green-500 font-bold text-4xl mb-3">Services</h2>
     <div className="flex flex-col md:flex-row gap-4">
        <div className="text-center bg-[#e5e0d5] rounded-md p-8 w-[424px] h-[330px]">
                <div className="bg-white rounded-full h-[130px] w-[130px] flex justify-center items-center mx-auto">
                <img src={Service} alt="" />
            </div>
            <h2 className="font-semibold text-[24px] pt-3">24/7 Services</h2>
            <p className="pt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </div>
        <div className="text-center bg-[#e5e0d5] rounded-md p-8 w-[400px] h-[330px]">
            <div className="bg-white rounded-full h-[130px] w-[130px] flex justify-center items-center mx-auto">
               <img src={Delivery} alt="" />
            </div>
            <h2 className="font-semibold text-[24px] pt-3">Fast Delivery</h2>
            <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

        </div>
        <div className="text-center bg-[#e5e0d5] rounded-md p-8 w-[424px] h-[330px]">
           <div className="bg-white rounded-full h-[130px] w-[130px] flex justify-center items-center mx-auto">
              <img src={Product} className="text-center" alt="" />
           </div>

            <h2 className="font-semibold text-[24px] pt-3">Healthy Products</h2>
            <p className="pt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

        </div>
    </div>
   </div>
)
}
export default Services;