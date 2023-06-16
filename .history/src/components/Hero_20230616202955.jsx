import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row -flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div>
          <img src={discount} alt="discount" />
          <p className="">
            <span className="text-white">20%</span>
            DISCOUNT FOR <span className="text-white">1 MONTH</span>
            ACCOUNT
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
