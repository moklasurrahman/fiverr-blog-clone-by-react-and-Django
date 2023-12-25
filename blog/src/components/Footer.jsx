import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FooterBotom from "./FooterBotom";

const Footer = () => {
  return (
    <section>
      <div className=" hidden p-[20px] relative w-full border-t-2 h-full">
        <div className="w-full my-[40px] flex m-auto justify-center items-center md:px-[70px] xl:px-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-between w-full md:grid-cols-5 m-auto items-start xl:flex ">
            <div>
              <h2 className=" md:text-[20px] md:font-[600] mb-[20px] text-[16px] font-medium text-[#404145] dark:text-white">
                Categories
              </h2>
              <ul className="text-[#71737a] dark:text-gray-400 font-[400] text-[13px] md:text-[1rem] opacity-80">
                <li className="mb-[10px]">
                  <Link href="#" className=" hover:underline">
                    Graphics & Design
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Digital Marketing
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Writing & Translation
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Video & Animation
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Music & Audio
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Programming & Tech
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Data
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Business
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Lifestyle
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="md:text-[20px] md:font-[600] mb-[20px] text-[16px] font-medium text-[#404145] dark:text-white">
                About
              </h2>
              <ul className="text-[#71737a] dark:text-gray-400 font-[400] text-[13px] md:text-[1rem] opacity-80">
                <li className="mb-[10px]">
                  <Link href="#" className=" hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Press & News
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Partnerships
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Intellectual Property Claims
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Investor Relations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className=" md:text-[20px] md:font-[600] mb-[20px] text-[16px] font-medium text-[#404145] dark:text-white">
                Support
              </h2>
              <ul className="text-[#71737a] dark:text-gray-400 font-[400] text-[13px] md:text-[1rem] opacity-80">
                <li className="mb-[10px]">
                  <Link href="#" className=" hover:underline">
                    Help & Support
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Trust & Safety
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Selling on Fiverr
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Buying on Fiverr
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className=" md:text-[20px] md:font-[600] mb-[20px] text-[16px] font-medium text-[#404145] dark:text-white">
                Community
              </h2>
              <ul className="text-[#71737a] dark:text-gray-400 font-[400] text-[13px] md:text-[1rem] opacity-80">
                <li className="mb-[10px]">
                  <Link href="#" className=" hover:underline">
                    Events
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Forum
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Community Standards
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Podcast
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Affiliates
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Invite a Friend
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Become a Seller
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Fiverr Elevate
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Exclusive Benefits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className=" md:text-[20px] md:font-[600] mb-[20px] text-[16px] font-medium text-[#404145] dark:text-white">
                More From Fiverr
              </h2>
              <ul className="text-[#71737a] dark:text-gray-400 font-[400] text-[13px] md:text-[1rem] opacity-80">
                <li className="mb-[10px]">
                  <Link href="#" className=" hover:underline">
                    Fiverr Business
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Fiverr Pro
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Fiverr Studios
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Fiverr Logo Maker
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Fiverr Guides
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Get Inspired
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    ClearVoice
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Content Marketing
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Fiverr Workspace
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Invoice Software
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Learn
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link href="#" className="hover:underline">
                    Online Courses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FooterBotom/>
    </section>
  );
};

export default Footer;
