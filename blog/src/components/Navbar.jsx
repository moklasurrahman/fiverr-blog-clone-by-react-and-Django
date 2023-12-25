import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import img2 from "../assets/fiverr logo.svg";

import { getSingleCategorys } from "../services/ApiServices";
import { toast } from "react-toastify";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const [singleCategory, setSingleCategory] = useState();

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  
  //for darkMode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  //search item
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/search/?q=${searchTerm}`
      );
      if (response.ok) {
        const data = await response.json();
        history.push({
          pathname: "/search-results",
          search: `?q=${searchTerm}`, // Pass query parameter using search
          state: { searchResults: data },
        });
      } else {
        alert("Error fetching search results:", response.statusText);
      }
    } catch (error) {
      alert("Error fetching search results:", error);
    }
  };


  useEffect(() => {
    async function fetchSingleCategory() {
      try {
        const data = await getSingleCategorys();
        setSingleCategory(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "top-center",
        });
      }
    }
    fetchSingleCategory();
  }, []);


  return (
    <section className=" relative">
      <div className="flex items-center m-auto justify-between p-[20px] md:items-center md:justify-center">
        {/* <div className="md:hidden"></div> */}
        <div className="left flex items-center flex-col sm:flex-row w-full 
          md:gap-5 md:flex-1
        ">
          <Link
            to="/"
            className="flex items-center gap-3 sm:gap-1 font-bold sm:mr-[5px] text-[#263e53] dark:text-white"
          >
            <img
              src={img2}
              alt=""
              className="w-[80px] md:w-[120px]"
            />
          </Link>

          {/* ---------------------------Search---------------------------- */}
          <form
            onSubmit={handleSearch}
            className="flex absolute top-[100px] inset-8 items-center justify-center md:sticky md:w-[50%]"
          >
            <div className=" w-full bg-slate-200 dark:bg-dark border text-black dark:text-white dark:border-white flex items-center p-2 sm:pl-3 rounded-[10px] sm:bg-transparent sm:border-[1px] sm:rounded-l-sm sm:rounded-r-[0px] sm:p-[4px] md:p-[2px] sm:border-green-500">
              <i className="bi bi-search text-[15px] md:text-[12px] md:ml-3 text-gray-400 dark:text-white"></i>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                required
                placeholder="search"
                className=" outline-none  ml-2 bg-transparent w-full"
              />
            </div>

            <input
              className=" hidden sm:block bg-green-500 hover:bg-green-600 py-2 px-5 text-white rounded-r-sm text-[12px] font-[600] cursor-pointer md:py-[5.5px]"
              type="submit"
              placeholder="Search"
            />
          </form>
        </div>

        <div
          className={` bg-white dark:bg-dark shadow-md md:shadow-none md:bg-transparent sm:flex-[75%] md:flex-[1] fixed md:sticky top-0 left-0 z-10 w-[80%] md:w-auto h-screen transform transition-transform ease-in-out md:block ${
            show ? "translate-x-0" : "-translate-x-full md:-translate-x-0"
          } md:h-auto`}
        >
          <div
            onClick={() => setShow((prive) => !prive)}
            className=" cursor-pointer flex justify-end p-[20px] md:hidden"
          >
            <span>
              <i className="bi bi-x text-[35px] font-[700] text-[#7a7d85] dark:text-white"></i>
            </span>
          </div>

          <ul className=" w-full flex md:items-center flex-col md:flex-row md:gap-[15px] xl:gap-[20px] pt-[50px] md:pt-0 md:px-0 px-[30px] text-[12px] md:text-[16px]  font-[700] text-[#263e53] md:justify-end  md:m-auto dark:text-white ">
            <Link to="/" className=" cursor-pointer  md:hidden">
              <li className="mt-5 md:mt-0">Home</li>
            </Link>
            {singleCategory?.slice(0, 4).map((category) => (
              <article key={category.id}>
                <li className="mt-5 md:mt-0">
                  <Link
                    to={`/category/${category.slug}`}
                    className=" hover:underline xl:decoration-4 underline-offset-4 xl:underline-offset-[18px] decoration-[#bfbc1d]"
                    aria-current="page"
                  >
                    {category.name}
                  </Link>
                </li>
              </article>
            ))}

            <li className="mt-[20px] text-[12px] md:text-[9px] xl:text-[12px] font-[700] md:mt-0">
              <a
                href="https://course.e-freelancing.com"
                target="_blank"
                rel="noreferrer"
                className=" dark:text-white text-[13px] border-[1px] rounded-md border-green-500 px-3 py-2 xl:px-2 ml-[10px] md:ml-0 xl:underline-offset-[18px] hover:bg-green-600 hover:text-white hover:border-none"
                aria-current="page"
              >
                Go to Fiverr.com
              </a>
            </li>

            {darkMode ? (
              <li
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full hidden  text-green-500 cursor-pointer max-w-fill mt-[30px] md:mt-0"
              >
                <i className="bi bi-brightness-high-fill"></i>
              </li>
            ) : (
              <li
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full hidden  text-[#0c0c0c] cursor-pointer max-w-fill mt-[30px] md:mt-0"
              >
                <i className="bi bi-moon-fill"></i>
              </li>
            )}
          </ul>

        </div>

        <div onClick={() => setShow((prive) => !prive)} className=" md:hidden">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nav;
