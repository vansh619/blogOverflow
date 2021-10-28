import { useState,useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {motion} from "framer-motion";
import AdvCard from '../components/AdvCard';
import Testemonial from "../components/Testemonial";

const landingPage = () => {
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }, [])
    return (
       <div>
        { loading ? <div>
        <div className="flex content-center justify-center w-screen h-screen bg-gray-900 ">
            <div className="inset-0 z-10 flex items-center justify-center">
        <ClimbingBoxLoader 
        size={30}
        color={"#ffffff"}
        loading={loading}
        speedMultiplier={1.2} />
        </div>
        </div>
        </div>
        :
       <div >
           <div className="inset-0 items-center justify-center p-12 font-mono font-semibold text-white duration-300 ">
               <motion.h1   whileHover={{ scale: 1.3 }} className="inset-0 flex items-center content-center justify-center w-11/12 p-8 ml-2 text-5xl z md:text-8xl lg:h-1/2 sm:w-fullabsolute">blogOverflow</motion.h1>
               <div className="p-12 opacity-20 hover:opacity-100 ">
               <p className="items-center content-center text-base text-white sm:text-2xl ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p> 
               <button  className="px-4 py-2 my-10 text-xl font-normal text-white bg-gray-400 rounded sm:text-2xl md:text-2xl lg:text-3xl hover:bg-gray-600" onClick={()=>window.open("mailto:vanshchaudhary77@gmail.com") }>Mail Blog</button>
               <a className="float-left px-4 py-2 my-10 text-xl font-normal text-white bg-gray-400 rounded g-blue-500 hover:bg-gray-600 md:2xl lg:3xl sm:float-right md:float-right lg:float-right sm:text-2xl md:text-2xl lg:text-3xl" href="tel:9213875585">Call Us</a>
               </div>
               </div>
        <div className="p-4">
          </div>
          <AdvCard/>
        </div>
}
<Testemonial/>
</div>
    )};


export default landingPage;
