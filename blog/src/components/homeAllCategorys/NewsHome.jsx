import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BannerSection from "../BannerSection";
import Card from "../Card";
import { toast } from 'react-toastify';
import { getNews } from "../../services/ApiServices";

const NewsHome = () => {

const [news, setNews] = useState()



useEffect(() => {
    async function fetchNews(){
     try{
       const data = await getNews()
            setNews(data)
     }
     catch(error){
        toast.error(error.message, {closeButton: true, position: "top-center" });
     }
     
    }
    fetchNews()
   }, []);


   
   const BannerCard = news?.slice(7, 8)

  return (
    <section>
      <div className="title mt-[30px] p-[20px]">
        <Link to={`/category/news`}>
          {" "}
          <h1 className="text-[2rem] font-[700] text-[#404145] dark:text-white">
            News<i className="bi bi-chevron-right text-[18px] ml-2"></i>
          </h1>
        </Link>
      </div>

      <div className="m-auto p-[20px] justify-center items-center md:items-start flex gap-10 flex-col lg:flex-row md:grid md:m-0 md:grid-cols-3 lg:grid-cols-3">
      
      {news?.filter((item) => item.category.name === 'News').slice(0, 3).map((item) => (
              <Card key={item.id} item={item} />
            ))}


      </div>

      <div>
        
        {
            BannerCard?.map((banner)=>(
                <BannerSection key={banner} banner={banner}/>
            ))
        }
        
      </div>
    </section>
  );
};

export default NewsHome;
