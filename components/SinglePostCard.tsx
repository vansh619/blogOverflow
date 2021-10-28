import {FunctionComponent} from "react" ;
import {Iposts} from "../types";



const SinglePostCard:FunctionComponent<{
    sing_post: Iposts
}> = ({
    sing_post :{
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
        <div className="bg-white">
            <div>
            <h1>{category}</h1> 
                <img src="/tree.jpeg" alt="Blog Image" className="w-full h-96" />
                <p className="float-right">{postdate}</p>
                <h1 className="content-center text-3xl font-bold">{name}</h1>
                
                <p>Author:  <span>{writer}</span></p> 
                <h3>{}</h3>
                <p>{slug}</p>
                <h1>{name}</h1>
                <h3>{info}</h3>
                <p>{slug}</p>
                
                <p>{postdate}</p>
            </div>

        </div>
    )
}

export default SinglePostCard;
