import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getNews } from "../../services/ApiServices";
import { toast } from "react-toastify";

const HeroHome = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNews();
        setNews(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "top-center",
        });
      }
    }
    fetchNews();
  }, []);

  const limitedNews = news?.slice(2, 3);

  return (
    <section className="sm:py-[40px]">
      {limitedNews?.map((item) => (
        <article key={item.id}>
           <Link to={`/card-details/${item.slug}`}>
          <div className="mt-[50px] w-full md:mt-0 flex md:justify-center md:m-auto">
           
              <div className="px-[15px] w-full py-[20px] flex flex-col md:flex-row gap-[10px] sm:py-[40px] md:px-[30px] md:m-auto justify-center md:items-center">
                <div className="left flex-1 md:overflow-hidden">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${item.img}`}
                    className="object-cover w-full"
                    alt=""
                    // style={{width:"300px", height:"500px"}}
                  />
                </div>

                <div className="right flex-1 flex flex-col gap-[20px] md:gap-[15px] mt-[30px] md:mt-0 md:ml-[60px] md:mb-[20px]">
                 
                  <span className=" text-[16px] font-[700] text-green-500">
                  {item.blog_tag.tag_name}
                  </span>
                  <h2 className=" dark:text-white md:leading-[50px] md:mr-[0px] text-[1.8rem] text-[#404145] font-[700] md:text-[2.3rem]">
                  {item.title}
                  </h2>
                  <p className=" md:mt-[20px] text-[#404145] dark:text-white text-[.7rem] font-[700] xl:font-medium xl:text-[1.2rem]">
                   By {item.author} |{" "}
                    <span className=" font-[400]">{item.date}</span>
                  </p>


                </div>
              </div>
           
          </div>
           </Link>
        </article>
      ))}
    </section>
  );
};

export default HeroHome;
