import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import Singlereview from "./Singlereview";
import Buttonbox from "./Buttonbox";
const Reviewcard = () => {
  return (
    <div className="bg-white text-black/80 p-4 rounded-3xl flex flex-col gap-2">
      <span className="cursor-pointer hover:bg-zinc-300 rounded-full p-1 w-fit">
        <IoMdClose size={25} />
      </span>
      <h1 className="text-2xl font-bold">Leave a review</h1>
      <Singlereview
        title="Safety"
        desc="Give review about the safety."
        stars={[<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]}
      />
      <Singlereview
        title="Communication"
        desc="Give review about the communication."
        stars={[
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar color="#888" />,
        ]}
      />
      <div className="flex flex-col gap-0 font-sans">
        <p className="text-base sm:text-lg font-semibold">Would you recommend Trausti?</p>
        <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="flex gap-8 items-center my-2">
          <div className="flex items-center gap-2">
            <span className="text-xl text-zinc-500">
              <MdThumbDown />
            </span>
            <span className="text-sm">No</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl text-green-600">
              <MdThumbUp />
            </span>
            <span className="text-sm">Yes</span>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Praise</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <Buttonbox/>
    </div>
  );
};

export default Reviewcard;
