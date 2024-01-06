import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/banner1.svg";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center gap-12 justify-between">
            <div>
              <img src={banner1} alt="" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights <span className="text-brandPrimary">from 8 years</span>
              </h1>
              <p className="text-neutralGray text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center gap-12 justify-between">
            <div>
              <img src={banner1} alt="" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Learn and Earn Money <span className="text-brandPrimary">in 4 months</span>
              </h1>
              <p className="text-neutralGray text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
