import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MetaTags from "react-meta-tags";

const SearchResults = ({ location }) => {
  const searchResults = location.state.searchResults;

  // Access the query parameter from the location object
  // const queryParams = new URLSearchParams(location.search);
  // const query = queryParams.get('q');

  return (
    <section>
     
      <MetaTags>
        <title className=" capitalize"> Search Results</title>
      </MetaTags>

      <div className="my-[80px] text-[#404145] dark:text-white px-[20px] md:px-[150px]">
        <h2 className=" text-[1.6rem] font-[700] mb-[20px]">Search Results</h2>

        <div className="all flex flex-col gap-[40px]">
          {searchResults.map((data) => (
            <article key={data.id}>
              <Link to={`card-details/${data.id}`}>
                <div className="flex flex-col sm:flex-row gap-[20px] sm:flex">
                  <div className="left flex-1">
                    <img
                      className="w-full h-full"
                      src={`http://127.0.0.1:8000/${data.img}`}
                      alt={data.title}
                    />
                  </div>
                  <div className="right flex-1">
                    <span className="mb-[8px] text-[.8rem] font-bold text-green-500">
                      {data.blog_tag.tag_name}
                    </span>
                    <h2 className=" text-[1.3rem] leading-[1.8rem] text-left font-[700] mt-[10px]">
                      {data.title}
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data.description.substring(0, 400),
                      }}
                      className="text-[#7a7d85] dark:text-gray-300 mt-[10px] text-[1rem] text-left leading-[1.6rem ] font-[600]"
                    ></p>
                  </div>
                </div>
              </Link>
            </article>
          ))}


          {/* 
        <div className="flex flex-col sm:flex-row gap-[20px] sm:flex">
          <div className="left">
            <img className='w-full h-full' src={img} alt="" />
          </div>
          <div className="right">
            <span className='mb-[8px] text-[.8rem] font-bold text-[#1dbf73]'>BUSINESS TIPS</span>
            <h2 className=' text-[1.3rem] leading-[1.8rem] text-left font-[700] mt-[10px]'>Fiverr Pro: One Hell of a Year | Fiverr Blog</h2>
            <p className=' text-[#7a7d85] mt-[10px] text-[1rem] text-left leading-[1.6rem ] font-[600]'>Fiverr Pro: One Hell of a Year. By. Fiverr Team. | July 31, 2018. About a year ago when we launched. Fiverr Pro. , we had. big. hopes, but couldn’t imagine just how much it would take off.…</p>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-[20px] sm:flex">
          <div className="left">
            <img className='w-full h-full' src={img} alt="" />
          </div>
          <div className="right">
            <span className='mb-[8px] text-[.8rem] font-bold text-[#1dbf73]'>BUSINESS TIPS</span>
            <h2 className=' text-[1.3rem] leading-[1.8rem] text-left font-[700] mt-[10px]'>Fiverr Pro: One Hell of a Year | Fiverr Blog</h2>
            <p className=' text-[#7a7d85] mt-[10px] text-[1rem] text-left leading-[1.6rem ] font-[600]'>Fiverr Pro: One Hell of a Year. By. Fiverr Team. | July 31, 2018. About a year ago when we launched. Fiverr Pro. , we had. big. hopes, but couldn’t imagine just how much it would take off.…</p>
          </div>
        </div> */}
        
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
