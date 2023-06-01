import React from 'react'
import image1 from '../../assets/images/Logo.svg'
import image2 from '../../assets/images/Flag.png'

const Navbar = () => {
  return (
    <>
      <div className="naxatw-flex naxatw-justify-between">
        <img src={image1} className="naxatw-pl-20" />
        <div className="naxatw-w-[20rem] naxatw-mr-20">
          <ul className='naxatw-flex naxatw-justify-around naxatw-items-center naxatw-font-red-hat-display naxatw-font-bold naxatw-text-base naxatw-leading-6 naxatw-text-white naxatw-flex-none naxatw-order-0"'>
            <li>Data</li>
            <li>About</li>
            <li>
              <img src={image2} />
            </li>
            <li>
              <button type="button">Log In</button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar
