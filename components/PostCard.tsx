import React, {FunctionComponent} from "react" ;
import {Iposts} from "../types";
import { Link } from 'react-router-dom'
import { title } from "process";

const PostCard:FunctionComponent<{
    post: Iposts
}> = ({
    post :{
    name,
    image_path,
    info,
    slug,
    category,
    postdate,
    writer
    },


}) => {
    return (
        <div className="w-4/5 lg:flex">
          <div className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l" title="Mountain"> <img src="/favicon.ico" alt="" />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
            <div className="mb-8">
              <p className="flex items-center justify-center text-yellow-600 text-md">
                {category}
              </p>
              <div className="mb-2 text-xl font-bold text-gray-900">{name}</div>
              <Link to= {`/post/${name}`}>
              <span>{title}</span>
              </Link>
              <p className="text-base text-gray-700">{info}</p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 mr-4 rounded-full" src="/favicon.ico" alt="Avatar of Writer"></img>
              <div className="text-sm">
                <p className="leading-none text-gray-900">{writer}</p>
                <p className="text-gray-600">{postdate}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PostCard  ;


