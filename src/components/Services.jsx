import React from "react";
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.png";
import client6 from "../assets/clients/client6.png";
import client7 from "../assets/clients/client7.png";
import membershipOrganization from "../assets/membershipOrganization.png";
import nationalAssociations from "../assets/nationalAssociations.png";
import clubsandgroups from "../assets/clubsandgroups.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: `Membership Organisations`,
      description: `Our membership management software provides full automation of membership renewals and payments`,
      image: membershipOrganization,
    },
    {
      id: 2,
      title: `National Associations`,
      description: `Our membership management software provides full automation of membership renewals and payments`,
      image: nationalAssociations,
    },
    { id: 3, title: `Clubs And Groups`, description: `Our membership management software provides full automation of membership renewals and payments`, clubsandgroups },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
        <p className="text-neutralGrey">We have been working with some Fortune 500+ clients</p>

        {/* company logo */}
        <div className="py-12 flex flex-wrap justify-between items-center gap-8">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
          <img src={client7} alt="" />
        </div>
      </div>

      {/* services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Manage your entire community in a single system</h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services?.map((service) => (
          <div
            key={service.id}
            className="py-4 px-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex justify-center items-center h-full"
          >
            <div>
              <div className="bg-white mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} className="ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
              <p className="text-sm text-neutralDGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
