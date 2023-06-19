import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 `}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-center items-center flex-row m-3"
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] leading-[40px] text-white text-[40px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-semibold xs:text-[25px] leading-[20px] text-[25px] text-gradient uppercase ">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
