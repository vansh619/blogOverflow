import PostCard from "../../components/PostCard";
import Link from "next/link";
import {motion} from "framer-motion"
import  {AiOutlineDelete} from "react-icons/ai"

export const getStaticProps = async () => {
    const res = await fetch(`https://crudcrud.com/api/72a70e7cb9af4ad8bc8534feb9e38ea8/iblog/`);
    const data = await res.json();
    console.log(data);
    return{
        props: {
            data,
        },
    };
};
   const deleteBlog = async (blogId:string) =>{
    const response = await fetch(`https://crudcrud.com/api/72a70e7cb9af4ad8bc8534feb9e38ea8/iblog/${blogId}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
    });
   const data = await response.json( );
 };
const Post = ({data}) => {
    return (
        <div>
        <motion.h1   whileHover={{ scale: 1.3 }} className="inset-0 flex items-center content-center justify-center w-11/12 p-8 ml-2 font-mono text-5xl z md:text-8xl lg:h-1/2 sm:w-fullabsolute">Give these a read</motion.h1>
        {
            data.map((curElem: 
              { name: string;
                Category: boolean;
                id: number;
                info: string;
                writer: string;
                _id:string;
                postdate: string;
              slug:string })=>(
                  <div>
                  
            <div key={curElem.name}>
                <div className="">
        <motion.div   animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 1 }}  className="w-auto mt-5 lg:max-w-full lg:flex">
          <div className="flex-none w-auto h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l" title="Mountain"> <img src="/favicon.ico" alt="" />
          </div>
          <div className="flex flex-col justify-between w-auto p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
            <div className="mb-8">
              <p className="flex items-center justify-center text-yellow-600 text-md">
                {curElem.Category}
              </p>
              <button className="float-right mt-2" onClick={() =>deleteBlog(curElem._id) && window.location.reload()}><AiOutlineDelete/></button>

              <Link href={`/blogs/${curElem._id}`}>
              <div className="mb-2 text-xl font-bold text-gray-900">{curElem.name}</div>
              </Link>
              
              <p className="text-base text-gray-700">{curElem.slug.slice(0,140)}</p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 mr-4 rounded-full" src="/favicon.ico" alt="Avatar of Writer"></img>
              <div className="text-sm">
                <p className="leading-none text-gray-900">{curElem.writer}</p>
                <p className="text-gray-600">{curElem.postdate}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
      
            </div>
            ))
        }
        </div>
    )
}

export default Post;
