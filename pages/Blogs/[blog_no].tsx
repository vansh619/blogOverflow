import {useRouter} from "next/router";
import Image from 'next/image'


export const getStaticPaths = async () => {
    const res = await fetch(`https://crudcrud.com/api/72a70e7cb9af4ad8bc8534feb9e38ea8/iblog/`);
    const data = await res.json();

    const paths = data.map((curElem: { _id: { toString: () => any; }; }) =>{
        return{
              params:{
            blog_no : curElem._id.toString(),
              }
        }
    });

    return {
        paths,
        fallback:false
    };
};
export const getStaticProps = async (context) => {
    const id = context.params.blog_no;
    const res = await fetch(`https://crudcrud.com/api/72a70e7cb9af4ad8bc8534feb9e38ea8/iblog/${id}`);
    const data = await res.json();

    return {
        props: {
          data,
        },
      };
    };

const blogNo = ({data}) => {
    const { _id, name, imageURL, info, slug, Category, writer} = data;
    return(
        <div>
            
    <div className="w-4/5 mx-auto overflow-hidden bg-white rounded-lg shadow-md m-28 dark:bg-gray-800">

        <div className="p-6">
            <div>
                <div className="w-auto h-24">
                <img src="https://images.app.goo.gl/MGdjXR2hzi5neNMx9" alt="" />
                </div>
            <h1  className="block pb-4 mt-2 font-mono text-5xl font-semibold text-gray-800 dark:text-white hover:text-gray-600">{name}</h1>
                <span className="pb-4 ml-1 font-mono text-3xl font-semibold text-indigo-600 uppercase dark:text-blue-400">{Category}</span>
                
                <p className="mt-2 font-mono text-lg text-gray-600 dark:text-gray-400">{slug}</p>
            </div>

            <div className="mt-4">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <h1 className="mx-2 ml-1 font-mono text-xl font-semibold text-gray-700 dark:text-gray-200">{writer}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>


    )
}

export default blogNo;
