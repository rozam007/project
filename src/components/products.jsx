import React from "react";
import mobileLogin from "../assets/mobileLogin.svg";
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.png";
import client6 from "../assets/clients/client6.png";
import tesla from "../assets/tesla.png";
import right from "../assets/Right.png";

const Products = () => {
  return (
    <div>
      {/* About Text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={mobileLogin} alt="mobileLogin" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-3/4">How to design your site footer like we did</h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis
              erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
              non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
              Donec consectetur faucibus ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="testimonial">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={tesla} alt="tesla" />
          </div>

          {/* Stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralDGrey mb-8 leading-7">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
                ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse
                cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
                sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet
                magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
              <p className="text-base text-neutralGrey mb-8">British Dragon Boat Racing Association</p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img src={client1} alt="client1" />
                  <img src={client2} alt="client2" />
                  <img src={client3} alt="client3" />
                  <img src={client4} alt="client4" />
                  <img src={client5} alt="client5" />
                  <img src={client6} alt="client6" />
                  <div className="flex items-center gap-4">
                    <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">
                      Meet all Customers
                    </a>
                    <img src={right} alt="right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
