import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    let currentLocation = window.location.href.split("/");
    currentLocation = currentLocation[currentLocation.length - 1];
    setLocation(currentLocation);

    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="">
      <h2 className="font-bold text-5xl text-orange-600 text-center mt-12">
        Our Services
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {location === ""
          ? services
              .slice(0, 3)
              .map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))
          : services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
      </div>
      {location === "" && (
        <div className="my-10 text-center">
          <Link to={"/services"}>
            <button className="btn normal-case text-2xl mt-2 text-center">
              See All
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Services;
