import React from "react";
import { Link } from "react-router-dom";

const Card = ({item}) => {
 
  const getDesc = (desc) =>{
    const count = item.description.split('\n')[0]
    if(count.length > 80){
      return desc.slice(0, 120)+'...'
    }
    return desc
  }
  

  return (
    <section>
      <div className="max-w-full w-full border-none">
       
        <Link to={`/card-details/${item.slug}`} className='card'>
          <div className="">
          <img className=" object-cover min-h-[00px] min-w-[00px]" src={`${process.env.REACT_APP_API_URL}/${item.img}`} alt="" style={{height:"300px", width:"100%"}} />
          </div>
        </Link>

        <div className="py-5">
          <div className="flex gap-[20px]">
          <span className=" text-[16px] font-[700] text-green-500">{item.blog_tag.tag_name}</span>
          <span className=" bg-gray-100 py-1 px-3 rounded-md text-[10px] font-[700] text-[#080808]">{item.date}</span>
          </div>
          <Link to={`/card-details/${item.slug}`}>
            <h5 className="mb-[10px] mt-3 font-[600] leading-8 text-[#404145]  text-[1rem] md:text-[1.3rem] md:leading-7 tracking-tight dark:text-white">
            {item.title}
            </h5>
          </Link>

          <p className=" text-[#7a7d85] font-medium dark:text-gray-300" dangerouslySetInnerHTML={{__html: getDesc(item.description)}} />


        </div>
      </div>
    </section>
  );
};

export default Card;
