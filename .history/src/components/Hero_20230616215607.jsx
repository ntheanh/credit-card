import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row -flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 px-6 sm:px-16`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="" className="" />
          <p className="text-white">
            <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
          </p>
        </div>
      </div>

      <div>{/* <img src={robot} alt="" /> */}</div>
    </section>
  );
};

export default Hero;
