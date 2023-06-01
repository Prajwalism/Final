import React from 'react'
import "assets/css/index.css";
import Navbar from '../../Components/Navbar'
import Body from '../../Components/Body'

const Home = () => {
  return (
    <>
      <div className="naxatw-container naxatw-h-[640px] naxatw-bg-gradient-to-t naxatw-from-blue-900 naxatw-to-blue-500 naxatw-border-solid naxatw-rounded-b-[20px] naxatw-mx-auto">
        <Navbar/>
        <Body/>
      </div>
    </>
  );
}

export default Home
