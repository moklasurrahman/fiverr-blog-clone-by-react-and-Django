import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState,} from "react";
import Card from "../components/Card";
import BannerSection from "../components/BannerSection";
import { getCategory } from "../services/ApiServices";
import { toast } from 'react-toastify';
import BusinessPoster from '../components/BusinessPoster';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { useTitle } from '../Hook';
import MetaTags from "react-meta-tags";



const BlogcategoryList = () => {

  const [category_filter, setcategory_filter] = useState()
  
  const categorySlug  = useParams()
  const slug =(categorySlug.categorySlug)

  useTitle(`${slug}`);
  

  useEffect(() => {
    async function fetchCategory(){
     try{
       const data = await getCategory(slug)
         setcategory_filter(data)
     }
     catch(error){
        toast.error(error.message, {closeButton: true, position: "top-center" });
     }
     
    }
    fetchCategory()
   }, [slug]);


   const limitedCategory = category_filter?.slice(0, 3)
   const limitedCategory2 = category_filter?.slice(3, 5)
   const limitedCategory3 = category_filter?.slice(6, 50000)
   const BannerCard = category_filter?.slice(1, 2)



  return (
    <section>

      {
        category_filter?.map((item)=>(
          <MetaTags key={item.id}>
          <title className=' capitalize'>{item.category.slug} | Blog</title>
          <meta name="description" content={item.metaDescription} />
          <meta name="keywords" content={item.metaKeyword}></meta>
          <meta property="og:title" content={item.title} />
        </MetaTags>
        ))
      }

      

      <div className="title mt-[50px] md:mt-[80px] xl:mt-0 p-[20px]">
       <span> <h1 className="text-[2rem] font-[700] text-[#404145] dark:text-white capitalize">
          {slug}
        </h1></span>
      </div>

      <div className="m-auto p-[20px] justify-center items-center md:items-start flex gap-10 flex-col lg:flex-row md:grid md:m-0 md:grid-cols-3 lg:grid-cols-3">
       
       {
        limitedCategory?.map((item, index) =>(
          <Card key={item.id} item={item}/>
        ))
       }
      </div>


      <div>
        {
           BannerCard?.map((banner)=>(
              <BannerSection key={banner} banner={banner}/>
           ))
        }
        
        </div>


        <div className="m-auto p-[20px] justify-center items-center md:items-start flex gap-10 flex-col lg:flex-row md:grid md:m-0 md:grid-cols-3 lg:grid-cols-3">
       

       {
        limitedCategory2?.map((item, index) =>(
          <Card key={item.id} item={item}/>
        ))
       }
      </div>


      <div>
        <BusinessPoster/>
      </div>



      <div className="m-auto p-[20px] justify-center items-center md:items-start flex gap-10 flex-col lg:flex-row md:grid md:m-0 md:grid-cols-3 lg:grid-cols-3">
       

       {
        limitedCategory3?.map((item, index) =>(
          <Card key={item.id} item={item}/>
        ))
       }
      </div>





    </section>
  );
};

export default BlogcategoryList;
