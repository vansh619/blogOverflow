import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import TestemonialCard from "./TestemonialCard";
import {testimonial} from "../data"
import Itestimony from "../types";

const Testemonial = () => {
    return (
        <div>
            <section className="h-auto max-w-6xl px-4 py-12 mx-auto my-8 sm:px-6 lg:px-4 ">
        <div className="w-full pb-8 my-8 text-center">
        
            <h1 className="pb-2 font-mono text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-heading">
                Testemonials
            </h1>
                <div className="float-left">
                <ImQuotesLeft size={70}/>
                </div>
        </div>
        <div className="grid w-auto grid-cols-1 gap-4 md:grid-cols-2">
        {testimonial.map((testimony: Itestimony) => (
             <div className="">
              <TestemonialCard testemonial={testimony} />
             </div>
            ))}
        </div>
        <div className="float-right">  
        <ImQuotesRight size={70}/>
        </div>
        </section>
        </div>
    )
}

export default Testemonial;
