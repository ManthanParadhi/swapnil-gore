import React from 'react'
import Navigation from '../Component/Navigation'
import Carousel from './Carousel'

const Home = () => {
    return (
       <>
        <Navigation/>
        <div className="homecarousel">
        <Carousel/>
        </div>
       </>
    )
}
export default Home;