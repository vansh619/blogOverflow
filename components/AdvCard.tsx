import {BsSearch} from "react-icons/bs";
import {IoIosStats} from "react-icons/io";
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import {FaRandom} from "react-icons/fa"


const AdvCard = () => {
    return (
        <div>
            <div className="w-full h-auto">
 
    <section className="w-full bg-gray-800 h-3/4">
        <div className="container flex flex-col w-full h-full px-8 mx-auto sm:px-0">
            <h1 className="mt-10 font-mono text-6xl font-bold text-gray-100 ">Why choose us ?</h1>
            <div className="flex">
            <BsSearch size={35}className="m-8" color="white"/>
            <p className="mt-8 font-mono text-3xl text-gray-200">Better S.E.O.</p>
            </div>
            <div className="flex">
            <IoIosStats size={35}className="m-8" color="white"/>
            <p className="mt-8 font-mono text-3xl text-gray-200">Optimised for growth</p>
            </div>
            <div className="flex">
            <AiOutlineUsergroupAdd size={35}className="m-8" color="white"/>
            <p className="mt-8 font-mono text-3xl text-gray-200">Great Community</p>
            </div>
            <div className="flex">
            <FaRandom size={35}className="m-8" color="white"/>
            <p className="mt-8 font-mono text-3xl text-gray-200">Loren Ipsum</p>
            </div>
        </div>
    </section>
    </div>
    </div>
    )
}

export default AdvCard;
