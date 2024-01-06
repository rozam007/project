import React from "react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8">
            <a href="" className="text-2xl font-semibold flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
                <path d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#263238" />
                <path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#263238" />
                <path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#3083dc" />
                <path d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z" fill="#3083dc" />
                <path d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z" fill="#3083dc" />
                <path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#3083dc" />
              </svg>
              <span className="text-[#263238]"></span>
              Nexcent
            </a>
            <div>
              <p className="mb-1">Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
