import React from "react";
import about from '../assets/images/about.jpg'

const About = () => {
  return (
    <div className="container my-10 md:my-16">
      <h1 className="text-text1 font-bold text-2xl ml-5 md:ml-20 md:mb-5">Our Story</h1>
      <div className="flex flex-col-reverse md:flex-row justify-evenly">
        <div className="flex flex-col justify-start">
          <p className="text-gray-500 font-normal text-sm mx-5 md:mx-20 my-3">
            Our food delivery application was founded in 2021 by a group of
            passionate college students who wanted to bridge the gap between
            customers and their favorite restaurants. They recognized the need
            for a reliable and efficient food delivery service in the Wandoor
            region and decided to take on the challenge of creating their own
            platform.
          </p>
          <p className="text-gray-500 font-normal text-sm mx-5 md:mx-20 my-3">
            Our application is designed to be user-friendly and accessible to
            everyone. We understand that not everyone is comfortable ordering
            food through a mobile app, so we have multiple options available for
            our customers. They can place their orders through our mobile app,
            on Whatsapp, or by calling us directly. We believe in providing our
            customers with the flexibility and convenience to order in whatever
            way they feel comfortable.
          </p>
          <p className="text-gray-500 font-normal text-sm mx-5 md:mx-20 my-3">
            Our delivery drivers are trained to deliver food with care and
            efficiency, ensuring that your food arrives fresh and delicious. We
            use GPS technology to track the location of our delivery drivers,
            giving you real-time updates on the status of your order.
          </p>
          <p className="text-gray-500 font-normal text-sm mx-5 md:mx-20 my-3">
            We partner with some of the best restaurants in the Wandoor region
            to offer our customers a diverse range of cuisines and dishes to
            choose from. We believe in supporting local businesses, which is why
            we have carefully curated our list of partner restaurants to ensure
            that they meet our standards of quality and service.
          </p>
          <p className="text-gray-500 font-normal text-sm mx-5 md:mx-20 my-3">
            Overall, our food delivery application is dedicated to providing our
            customers with a seamless and enjoyable food delivery experience. We
            are constantly innovating and improving our platform to meet the
            needs of our customers and make ordering food as easy as possible.
            We are proud to serve the Wandoor region and look forward to
            expanding our services in the future.
          </p>
        </div>
        <img src={about} alt="" className="max-w-md max-h-96 m-5 md:m-0" />
      </div>
    </div>
  );
};

export default About;
