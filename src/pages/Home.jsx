import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import SecondaryNav from '../components/SecondaryNav'

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar2 />
        <SecondaryNav />
       {/*  <Navbar /> */}
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home