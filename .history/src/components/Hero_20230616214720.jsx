import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row -flex-col ${styles.paddingY}`}
    >
      <div className="flex-1 flex-col">
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
