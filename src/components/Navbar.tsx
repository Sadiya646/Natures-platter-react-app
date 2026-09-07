import { IoCart, IoSearch } from "react-icons/io5";
import Logo from "../assets/nav-logo.png";
const Navbar=()=>{
    return(
     <div className="bg-white shadow-md">
           <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
            <img src={Logo} className="h-10" alt="Logo" />
            <ul className="flex space-x-4 font-bold">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
            <div className="flex gap-4 items-center font-bold">
                <IoSearch  className=""/>
                <IoCart />
                <button className="px-5 py-2 border border-green-600 text-green-700 hover:bg-green-50 font-medium rounded-full transition-colors duration-200">Login</button>
                <button className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-colors duration-200">Sign Up</button>
            </div>
        </nav>
     </div>
    )

};
export default Navbar