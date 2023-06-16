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
        <div>
          <img src={discount} alt="" />
        </div>
      </div>

      <div>
        <img src={robot} alt="" />
      </div>
    </section>
  );
};

export default Hero;
