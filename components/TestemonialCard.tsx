import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import { FunctionComponent } from "react";
import Itestimony from "../types";

const TestemonialCard: FunctionComponent<{testemonial: Itestimony}> = ({
    testemonial: {name,fullname , slug}, 
})     => {
    return (
 <div className="container w-full mx-4 my-4 bg-white rounded-lg sm:px-6 lg:px-4" >
        <div className="px-4 py-2">
        <p className="mb-1 text-xl font-normal text-gray-700">{name}</p>
        <p className="text-base font-normal text-blue-600">{fullname}</p>
        <p className="text-base font-normal leading-loose text-gray-400">{slug}</p>
            <div className='flex text-sm text-gray-200 '>
            </div>
        </div>
    </div>

    )
}

export default TestemonialCard;
