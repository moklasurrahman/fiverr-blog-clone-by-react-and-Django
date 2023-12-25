import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../assets/fiverr logo.svg'
import { getPoster } from '../services/ApiServices';
import { toast } from 'react-toastify';

const BusinessPoster = () => {

  const[posters, setPoster] = useState()
  


  useEffect(() => {
    async function fetchposter() {
      try {
        const data = await getPoster();
        setPoster(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "top-center",
        });
      }
    }
    fetchposter();
  }, []);

  return (
    <section className=" w-full relative flex align-middle justify-start m-auto my-[20px]">
     




     {posters?.slice(0, 1).map((poster) => (

      <article key={poster.id}>
         <div className="overlay z-[-500] p-[40px] bg-[#0000006b] w-full h-full absolute"></div>
      <img className=' px-0 z-[-1000] object-cover absolute w-full h-full top-0 bottom-0 opacity-95' src={`${process.env.REACT_APP_API_URL}/${poster.img}`} alt='' type="img"></img>

      <div className="p-[40px] xl:py-[50px] xl:px-[80px] z-auto flex justify-start items-center w-full">
          <div className="flex flex-1 flex-col gap-[50px] xl:gap-[80px] text-white">
            <div className=' flex gap-5 items-center'>
              <img className=' w-[150px] h-[50px]' src={logo} alt="" />
            {/* <span className=' text-[20px] font-bold'></span> */}
            </div>

            <div>
              <h2 className=" italic font-[Domainedisplay] pb-[20px] text-[32px] xl:text-[60px] xl:leading-[80px] font-[700] leading-[38px]">{poster.title}</h2>
              <Link to='' className=' bg-[#d0e500] py-2 px-4 rounded-md text-black xl:text-[20px]'>{poster.btnText}</Link>
            </div>
            <p className=" text-[15px] xl:text-[20px]">{poster.text}</p>
          </div>
          <div className="sm:flex-1 hidden sm:block"></div>
        </div>
      </article>
             
      ))}
      
</section>
  )
}

export default BusinessPoster
