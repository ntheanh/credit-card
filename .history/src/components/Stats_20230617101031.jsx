import styles from "../style";
import { stats } from "../constants";
import { useSpring, animated } from "@react-spring/web";

const Stats = () => {
  const useActive = useSpring({ useActives: 3800, from: { useActives: 0 } });
  const company = useSpring({ companys: 3800, from: { companys: 0 } });
  const transaction = useSpring({
    transactions: 3800,
    from: { transactions: 0 },
  });
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 `}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-center items-center flex-row m-3"
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30px] leading-[40px] xs:leading-[50px] text-white ">
            <animated.div>
              {useActive.useActives.to((val) => Math.floor(val))}
            </animated.div>
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]  text-gradient uppercase ml-3 ">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
