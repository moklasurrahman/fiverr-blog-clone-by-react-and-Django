import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getSingleBloge } from "../services/ApiServices";
import { useTitle } from "../Hook";
import logo from "../assets/fiverlogoicon.jpg";
import errorimg from "../assets/notfound.avif"

import MetaTags from "react-meta-tags";

const DetailsCard = () => {
  const [SingleNews, setSingleNews] = useState({});

  useTitle("Blog Details");

  const { slug } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getSingleBloge(slug);
        setSingleNews(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "top-center",
        });
      }
    }
    fetchProducts();
  }, [slug]);

  return (
    <section className="w-full">
      <MetaTags>
        <title>{SingleNews.title}</title>
        <meta name="description" content="Some description." />
        <meta name="keywords" content={SingleNews.metaKeyword}></meta>
        <meta property="og:title" content={SingleNews.title} />
      </MetaTags>

      <div className=" mt-[80px] mx-[20px]  md:mx-0  md:px-[200px]">
        <div className="top text-center mb-[30px] sm:mt-[60px] sm:mx-[72px]">
          <span className=" text-[16px] font-[700] text-[#d8bd44]">
            {SingleNews.blog_tag && 
              <>
                  {SingleNews?.blog_tag.tag_name}
              </>
            }
          </span>
          <h2 className=" text-[#404145] dark:text-white mt-[10px] mb-[20px] text-[1.6rem] sm:text-[2.2rem] md:text-[2.3rem] xl:text-[2.5rem] leading-[2rem] sm:leading-[3rem] md:leading-[3.5rem] font-[700]">
            {SingleNews.title}
          </h2>
          <p className=" md:mt-[20px] text-[#404145] dark:text-white text-[.7rem] font-[700] xl:font-medium xl:text-[1.2rem]">
            {SingleNews.author} |{" "}
            <span className=" font-[400]">{SingleNews.date}</span>
          </p>
        </div>

        <div className="">

          {
            SingleNews.img? <img
            src={`${process.env.REACT_APP_API_URL}/${SingleNews.img}`}
            className=" object-cover w-full h-full"
            alt=""
          /> : <img
          src={errorimg}
          className=" object-cover w-full h-full"
          alt=""
        />
          }


          
        </div>

        <div className="mb-[60px] text-[#7a7d85] dark:text-gray-400 sm:mx-[72px]">
          <p
            dangerouslySetInnerHTML={{ __html: SingleNews.description }}
            className=" mt-[20px] mb-[25px] text-[1rem]"
          ></p>

          <div className=" mt-[80px] pb-[50px] flex gap-[20px] border-b-2 ">
           <a target="_blank" rel="noreferrer" href="#">
           <i className="bi bi-twitter text-[25px] text-[#7a7d85] cursor-pointer"></i>
           </a>
           <a target="_blank" rel="noreferrer" href="#">
           <i className="bi bi-facebook text-[25px] text-[#7a7d85] cursor-pointer"></i>

           </a>
          </div>

          <div className=" pt-[40px] pb-[20px] flex flex-col gap-5 sm:flex-row">
            <img
              className="w-[80px] h-[80px] object-cover rounded-[100px] mr-[40px]"
              src={logo}
              alt=""
            />
            <div className="text-[#7a7d85] md:mr-[50px] xl:mr-[80px]">
              <span className=" text-[.9rem] font-[700]">
                Fiverr Team
              </span>
              <p className=" mt-[10px] text-[.9rem] text-start font-[600]">
                Whether you're in the process of expanding your small business
                or embarking on the journey of establishing a brand from the
                ground up, we offer the essential resources to ensure you stay
                well-informed and at the forefront of your industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mx-[20px]">
        <div className="pb-[120px]">
          <Freelancers />
        </div>
      </div> */}
    </section>
  );
};
export default DetailsCard;
