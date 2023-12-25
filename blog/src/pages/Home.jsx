import React from 'react'

import NewsHome from '../components/homeAllCategorys/NewsHome'
import HeroHome from '../components/homeAllCategorys/HeroHome'
import BusinessesHome from '../components/homeAllCategorys/BusinessesHome'
import FreelancersHome from '../components/homeAllCategorys/FreelancersHome'
import CaseStudiesHome from '../components/homeAllCategorys/CaseStudiesHome'
import { useTitle } from '../Hook'
const Home = () => {

  useTitle('Blog');

  return (
    <div className=' md:px-[0px] xl:px-[0] md:mx-[70px] xl:mx-[20px]'>
   
    <HeroHome/>
    <NewsHome/>
    <BusinessesHome/>
    <FreelancersHome/>
    <CaseStudiesHome/>
   
    </div>
  )
}

export default Home

