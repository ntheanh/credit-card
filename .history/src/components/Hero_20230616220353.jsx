import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row -flex-col ${styles.paddingY}`}
    >
      <div>
        <div className="flex flex-row px-[16px] px-4">
          <img src={discount} alt="" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
      </div>

      <div>{/* <img src={robot} alt="" /> */}</div>
    </section>
  );
};

export default Hero;
