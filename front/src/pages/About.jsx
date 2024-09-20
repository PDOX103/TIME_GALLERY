import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src="https://the1916company.imgix.net/cms/05_01_24_1916_value_Desktop_6d383143c6.jpg"
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We offer the finest collection of watches from the world's most
            renowned brands. Quality and customer satisfaction are our top
            priorities. Our curated selection ensures you'll find the perfect
            timepiece to match your style. Discover elegance and precision with
            our exclusive watch collections.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Time-Gallery is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Our quality assurance ensures that every watch is made with
            premium materials and meticulous attention to detail, offering
            durability and comfort.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Our products are designed for convenience, offering easy care,
            versatile styles, and a perfect fit for everyday.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exeptional Customer Service:</b>
          <p className="text-gray-600">
            Our exceptional customer service ensures a seamless shopping
            experience with personalized support, quick responses, and
            hassle-free assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
