import React from "react";
import i1 from '../../assets/images/p2i1.svg'
import i2 from '../../assets/images/p2i2.svg'
import i3 from '../../assets/images/p3i3.svg'


const Objective = () => {
  return (
    <>
      <div className="naxatw-container naxatw-mx-auto naxatw-bg-[#FFF3F2] naxatw-h-[900px] naxatw-border-solid naxatw-border-black naxatw-rounded-[20px] naxatw-mt-[40px]">
        <div className="naxatw-relative naxatw-flex naxatw-w-[80%] naxatw-mx-auto naxatw-top-[77px] naxatw-h-[60%]">
          <div className="naxatw-w-1/2 naxatw-pl-[20px] naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-center">
            <h1 className="naxatw-font-red-hat-display naxatw-font-normal naxatw-text-gray-800 naxatw-text-[34px] naxatw-leading-9 naxatw-mb-[20px]">
              This portal is developed to identify the enabling factors of the
              development supported by development partners in Karnali Province
              of Nepal.
            </h1>
            <h1 className="naxatw-font-red-hat-display naxatw-font-normal naxatw-text-gray-800 naxatw-text-[18px] naxatw-leading-6">
              In the last few years, there has been a huge concern among the
              civil societies, government and international development partners
              about improving the quality of the life of people in Karnali.
              Nepal government along with the support of donor countries and
              multilateral funding agencies has invested huge resources to the
              implementing development project through NGO/INGO and others. Many
              organizations including NGO/INGOs have spent a significant amount
              of resources towards assessing development initiatives through
              project intervention at provincial and municipal level. The focus
              of all these investments and efforts is to create the equitable
              prosperous society but such investment is not always based on the
              proper assessment of the local needs and expectations.
            </h1>
          </div>
          <div className="naxatw-bg-[url('../../assets/images/Image2.png')] naxatw-w-[40%] naxatw-h-[100%] naxatw-rounded-[20px] naxatw-relative naxatw-right-[-120px]"></div>
        </div>
        <div className="naxatw-w-[80%] naxatw-mx-auto naxatw-h-[283px] naxatw-border-[2px] naxatw-border-solid naxatw-border-black naxatw-mt-[80px]">
          <div className="naxatw-relative naxatw-h-full naxatw-w-1/3">
            <img src={i1} />
          </div>
          <div className="naxatw-relative naxatw-h-full naxatw-w-1/3">
            <img src={i2} />
          </div>
          <div className="naxatw-relative naxatw-h-full naxatw-w-1/3">
            <img src={i3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Objective;
