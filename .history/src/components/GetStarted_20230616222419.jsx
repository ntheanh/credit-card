import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className="flex flex-row">
          <p>
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="" className="mr-4" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
