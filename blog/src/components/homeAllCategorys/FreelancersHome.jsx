import { useEffect, useState } from "react";
import { getNews } from "../../services/ApiServices";
import { toast } from "react-toastify";
import Card from "../Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BusinessPoster from "../BusinessPoster";

const FreelancersHome = () => {

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
      
      
      return (
        <section>
          <div className="title mt-[30px] p-[20px]">
            <Link to={`/category/freelancers`}>
              {" "}
              <h1 className="text-[2rem] font-[700] text-[#404145] dark:text-white">
                Freelancers<i className="bi bi-chevron-right text-[18px] ml-2"></i>
              </h1>
            </Link>
          </div>
    
          <div className="m-auto p-[20px] justify-center items-center md:items-start flex gap-10 flex-col lg:flex-row md:grid md:m-0 md:grid-cols-3 lg:grid-cols-3">
          
            {news?.filter((item) => item.category.name === 'Freelancers').slice(0, 3).map((item) => (
              <Card key={item.id} item={item} />
            ))}

          </div>
    
          <div>
            
            <BusinessPoster/>
          </div>
        </section>
      );
    };
    
    export default FreelancersHome;