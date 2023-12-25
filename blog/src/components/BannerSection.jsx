import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const BannerSection = ({banner}) => {


  const getDesc = (desc) =>{
    const count = banner.description.split('\n')[0]
    if(count.length > 80){
      return desc.slice(0, 200)+'...'
    }
    return desc
  }
  

  return (
    <section className=' py-[60px] mx-[20px]'>
      <Link to={`/card-details/${banner.slug}`}>
        <div className=' bg-white dark:bg-dark shadow-2xl dark:shadow-gray-600 sm:flex sm:items-center md:w-[740px] md:h-[420px] md:justify-center md:m-auto'>
            <div className=' sm:w-1/2 sm:h-[45vw] md:h-[420px]'>
                <img src={`${process.env.REACT_APP_API_URL}/${banner.img}`} alt="" className=' w-full h-full object-cover'/>
            </div>

            <div className='mt-[20px] sm:mb-0 sm:mt-0 p-[20px] sm:w-1/2 sm:h-full sm:px-[60px] md:flex flex-col m-auto justify-center'>
              <span className=' text-[16px] font-[700] text-green-500'>{banner.blog_tag.tag_name}</span>
              <h2 className=' mb-[10px] text-[#404145] dark:text-white text-[1.5rem] font-[700]'>{banner.title}</h2>
              <p className='font-[400] text-[13px] text-[#7a7d85] dark:text-gray-300 ' dangerouslySetInnerHTML={{__html: getDesc(banner.description)}}/>
            </div>
        </div>
        </Link>
    </section>
  )
}

export default BannerSection
