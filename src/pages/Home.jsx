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
import HorizontalList from '../components/Products/HorizontalList'

const Home = () => {
  return (
    <div style={{backgroundColor: '#ffe5e5'}}>
        <Navbar />
        <Announcement />
        <SecondaryNav />
       {/*  <Navbar /> */}
        <Slider />
        <Categories />
        <HorizontalList />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home