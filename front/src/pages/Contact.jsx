import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src="https://mms.businesswire.com/media/20131112005529/en/391684/5/KC_DIAMOND-COLL.jpg?download=1&_gl=1*1x9hrw9*_gcl_au*NTM1MDE2Njg0LjE3MjY4NDM4MTE.*_ga*MTI1MjcxMjEyNS4xNzI2ODQzODEx*_ga_ZQWF70T3FK*MTcyNjg0MzgxMC4xLjAuMTcyNjg0MzgxMi41OC4wLjA."
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p>Mannan Tower <br/> Modhubag, 3no. Goli, Dhaka</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
