import { v4 as uuidv4 } from 'uuid';
import {Formik} from "formik";
import {motion} from "framer-motion";
import TutVideo from '../components/TutVideo';

const Form = () => {
  
    const registerUser = async event => {
      event.preventDefault()
      const res = await fetch('https://crudcrud.com/api/72a70e7cb9af4ad8bc8534feb9e38ea8/iblog/', {
        body: JSON.stringify({
          id : event.target.id.value,
          name: event.target.name.value,
          slug: event.target.slug.value,
          Category: event.target.Category.value,
          writer : event.target.writer.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })  
      const result = await res.json()
    }
    return (
      <div>
          <h1   className="inset-0 flex items-center content-center justify-center w-11/12 p-8 ml-2 font-mono text-5xl text-gray-100 z md:text-8xl lg:h-1/2 sm:w-fullabsolute">Try Writing</h1>
          <h1  className="inset-0 flex items-center content-center justify-center w-11/12 p-8 mt-10 ml-2 font-mono text-2xl text-white z md:text-3xl lg:h-1/2 sm:w-fullabsolute">Learning Resources</h1>
          <motion.div animate={{ y: -50 }} transition={{ ease: "easeOut", duration: 3 }}>
          <TutVideo/>
          </motion.div>
          <div className="p-20 pt-10">
          <form onSubmit={registerUser}>  
          <div className="grid grid-cols-2 gap-2">
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Whats your blog called" required className="block w-full gap-3 px-4 py-2 mt-2 font-mono text-gray-700 bg-white border border-gray-300 rounded-md gap-x-10 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring grid-1/2"/>
          <select id="Category" name="Category" className="block w-full px-4 py-2 mt-2 font-mono text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          <option value="" className="text-gray-300" >--Choose a category--</option>
          <option value="SPORTS">SPORTS</option>
          <option value="SCIENCE & TECH.">SCIENCE & TECH.</option>
          <option value="TRAVEL">TRAVEL</option>
          <option value="POLITICS">POLITICS</option>
          </select>
          </div>
          <div>
          <textarea id="slug" name="slug"  autoComplete="slug" placeholder="Your blog goes here ......" required  className="block w-full px-4 py-2 mt-2 font-mono text-gray-700 bg-white border border-gray-300 rounded-md float top dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring font-xl h-96"/>
          </div>
          <div className="grid grid-cols-1 ">
          <input id="writer" name="writer" type="text" autoComplete="writer" placeholder="What shall we call you" required className="block w-full grid-cols-3 px-4 py-2 mt-2 font-mono text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring " />
          </div>
          <br />
          <div>
        <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }} className="flex float-right w-auto p-5 mx-auto font-mono text-2xl font-normal text-white uppercase rounded-lg shadow-md bg-gradient-to-r from-green-600 to-indigo-600 hover:from-indigo-600 hover:to-green-600 focus:outline-none" type="submit" onClick={() =>window.location.reload()}>Submit blog</motion.button>
        <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }} className="flex float-left w-auto p-5 mx-auto font-mono text-2xl font-normal text-white uppercase rounded-lg shadow-md bg-gradient-to-r from-indigo-600 to-green-600 hover:from-green-600 hover:to-indigo-600 focus:outline-none" type="reset">Reset it</motion.button>
        </div>
      </form>
      </div>
      </div>

    )
  }
export default Form;


